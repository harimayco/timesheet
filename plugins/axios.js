export default function ({$axios, app}) {
  $axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const code = parseInt(error.response && error.response.status);
      app.$toast.error(error.response.data.error.message);
      if ([401, 403].includes(code)) {
        if(app.$auth.loggedIn){
            app.$auth.logout();
        }
      }

      return Promise.reject(error);
    }
  );
}