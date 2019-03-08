export default function ({ app }) {
   app.$auth.onError((error, name, endpoint) => {
    //console.log(endpoint)
    //console.log(error)
    //console.log(endpoint)
  })
}