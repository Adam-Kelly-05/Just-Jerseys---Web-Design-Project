// Setting up values
if (localStorage.getItem('loggedIn') == null) {
	localStorage.setItem('loggedIn', 0);
};
checkLoginStatus()
if (localStorage.getItem('checkout') == null) {
	localStorage.setItem('checkout', '0');
}
document.querySelector('#checkout').innerHTML = localStorage.getItem('checkout');

// Change Login/Logout
var logout = document.getElementById('LoginLogout');
logout.addEventListener("click", Logout);

function Logout() {
	var loggedin = localStorage.getItem('loggedIn');

	if (loggedin == 1) {
		localStorage.setItem('loggedIn', 0);
		window.location.href = "Home.html";
	} else {
		window.location.href = "Login.html";
	}
}

function checkLoginStatus() {
	var loggedin = localStorage.getItem('loggedIn');
	var userDetailsElement = document.getElementById("UserDetails");
	var loginLogoutElement = document.querySelector('#LoginLogout');

	// Check if UserDetails exists before interacting
	if (userDetailsElement) {
		if (loggedin == 1) {
			if (loginLogoutElement) {
				loginLogoutElement.innerHTML = "Logout";
			}
			userDetailsElement.classList.remove("d-none");
			userDetailsElement.classList.add("d-show");
		} else {
			userDetailsElement.classList.add("d-none");
			userDetailsElement.classList.remove("d-show");
			if (loginLogoutElement) {
				loginLogoutElement.innerHTML = "Login";
				loginLogoutElement.setAttribute("href", "Login.html");
			}
			userDetailsElement.style.display = 'none';
		}
	}
}
