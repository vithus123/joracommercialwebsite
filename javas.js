const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

// Sample product data (you can load this from a backend)
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 24.99 },
];

// Add products to the cart
function addToCart(product) {
    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
        <img src="product${product.id}.jpg" alt="${product.name}">
        <div class="item-details">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
        </div>
        <button class="remove-button" onclick="removeFromCart(${product.id})">Remove</button>
    `;

    cartItems.appendChild(item);
    total += product.price;
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Remove products from the cart
function removeFromCart(productId) {
    const item = document.querySelector(`.cart-item button[onclick="removeFromCart(${productId})"]`);
    if (item) {
        const price = products.find(product => product.id === productId).price;
        total -= price;
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        cartItems.removeChild(item.parentElement);
    }
}

// Initialize the cart with sample products
products.forEach(product => addToCart(product));
