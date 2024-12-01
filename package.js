// Array to store cart items
const cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', () => {
        const packageName = button.getAttribute('data-package');
        const priceText = button.previousElementSibling.textContent.replace('$', '').replace('/month', '');
        const price = parseFloat(priceText);

        // Add the item to the cart array
        cart.push({ name: packageName, price });

        // Update the cart display
        updateCartDisplay();
    });
});

// Function to update cart display
function updateCartDisplay() {
    const cartContent = document.querySelector('.cart-content');
    const cartTotalElement = document.querySelector('.cart-total');
    cartContent.innerHTML = ''; // Clear current cart content

    // Display each item in the cart
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartContent.appendChild(cartItem);
    });

    // Update total price
    cartTotalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Checkout button event
document.querySelector('.checkout-button').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        // Save the cart data to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Redirect to the payment page
        window.location.href = 'payment.html';
    }
});
