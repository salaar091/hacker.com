
  // Get saved total from localStorage
  const orderTotal = localStorage.getItem('orderTotal') || '0';
  document.getElementById('orderTotal').textContent = orderTotal;

  // Handle form submission and redirect
  document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual form submission

    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;

    // Basic validation
    if (!name || !phone || !address || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    // Log order info to console (you could send this to a backend via fetch)
    const orderInfo = {
      name,
      email,
      phone,
      address,
      paymentMethod,
      total: orderTotal
    };
    console.log("Order Info:", orderInfo);

    // Optional: Save to localStorage (for use on success page)
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));

    // Redirect to success page
    window.location.href = "index.html";
  });