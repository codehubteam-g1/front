export default function (context) {
    if (context.$auth.loggedIn) {
        context.redirect('http://localhost:3000/user');
    }
}