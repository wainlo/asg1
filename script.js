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


// Event handling for saving items
document.addEventListener('DOMContentLoaded', () => {
  const saveButtons = document.querySelectorAll('.save-item');
  const removeButtons = document.querySelectorAll('.remove-item');

  // Add save item event listeners
  saveButtons.forEach(button => {
      button.addEventListener('click', () => {
          const item = button.getAttribute('data-item');
          handleSaveItem(item);
      });
  });

  // Add remove item event listeners
  removeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const item = button.getAttribute('data-item');
          handleRemoveItem(item);
      });
  });

  // Display wishlist on page load
  displayWishlist();
});

// Function to handle saving an item
function handleSaveItem(item) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  if (!wishlist.includes(item)) {
      wishlist.push(item);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert(`${item} has been added to your wishlist!`);
  } else {
      alert(`${item} is already in your wishlist.`);
  }
  displayWishlist();
}

// Function to handle removing an item
function handleRemoveItem(item) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  if (wishlist.includes(item)) {
      wishlist = wishlist.filter(wish => wish !== item);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert(`${item} has been removed from your wishlist.`);
  } else {
      alert(`${item} is not in your wishlist.`);
  }
  displayWishlist();
}

// Function to display the wishlist
function displayWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistContainer = document.querySelector('.wishlist-section');
  wishlistContainer.innerHTML = ''; // Clear previous items

  if (wishlist.length === 0) {
      wishlistContainer.innerHTML = '<p>Your wishlist is empty.</p>';
  } else {
      wishlist.forEach(item => {
          const div = document.createElement('div');
          div.classList.add('wishlist-item');
          div.textContent = item;
          wishlistContainer.appendChild(div);
      });
  }
}




