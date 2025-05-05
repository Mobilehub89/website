window.onload = function() {
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('order')) || [];

    const notificationDiv = document.getElementById('notification');

    if (cart.length > 0) {
        let total = 0;

        // Display the cart items
        notificationDiv.innerHTML = `
            <h2>Order Details</h2>
            ${cart.map(item => {
                total += item.price * item.quantity;
                return `
                    <p>${item.name} - ${item.quantity} x Php ${item.price} = Php ${item.price * item.quantity}</p>
                `;
            }).join('')}
            <h3>Total: Php ${total}</h3>
            <button onclick="completeOrder()">Complete Order</button>
        `;
    } else {
        notificationDiv.innerHTML = "<p>Your cart is empty.</p>";
    }
};

// Complete Order function
function completeOrder() {
    alert("Thank you! Your order is now complete.");
    // Clear the order data
    localStorage.removeItem('order');

    // Redirect to home page
    window.location.href = 'index.html';
}