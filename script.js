

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



