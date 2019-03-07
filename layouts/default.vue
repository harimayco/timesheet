<template>
	<v-app class="blue lighten-5">

		<v-container grid-list-md >
			<v-layout row wrap elevation-4 light class="white">
				<v-flex xs12 id="header">
					 <v-img src="/head.png" contain ></v-img>
				</v-flex>
				<v-flex xs12 class="grey darken-3" v-if="$auth.loggedIn">
					<v-layout
				      justify-center
				      row
				      wrap
				    >
				    	<v-menu offset-y>
				    		<template v-slot:activator="{ on }">
						<nuxt-link to="/" exact><v-btn
					        color="white"
					        flat
					        
					      >Home</v-btn></nuxt-link>

					      <nuxt-link to="/inspire"><v-btn
					        color="white"
					        flat
					        
					      >Add new</v-btn></nuxt-link>

					      <nuxt-link to="/staff-list"><v-btn
					        color="white"
					        flat
					        
					      >Staff List</v-btn></nuxt-link>

					      <v-btn
					        color="white"
					        flat
					        
					      >Change Password</v-btn>

					      <v-btn
					        color="white"
					        flat
					        
					      >View Summary Workload</v-btn>

					      <v-btn
					        color="white"
					        flat
					         
					        v-on="on"
					      >
					      	<v-avatar
          
          :size="30"
          color="grey lighten-4"
        >
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar> &nbsp;&nbsp; Hi, {{ $auth.user.name }}
					      </v-btn>
					  </template>

					  <v-list>
				        <v-list-tile
				          @click=""
				        >
				          <v-list-tile-title>Edit profile</v-list-tile-title>
				      </v-list-tile>
				       <v-list-tile
				          @click=""
				        >
				          <v-list-tile-title @click="$auth.logout()">Logout</v-list-tile-title>

				        </v-list-tile>
				      </v-list>
				    </v-menu>
					  </v-menu>
					</v-layout>
				</v-flex>
				<v-flex xs12>
					<v-content>
						<v-container>
							<nuxt />
						</v-container>
					</v-content>
				</v-flex>
			</v-layout>
		</v-container>



	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				clipped: false,
				drawer: false,
				fixed: false,
				items: [
				{
					icon: 'apps',
					title: 'Welcome',
					to: '/'
				},
				{
					icon: 'bubble_chart',
					title: 'Inspire',
					to: '/inspire'
				}
				],
				miniVariant: false,
				right: true,
				rightDrawer: false,
				title: 'Vuetify.js'
			}
		}
	}
</script>
