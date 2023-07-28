// js/script.js
// Function to open the order form with the selected product name
function openOrderForm(productName) {
  document.getElementById('orderFormSection').style.display = 'block';
  document.getElementById('selectedProduct').textContent = productName;
}

// Adding event listeners to the "Order Now" buttons for each product
document.addEventListener('DOMContentLoaded', function () {
  const orderButtons = document.querySelectorAll('.order-button');

  // Add data-product attribute to buttons without it
  orderButtons.forEach(function (button) {
    if (!button.hasAttribute('data-product')) {
      const productName = button.parentElement.querySelector('h2').textContent;
      button.setAttribute('data-product', productName);
    }
  });

  const orderForm = document.getElementById('orderForm');
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle the form submission here
    // You can use the form elements like:
    // const name = document.getElementById('name').value;
    // const deliveryAddress = document.getElementById('deliveryAddress').value;
    // const nearestBusStop = document.getElementById('nearestBusStop').value;
    // const state = document.getElementById('state').value;
    // const phoneNumber = document.getElementById('phoneNumber').value;
    // const phoneNumber2 = document.getElementById('phoneNumber2').value;
    // const quantity = document.getElementById('quantity').value;
    // You can then send this data to your backend or process it as needed.
  });

  orderButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const productName = button.getAttribute('data-product');
      openOrderForm(productName);
    });
  });
});

