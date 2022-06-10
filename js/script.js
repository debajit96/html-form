function formData() {
  var firstName = document.forms["userform"]["firstname"];
  var lastName = document.forms["userform"]["lastname"];
  var countryName = document.forms["userform"]["country"];

  if (firstName.value == "") {
    window.alert("Please Enter Your First Name");
    firstName.focus();
    return false;
  }
  if (lastName.value == "") {
    window.alert("Please Enter Your Last Name");
    lastName.focus();
    return false;
  }
  if (countryName.value == "") {
    window.alert("Please Enter Your Country");
    countryName.focus();
    return false;
  }
  return true; //redirecting to the next page that is the form is directly submitted.
}
