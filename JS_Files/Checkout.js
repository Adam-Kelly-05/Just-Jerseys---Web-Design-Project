var checkout = document.getElementById('buy-now');
var failure = document.getElementById("payment-failure");
var success = document.getElementById("payment-success");

failure.style.display = 'none';
success.style.display = 'none';

var loggedin = localStorage.getItem('loggedIn');
if (loggedin == 0) {
	window.location.href = "Login.html";
}

checkout.addEventListener("click", (event) => {
	event.preventDefault();

	var cardnumber = document.getElementById('cardNumber').value;
	var cardcvv = document.getElementById('cardCvv').value;

	if (/^\d{4} \d{4} \d{4} \d{4}$/.test(cardnumber) && /^\d{3}$/.test(cardcvv)) { // Regex
		failure.style.display = 'none';
		failure.classList.add("d-none");
		success.style.display = 'block';
		success.classList.remove("d-none");

		localStorage.setItem('checkout', 0);
	} else {
		failure.style.display = 'block';
		success.style.display = 'none';
		success.classList.add("d-none");
		failure.classList.remove("d-none");
	}

	return false;
})
