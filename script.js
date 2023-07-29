// js/script.js
// Function to open the order form with the selected product name
function openOrderForm(productName, productImageSrc) {
  document.getElementById('orderFormSection').style.display = 'block';
  document.getElementById('selectedProduct').textContent = productName;
  document.getElementById('selectedProductImage').src = productImageSrc;
  // scroll to the order from section
  const orderFormSection = document.getElementById('orderFormSection');
  orderFormSection.scrollIntoView({behavior: 'smooth'});
}



// Adding event listeners to the "Order Now" buttons for each product
document.addEventListener('DOMContentLoaded', function () {
  const orderButtons = document.querySelectorAll('.order-button');
  

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

