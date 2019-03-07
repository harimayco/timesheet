<template>
	<v-app class="blue lighten-5">

		<v-container grid-list-md >
			<v-layout row wrap elevation-1 light class="white">
				<v-flex xs12 id="header">
					 <v-img src="/head.png" contain ></v-img>
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
		},
		head: {
		    title: 'Login'
		  }
	}
</script>
