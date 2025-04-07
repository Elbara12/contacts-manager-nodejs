const mysql = require("mysql2/promise");
const generateId = require("../utils/Id");

// Database connection configuration
async function getConnection() {
  return await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "dev",
    password: process.env.DB_PASSWORD || "dev",
    database: process.env.DB_NAME || "dev",
  });
}

// Function to add a new contact
async function addContact({ name, email, phone }) {
  if (!name || name.length < 3) {
    throw new Error("Name is required and must be at least 3 characters long");
  }
  if (!email || !email.includes("@")) {
    throw new Error("Email is required and must be valid");
  }

  const id = generateId();
  const connection = await getConnection();
  const [result] = await connection.query(
    "INSERT INTO contacts (id, name, email, phone) VALUES (?, ?, ?, ?)",
    [id, name, email, phone]
  );
  await connection.end();
  return { id, name, email, phone };
}

// Function to get all contacts
async function getAllContacts() {
  const connection = await getConnection();
  const [results] = await connection.query("SELECT * FROM contacts");
  await connection.end();
  return results;
}

// Function to get a contact by ID
async function getContactById(id) {
  const connection = await getConnection();
  const [results] = await connection.query("SELECT * FROM contacts WHERE id = ?", [id]);
  await connection.end();
  return results[0] || null;
}

// Function to update a contact
async function updateContact(id, { name, email, phone }) {
  if (!name || name.length < 3) {
    throw new Error("Name is required and must be at least 3 characters long");
  }
  if (!email || !email.includes("@")) {
    throw new Error("Email is required and must be valid");
  }

  const connection = await getConnection();
  const [result] = await connection.query(
    "UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?",
    [name, email, phone, id]
  );
  await connection.end();
  return result.affectedRows > 0 ? { id, name, email, phone } : null;
}

// Function to delete a contact
async function deleteContact(id) {
  const connection = await getConnection();
  const [result] = await connection.query("DELETE FROM contacts WHERE id = ?", [id]);
  await connection.end();
  return result.affectedRows > 0;
}

module.exports = {
  addContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};