<template>
	<v-layout align-center justify-center row>
		<v-flex xs12 md6>
			<v-card class="card--flex-toolbar">
	          <v-toolbar color="light-blue darken-4" dark card prominent>
	            <v-toolbar-title class="body-2">Edit Profile</v-toolbar-title>
	            <v-spacer></v-spacer>
	            <v-btn disabled icon>
	              <v-icon>edit</v-icon>
	            </v-btn>

	          </v-toolbar>

	          <v-divider></v-divider>

	          <v-card-text>
	          <v-form @submit.prevent="submitEdit" id="edit-profile-form">
			          <v-text-field
			            v-model="user.name"
			            label="Name"
			            
			          ></v-text-field>
			       
			          <v-text-field
			            v-model="user.notelepon"
			            label="Phone Number"
			            
			          ></v-text-field>
			 
					<v-card-actions>
						<v-spacer></v-spacer>
			          <v-btn type="submit" :loading="loading" outline color="primary">Change</v-btn>
			        </v-card-actions>
			    </v-form>
	          </v-card-text>
	        </v-card>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	data() {
		return {
			user: this.$auth.user,
			loading: false
		}
	},
	async asyncData({ $axios }) {
	    const user = await $axios.$get('/users/me')
	    return { user: user }
	},
	methods: {
		async submitEdit() {
			this.loading = true;
			let data = (await this.$axios.$put('/users/me', {
				name: this.user.name,
				notelepon: this.user.notelepon
			})).data;
			this.user = data;
			this.$auth.fetchUser();
			this.loading = false;
		}		
	},
	  head() {
	    return{
	      title: 'Edit Profile - ' + process.env.APP_NAME
	    }
	  }

}
</script>