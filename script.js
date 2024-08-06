// This is the boilerplate code given for you
// You can modify this code
// Product data

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render products
function renderProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productItem = document.createElement('li');
    productItem.className = 'product';
    productItem.innerHTML = `
      <span>${product.name} - $${product.price}</span>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productItem);
  });
}

// Function to render cart
function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <span>${item.name} - $${item.price}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartList.appendChild(cartItem);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push(product);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Function to remove product from cart
function removeFromCart(productId) {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== productId);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Function to clear the cart
document.getElementById('clear-cart-btn').addEventListener('click', () => {
  sessionStorage.removeItem('cart');
  renderCart();
});

// Initial rendering
renderProducts();
renderCart();

