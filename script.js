const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 8999,
    image: "https://via.placeholder.com/300x200?text=Smartphone",
    link: "product.html?id=1"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 1999,
    image: "https://via.placeholder.com/300x200?text=Earbuds",
    link: "product.html?id=2"
  },
  {
    id: 3,
    name: "Laptop",
    price: 45999,
    image: "https://via.placeholder.com/300x200?text=Laptop",
    link: "product.html?id=3"
  }
];

let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
  alert(`${product.name} added to cart!`);
}

function loadProducts() {
  const list = document.getElementById("product-list");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

if (document.getElementById("product-list")) {
  loadProducts();
}
