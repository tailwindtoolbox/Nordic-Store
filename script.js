// Function to open the order form with the selected product name
function openOrderForm(productName, productImageSrc) {
  document.getElementById("orderFormSection").style.display = "block";
  document.getElementById("selectedProduct").textContent = productName;
  document.getElementById("selectedProductImage").src = productImageSrc;
  // scroll to the order from section
  const orderFormSection = document.getElementById("orderFormSection");
  orderFormSection.scrollIntoView({ behavior: "smooth" });
}

// Function to open the installmental plan form
function scrollToInstallmentalPlan() {
  const installmentalPaymentSection = document.getElementById(
    "installmentalPaymentSection"
  );
  document.getElementById("confirmOrderModal").style.display = "none";
  installmentalPaymentSection.scrollIntoView({ behavior: "smooth" });
}

// Function to open the product image popup
function openProductImagePopup(imageSrc) {
  const popup = document.getElementById("productImagePopup");
  const image = document.getElementById("popupImage");
  image.src = imageSrc;
  popup.style.display = "block";
}

function closeProductImagePopup() {
  document.getElementById("productImagePopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".order-button");
  const orderCovers = document.querySelectorAll(".object-cover");

  // to open the order form when the order button is clicked
  orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const productName = button.getAttribute("data-product");
      const productPrice = button.getAttribute("data-price");
      const productImageSrc = button.getAttribute("data-image");

      // Populate the confirmation section with product details
      document.getElementById("confirmationProductName").textContent =
        productName;
      document.getElementById("confirmationProductPrice").textContent =
        "Price: " + productPrice;

      // Show the confirmation modal (popup)
      document.getElementById("confirmOrderModal").style.display = "flex";
      // Hide the order form
      document.getElementById("orderFormSection").style.display = "none";

      // Add event listener for the "Confirm Order" button in the confirmation section
      document
        .getElementById("confirmOrderBtn")
        .addEventListener("click", function () {
          // Hide the confirmation modal (popup)
          document.getElementById("confirmOrderModal").style.display = "none";
          // Show the order form
          document.getElementById("orderFormSection").style.display = "block";
          openOrderForm(productName, productImageSrc);
        });
    });
  });

  // to open the product image popup when the order cover is clicked
  orderCovers.forEach(function (cover) {
    cover.addEventListener("click", function () {
      const imageSrc = cover.getAttribute("src");
      openProductImagePopup(imageSrc);
    });
  });

  const orderForm = document.getElementById("orderForm");
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form field values
    const productName = document.getElementById("selectedProduct").textContent;
    const name = document.getElementById("name").value;
    const deliveryAddress = document.getElementById("deliveryAddress").value;
    const nearestBusStop = document.getElementById("nearestBusStop").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const phoneNumber2 = document.getElementById("phoneNumber2").value;
    const quantity = document.getElementById("quantity").value;

    // Construct WhatsApp message
    const whatsappMessage = `Order Details:
Product Name: ${productName}
Name: ${name}
Delivery Address: ${deliveryAddress}
Nearest Bus Stop: ${nearestBusStop}
City: ${city}
State: ${state}
Phone Number: ${phoneNumber}
Phone Number 2: ${phoneNumber2}
Quantity: ${quantity}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappNumber = "08120691079";

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}/?text=${encodedMessage}`;

    // Replace 'whatsappnumber' with your actual WhatsApp number
    window.location.href = whatsappURL;
  });
});
