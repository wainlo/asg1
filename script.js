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

// Apply Promo Code Logic
function applyPromo() {
  const promoCode = document.getElementById('promo-code').value.trim();
  const promoMessage = document.getElementById('promo-message');

  if (promoCode === "WELCOME10") {
    promoMessage.textContent = "Promo code applied! You get 10% off.";
  } else if (promoCode === "") {
    promoMessage.textContent = "Please enter a promo code.";
  } else {
    promoMessage.textContent = "Invalid promo code. Please try again.";
  }
}

