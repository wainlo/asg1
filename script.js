// Display a welcome promo message when button is clicked
function showPromo() {
    alert("Welcome! Use code 'FIRST10' for a 10% discount on your first service.");
  }
  
  // Apply promo code and display result
  function applyPromo() {
    const promoCode = document.getElementById("promoCode").value;
    const promoResult = document.getElementById("promoResult");
  
    if (promoCode === "FIRST10") {
      promoResult.textContent = "Promo code applied! You get a 10% discount.";
    } else {
      promoResult.textContent = "Invalid promo code. Please try again.";
    }
  }
  