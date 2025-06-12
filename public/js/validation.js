function validateForm() {
  const email = document.querySelector('input[name=email]').value;
  const mobile = document.querySelector('input[name=mobile]').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;
  if (!emailRegex.test(email)) {
    alert("Invalid Email");
    return false;
  }
  if (!mobileRegex.test(mobile)) {
    alert("Invalid Mobile Number");
    return false;
  }
  return true;
}