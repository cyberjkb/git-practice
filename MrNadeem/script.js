// NEW: Function to reveal the promo code when the image is clicked
function revealPromo() {
    const hiddenText = document.getElementById('secretPromoText');
    // Toggles the display from 'none' to 'block' so it appears on screen
    hiddenText.style.display = 'block';
}

// UPDATED: The calculator logic with the 100% joke discount
function calculateTotal() {
    const quantity = document.getElementById('quantity').value;
    const promo = document.getElementById('promoCode').value.toUpperCase();
    
    const pricePerLanyard = 2.50;
    let total = quantity * pricePerLanyard;
    let message = "";

    if (promo === "NADEEM" || promo === "MUNAWAR") {
        // 100% Discount applied! Total drops to zero.
        total = 0; 
        message = "🎉 100% VIP Admissions Discount! Your free custom lanyard is ready.";
    } else if (promo !== "") {
        message = "Invalid code. Standard pricing applied.";
    }

    document.getElementById('discountMessage').innerText = message;
    document.getElementById('finalTotal').innerText = "Total: £" + total.toFixed(2);
}