// Auth0 Setup (for login on book page, etc.)
const auth0Config = { // Load from config.yml, but for static, hardcoded or env
    domain: 'dev-3gpg45y4fuh1kr87.eu.auth0.com',
    clientId: 'N6PirF2OiBwPPEYQQkMbyKoMcdiIp60t',
    audience: 'https://wedoproperty.co.za/api'
};
// Use Auth0 SDK
const auth0 = new auth0.WebAuth(auth0Config); // Add <script src="https://cdn.auth0.com/js/auth0/9.26.5/auth0.min.js"></script> in head if needed
// Example: auth0.login({}) for booking auth - expand as needed

// Other JS, e.g., form validation
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site loaded');
});
