const money = n => "$" + n.toFixed(2);
const load = () => { try { return JSON.parse(localStorage.getItem("cart")) || {}; } catch { return {}; } };
const save = cart => { localStorage.setItem("cart", JSON.stringify(cart)); updateCount(); };

function updateCount() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = Object.values(load()).reduce((a, b) => a + b, 0);
}

function addToCart(id) {
  const cart = load();
  cart[id] = (cart[id] || 0) + 1;
  save(cart);
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <span class="price">${money(p.price)}</span>
      <button class="btn" data-id="${p.id}">Add to cart</button>
    </div>`).join("");
  grid.addEventListener("click", e => {
    const id = e.target.dataset.id;
    if (id) addToCart(id);
  });
}

function renderCart() {
  const box = document.getElementById("cart-items");
  if (!box) return;
  const cart = load();
  let total = 0;
  const rows = Object.entries(cart).map(([id, qty]) => {
    const p = PRODUCTS.find(x => x.id == id);
    if (!p) return "";
    total += p.price * qty;
    return `<div class="cart-row"><span>${p.name} × ${qty}</span><span>${money(p.price * qty)}</span><button data-remove="${id}">Remove</button></div>`;
  }).join("");
  box.innerHTML = rows || "<p>Your cart is empty.</p>";
  document.getElementById("cart-total").textContent = money(total);
  box.onclick = e => {
    const id = e.target.dataset.remove;
    if (!id) return;
    const c = load(); delete c[id]; save(c); renderCart();
  };
  document.getElementById("checkout").onclick = () => alert("Checkout not connected yet. Add Stripe or PayPal.");
}

document.getElementById("year").textContent = new Date().getFullYear();
updateCount();
renderProducts();
renderCart();
