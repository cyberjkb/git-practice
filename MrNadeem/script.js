function calculateTotal() {
    // 1. Grab the values the user typed into the input boxes
    const quantity = document.getElementById('quantity').value;
    const promo = document.getElementById('promoCode').value.toUpperCase();
    
    // 2. Set the base price
    const pricePerLanyard = 2.50;
    let total = quantity * pricePerLanyard;
    let message = "";

    // 3. Apply the special logic for Mr. Nadeem
    if (promo === "NADEEM" || promo === "MUNAWAR") {
        total = total * 0.80; // This applies a 20% discount
        message = "🎉 Special 20% VIP Discount Applied for Mr. Nadeem!";
    } else if (promo !== "") {
        message = "Invalid code. Standard pricing applied.";
    }

    // 4. Send the final text back to the HTML page to display
    document.getElementById('discountMessage').innerText = message;
    document.getElementById('finalTotal').innerText = "Total: £" + total.toFixed(2);
}