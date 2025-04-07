// Handle form submission
document
  .getElementById("addContactForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const contact = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
    };

    const response = await fetch("/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    if (response.ok) {
      alert("Contact added successfully!");
      window.location.href = "/index.html";
    } else {
      alert("Failed to add contact.");
    }
  });
