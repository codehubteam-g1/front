export default function(context) {
    console.log(context.$auth.loggedIn)
     console.log(context.$auth.user)
    if(!context.$auth.loggedIn){
      context.redirect('localhost:3000/user/login');   
    }
}