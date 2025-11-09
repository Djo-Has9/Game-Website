document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("orderForm");
  const message = document.getElementById("orderMessage");

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tea = document.getElementById("tea").value;
    const quantity = document.getElementById("quantity").value;

    if (tea && quantity > 0) {
      message.textContent = `🫖 Your order for ${quantity} ${tea}${quantity > 1 ? 's' : ''} has been placed!`;
      orderForm.reset();

      message.style.opacity = "1";
      setTimeout(() => message.style.opacity = "0", 4000);
    } else {
      message.textContent = "⚠️ Please select a tea and enter a valid quantity!";
    }
  });
});
