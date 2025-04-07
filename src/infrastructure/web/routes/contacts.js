const { Router } = require("express");
const contactController = require("../controllers/contactController");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const contacts = await contactController.getAllContacts();
    res.json(contacts);
  } catch (err) {
    console.error("Error in GET /contacts:", err.message);
    res.status(500).json({ error: "Server error", message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await contactController.getContactById(id);
    if (!contact) {
      res.status(404).json({ error: "Contact not found" });
    } else {
      res.json(contact);
    }
  } catch (err) {
    console.error(`Error in GET /contacts/${req.params.id}:`, err.message);
    res.status(500).json({ error: "Server error", message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || name.length < 3) {
      return res.status(400).json({ error: "Invalid name (minimum 3 characters)" });
    }
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }
    const newContact = await contactController.addContact({ name, email, phone });
    res.status(201).json(newContact);
  } catch (err) {
    console.error("Error in POST /contacts:", err.message);
    res.status(500).json({ error: "Server error", message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    if (!name || name.length < 3) {
      return res.status(400).json({ error: "Invalid name (minimum 3 characters)" });
    }
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const updatedContact = await contactController.updateContact(id, { name, email, phone });
    if (!updatedContact) {
      res.status(404).json({ error: "Contact not found" });
    } else {
      res.status(200).json(updatedContact);
    }
  } catch (err) {
    console.error(`Error in PUT /contacts/${req.params.id}:`, err.message);
    res.status(500).json({ error: "Server error", message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await contactController.deleteContact(id);
    if (!result) {
      res.status(404).json({ error: "Contact not found" });
    } else {
      res.status(200).json({ message: "Contact successfully deleted" });
    }
  } catch (err) {
    console.error(`Error in DELETE /contacts/${req.params.id}:`, err.message);
    res.status(500).json({ error: "Server error", message: err.message });
  }
});

module.exports = router;