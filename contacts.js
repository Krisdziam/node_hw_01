const fs = require("fs").promises;
const path = require("path");
// const express = require("express");
// const app = express();
// require('dotenv').config()

const contactsPath = path.resolve('./db/contacts.json')
// const PORT = 8090;

async function listContacts() {
    try {
      const data = await fs.readFile(contactsPath, 'utf8');
      console.table(JSON.parse(data));
    } catch (error) {
      console.log(error);
    }
  }
  function getContactById(contactId) {
    // ...твій код
  }
  
  function removeContact(contactId) {
    // ...твій код
  }
  
  function addContact(name, email, phone) {
    // ...твій код
  }


  module.exports = {listContacts}
// app.listen(PORT, (err) => {
//     if (err) {
//       console.error("Error", err);
//     }
//     console.log(`Server works on ${PORT}`);
//   });
  