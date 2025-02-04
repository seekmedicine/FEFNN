document.getElementById('burger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});

document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Show';
    }
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }
});

document.getElementById('accept-cookies').addEventListener('click', function() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
});

if (localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'none';
}

async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const productList = document.getElementById('product-list');
    
    const techProducts = data.filter(product => product.category === 'electronics');
    
    productList.innerHTML = techProducts.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price} USD</p>
        </div>
    `).join('');
}
fetchProducts();
