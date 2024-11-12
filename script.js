document.querySelectorAll(".product-card button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("open");
}

// Quick View Modal
document.querySelectorAll(".product-card img").forEach((img, index) => {
  img.addEventListener("click", () => {
    showModal(index); // Show modal with product details
  });
});

function showModal(index) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn">Close</button>
      
      <img src="./images/blue_3_1400x.webp" alt="Product Image" class="product-image">
      <h3>Electric Blue Runner</h3>
      <p class="price">$120.00</p>
      <p>Experience top performance with our Electric Blue Runner, designed for comfort and style.</p>

      <div class="product-details">
        <h4>Product Details</h4>
        <ul>
          <li>Lightweight and breathable material</li>
          <li>Flexible sole for easy movement</li>
          <li>Available in multiple sizes</li>
          <li>Perfect for running and casual wear</li>
        </ul>
      </div>

      <div class="size-selection">
        <h4>Select Size</h4>
        <select name="size" id="size">
          <option value="8">Size 8</option>
          <option value="9">Size 9</option>
          <option value="10">Size 10</option>
          <option value="11">Size 11</option>
          <option value="12">Size 12</option>
        </select>
      </div>

      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.remove();
  });
}

document
  .querySelector(".newsletter form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    this.reset();
  });
