// Product list (you can add/edit/remove products here)
const products = [
    {
        name: "Cotton Kurti - Pink & White",
        price: 899,
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Designer Saree - Blue",
        price: 1799,
        img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Chiffon Dupatta",
        price: 499,
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Embroidered Lehenga",
        price: 3399,
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d15?auto=format&fit=crop&w=400&q=80"
    }
];

let cart = [];
let total = 0;

function addToCart(index) {
    const product = products[index];
    cart.push(product);
    total += product.price;
    updateCart();
    updateCartCount();
    // slight animation on add
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.classList.add('cart-bump');
        setTimeout(() => btn.classList.remove('cart-bump'), 300);
    });
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach((item, idx) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toFixed(0)}`;
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: ₹${total.toFixed(0)}`;
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function renderProducts() {
    const container = document.querySelector('.shop');
    container.innerHTML = '';
    products.forEach((prod, idx) => {
        const card = document.createElement('div');
        card.classList.add('item-card');
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}">
            <h3>${prod.name}</h3>
            <p>₹${prod.price.toFixed(0)}</p>
            <button onclick="addToCart(${idx})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// Cart modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('show');
    updateCart();
}

function checkout() {
    alert("Thank you for shopping with us! (Demo checkout)");
    cart = [];
    total = 0;
    updateCart();
    updateCartCount();
    toggleCart();
}

// Run on page load
window.onload = function () {
    renderProducts();
    updateCart();
    updateCartCount();
}

// Bump animation for Cart button
const style = document.createElement('style');
style.innerHTML = `
.cart-bump {
    animation: cartBump .3s;
}
@keyframes cartBump {
    0% {transform:scale(1);}
    30% {transform:scale(1.19);}
    100% {transform:scale(1);}
}
`;
document.head.appendChild(style);
