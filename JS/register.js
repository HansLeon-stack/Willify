document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit!");
    //validate username
    let valid = true;
    let username = document.getElementById("username").value;
    if (username.length <= 5) {
      valid = false;
      document.getElementById("usernameError").innerText =
        "Username must be more than 5 characters";
    } else {
      document.getElementById("usernameError").innerText = "";
    }
    let email = document.getElementById("email").value;
    if (!email.endsWith("@gmail.com")) {
      valid = false;
      document.getElementById("emailError").innerText =
        "Email must end with @gmail.com";
    } else {
      document.getElementById("emailError").innerText = "";
    }

    let age = document.getElementById("age");
    // Converts value from the input to an integer
    let ageInput = parseInt(age.value);

    if (isNaN(ageInput) || ageInput < 1) {
      document.getElementById("ageError").innerText = "Enter a valid age";
    } else {
      document.getElementById("ageError").innerText = "";
    }

    let password = document.getElementById("password").value;
    if (!isAlphanumeric(password)) {
      document.getElementById("passwordError").innerText =
        "Password must be alphanumeric";
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    let confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword !== password) {
      valid = false;
      document.getElementById("confirmPasswordError").innerText =
        "Wrong Password";
    } else {
      document.getElementById("confirmPasswordError").innerText = "";
    }
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
      valid = false;
      document.getElementById("genderError").innerText = "Select Gender";
    } else {
      document.getElementById("genderError").innerText = "";
    }

    if (valid) {
      alert("Registration succeed!");
    }
  });
//validate alphanum no symbol
function isAlphanumeric(password) {
  let hasNumber = false;
  let hasLetter = false;
  let hasSymbol = false;
  for (let i = 0; i < password.length; i++) {
    const c = password[i];
    if ((c >= "a" && c <= "z") || (c >= "A" && "Z")) {
      hasLetter = true;
    } else if (c >= "0" && c <= "9") {
      hasNumber = true;
    } else {
      hasSymbol = true;
    }
  }
  return hasLetter && hasNumber && !hasSymbol;
}
