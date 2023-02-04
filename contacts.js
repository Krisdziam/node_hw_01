const fs = require("fs").promises;
const path = require("path");
const nodeid = require("node-id");

const contactsPath = path.resolve("./db/contacts.json");

async function getParsedData() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function listContacts() {
  try {
    const contacts = await getParsedData();
    console.table(contacts);
  } catch (error) {
    console.log(error);
  }
}
async function getContactById(contactId) {
  try {
    const contacts = await getParsedData();
    const getContact = contacts.find((item) => item.id === contactId);
    console.log(getContact);
    if (!getContact) {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await getParsedData();
    const getFilteredContact = contacts.filter((item) => item.id !== contactId);
    const stringifiedContacts = JSON.stringify(getFilteredContact);
    await fs.writeFile(contactsPath, stringifiedContacts, "utf8");
    console.log(getFilteredContact);
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await getParsedData();
    const addNewContact = {
      id: nodeid(),
      name,
      email,
      phone,
    };
    contacts.push(addNewContact);
    const stringifiedContacts = JSON.stringify(contacts);
    await fs.writeFile(contactsPath, stringifiedContacts, "utf8");
    console.log(contacts);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
