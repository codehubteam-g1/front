export default function (context) {
    if (context.$auth.loggedIn) {
        context.redirect('http://127.0.0.1:3000/user');
    }
}