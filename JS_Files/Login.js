var loginStatus = document.getElementById('user-login');
loginStatus.addEventListener("submit", loginUser);

function loginUser(event) {
	event.preventDefault();
	var email = document.getElementById('UserName').value;
	var password = document.getElementById('Password').value;
	if (email == "Batman@email.com" && password == "Batman123") {
		localStorage.setItem('loggedIn', 1);
		console.log("LOGGIN SUCCESSFUL")
		window.location.href = "Home.html";
	} else {
		alert("invalid login details");
		localStorage.setItem('loggedIn', 0);
	}
	checkLoginStatus()
}
