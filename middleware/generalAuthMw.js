export default function(context) {
    console.log(context.$auth.loggedIn)
     console.log(context.$auth.user)
    if(!context.$auth.loggedIn){
      context.redirect(process.env.apiUrl+'/user/login');   
    }
}
