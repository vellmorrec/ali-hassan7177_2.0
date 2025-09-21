function validateForm() {
  let firstname = document.getElementById("firstname").value.trim();
  let surname = document.getElementById("surname").value.trim();
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');

  if (!firstname || !surname || !day || !month || !year || !email || !password || !gender) {
    alert("Please fill out all fields before signing up.");
    return false; 
  

  if (!email.includes("@") || !email.includes(".")) {
    alert(" Please enter a valid email address.");
    return false;
  }

  if (password.length < 6) {
    alert(" Password must be at least 6 characters long.");
    return false;
  }

  alert(" Sign Up Successful!");
  return true; // form submit ho jayega
}
