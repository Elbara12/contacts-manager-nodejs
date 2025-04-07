// Get contact ID from URL
const urlParams = new URLSearchParams(window.location.search);
const contactIdHTML = document.getElementById("contactId");
const contactId = urlParams.get("id");
contactIdHTML.textContent = contactId;

// Handle delete confirmation
document
  .getElementById("confirmDeleteBtn")
  .addEventListener("click", async () => {
    const response = await fetch(`/contacts/${contactId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Contact deleted successfully!");
      window.location.href = "/index.html";
    } else {
      alert("Failed to delete contact.");
    }
  });
