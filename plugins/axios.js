export default function ({ $axios, redirect, app, store }) {
	$axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log(code);
    if (code === 401) {
    	if(app.$auth.loggedIn){
    		app.$auth.logout();
    	}
    }
  })
}