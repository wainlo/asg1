// Show discount popup for first-time users
window.onload = function () {
  if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
    alert("Welcome! As a first-time user, you get a 10% discount on your first purchase!");
  }
};

// Wishlist Form Validation
document.querySelector('.wishlist-form').onsubmit = function (event) {
  const emailInput = document.getElementById('email').value.trim();
  const notificationChecked = document.getElementById('notification').checked;

  if (!emailInput) {
    alert("Please enter your email.");
    event.preventDefault();
    return false;
  }

  if (!notificationChecked) {
    alert("You must agree to receive notifications to join the wishlist.");
    event.preventDefault();
    return false;
  }

  // Redirect to the success page
  window.location.href = "wishlist-successful.html";
};






