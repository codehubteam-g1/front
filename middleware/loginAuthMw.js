export default function (context) {
    if (context.$auth.loggedIn) {
        context.redirect(process.env.apiUrl+':3000/user');
    }
}