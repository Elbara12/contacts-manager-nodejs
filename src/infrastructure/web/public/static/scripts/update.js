// Fetch contact details based on the ID in the URL
const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get("id");

async function fetchContact() {
  const response = await fetch(`/contacts/${contactId}`);
  if (response.ok) {
    const contact = await response.json();
    document.getElementById("name").value = contact.name;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;
  } else {
    alert("Contact not found.");
    window.location.href = "/index.html";
  }
}

// Handle form submission
document
  .getElementById("updateContactForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const contact = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
    };

    const response = await fetch(`/contacts/${contactId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    if (response.ok) {
      alert("Contact updated successfully!");
      window.location.href = "/index.html";
    } else {
      alert("Failed to update contact.");
    }
  });

// Load contact details on page load
fetchContact();
