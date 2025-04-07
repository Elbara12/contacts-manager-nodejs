// Fetch all contacts and populate the table
async function fetchContacts() {
  const response = await fetch("/contacts");
  const contacts = await response.json();
  const tbody = document.querySelector("#contactsTable tbody");
  tbody.innerHTML = contacts
    .map(
      (contact) => `
        <tr>
          <td>${contact.id}</td>
          <td>${contact.name}</td>
          <td>${contact.phone}</td>
          <td>${contact.email}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="window.location.href='/update.html?id=${contact.id}'">Update</button>
            <button class="btn btn-danger btn-sm" onclick="window.location.href='/delete.html?id=${contact.id}'">Delete</button>
          </td>
        </tr>
      `
    )
    .join("");
}

// Redirect to add.html when "New Contact" is clicked
document.getElementById("newContactBtn").addEventListener("click", () => {
  window.location.href = "/add.html";
});

// Load contacts on page load
fetchContacts();
