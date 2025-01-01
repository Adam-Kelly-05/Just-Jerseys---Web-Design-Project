// Creating the user
if (localStorage.getItem('userdetails') === null) {
    var userDetails = {
        firstName: "Bruce",
        lastName: "Wane",
        dob: "1939-03-30",
        address1: "Wane Manor",
        address2: "Private Island",
        address3: "Gotham City"
    };
    localStorage.setItem('userdetails', JSON.stringify(userDetails));
} else {
    var userDetails = JSON.parse(localStorage.getItem('userdetails'));
}

function setUserDetailAttributes(userDetails) {
    document.getElementById("FirstName").setAttribute('value', userDetails.firstName);
    document.getElementById("LastName").setAttribute('value', userDetails.lastName);
    document.getElementById("DOB").setAttribute('value', userDetails.dob);
    document.getElementById("Address1").setAttribute('value', userDetails.address1);
    document.getElementById("Address2").setAttribute('value', userDetails.address2);
    document.getElementById("Address3").setAttribute('value', userDetails.address3);
}

setUserDetailAttributes(userDetails);

// Editing the User
function UpdateUserDetails(event) {
    var userDetails = {};
    userDetails.firstName = document.getElementById('FirstName').value;
    userDetails.lastName = document.getElementById('LastName').value;
    userDetails.dob = document.getElementById('DOB').value;
    userDetails.address1 = document.getElementById('Address1').value;
    userDetails.address2 = document.getElementById('Address2').value;
    userDetails.address3 = document.getElementById('Address3').value;

    localStorage.setItem('userdetails', JSON.stringify(userDetails));
    alert("Success!")
    event.preventDefault();
}

var userDetailsUpdate = document.getElementById('udetails');
userDetailsUpdate.addEventListener("submit", UpdateUserDetails);
