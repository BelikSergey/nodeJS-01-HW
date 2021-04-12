const fs =require('fs').promises
const path =require('path')
const shortId = require('shortid');
// const contacts = './db/contacts.json'



const contactsPath = path.join(__dirname, 'db', 'contacts.json');


// TODO: задокументировать каждую функцию
async function listContacts() {
    try {
      const Users = await fs.readFile(contactsPath).then((data) => JSON.parse(data))
      console.table(Users)
    } catch (error) {
      console.log(error)
    }
     
}  
  
  // listContacts()

 async function getContactById(contactId) {
    try {
      const users = await fs.readFile(contactsPath).then((data) => JSON.parse(data))
        const OneUser = users.find(item=>item.id=== +contactId)
        console.table(OneUser);
    } catch (error) {
      console.log(error)
    }
  }
    // getContactById(7)  
  
 async function removeContact(contactId) {
    // []
    try {
      let users = await fs.readFile(contactsPath).then((data) => JSON.parse(data))
        const NewUsers = users.filter(item => item.id !== +contactId)
        console.table(NewUsers);
    } catch (error) {
      console.log(error)
    }
  }
  
  // removeContact(2)

 async function addContact(name, email, phone) {
  try {
    let users = await fs.readFile(contactsPath).then((data) => JSON.parse(data))
    //    let id =shortId();
      let id =users.length +1;
    const newUser = {
       id,
       name,
       email,
       phone
      }
      users.push(newUser)
      const string = JSON.stringify(users, null ,2)
      try {
        await fs.writeFile(
          contactsPath, string)
      } catch (error) {
        console.log(error)
      }
      console.table(users)
  } catch (error) {
    console.log(error)
  } 
  }

  // addContact('Jon Snow','www@gmail.com', '9999999')

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}