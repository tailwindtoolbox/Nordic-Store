const orderButtons = document.querySelectorAll('.order-btn');
      const orderForm = document.getElementById('orderForm');
      const productSelect = document.getElementById('productSelect');

      // Function to toggle the order form visibility
      function toggleOrderForm(productName) {
        // Show the order form
        orderForm.classList.remove('hidden');

        // Set the selected product in the dropdown
        const option = document.createElement('option');
        option.text = productName;
        productSelect.innerHTML = '';
        productSelect.add(option);

        // You can add more logic here to pre-fill other fields if needed
      }

      // Add click event listeners to all order buttons
      orderButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const productName = btn.dataset.product;
          toggleOrderForm(productName);
        });
      });
  