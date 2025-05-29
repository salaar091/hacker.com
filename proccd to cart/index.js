
  const orderTotal = localStorage.getItem('orderTotal') || '0';
  document.getElementById('orderTotal').textContent = orderTotal;

  document.getElementById('checkoutForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;

    if (!name || !email || !phone || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    const orderInfo = {
      name,
      email,
      phone,
      address,
      paymentMethod,
      total: orderTotal
    };

    try {
      // Replace URL with your actual server endpoint
      const response = await fetch("https://your-server.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderInfo)
      });

      if (response.ok) {
        localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
        window.location.href = "success.html";
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error("Error sending order:", err);
      alert("Server error. Please try later.");
    }
  });
