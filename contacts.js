const fs =require('fs').promises
const path =require('path')
// const contacts = './db/contacts.json'



const contactsPath = path.normalize('./db/contacts.json') ;


// TODO: задокументировать каждую функцию
function listContacts() {
    fs.readFile(contactsPath).then((data) => console.table(JSON.parse(data)))
    .catch((error)=>console.log(error));

  }
  // listContacts()

  function getContactById(contactId) {
      let users =[]
    fs.readFile(contactsPath).then((data) => {
       users =JSON.parse(data)
       const user = users.find(item=>item.id=== +contactId)
       console.table(user);
    })
    .catch((error)=>console.log(error));
  }
    // getContactById(7)  
  
  function removeContact(contactId) {
    let users =[]
    fs.readFile(contactsPath).then((data) => {
       users =JSON.parse(data)
       const user = users.filter(item => item.id !== +contactId)

       console.table(user);
    })
    .catch((error)=>console.log(error));
  }
  
//   removeContact(2)

  function addContact(name, email, phone) {
    let users =[]
    fs.readFile(contactsPath).then((data) => {
       users =JSON.parse(data.toString())
       let id =users.length + 1;
    //    console.log(id);
       newUser = {
        id,
        name,
        email,
        phone
       }
       users.push(newUser)
       const string = JSON.stringify(users, null ,2)
       fs.writeFile(
           contactsPath, string 
        ).catch((error)=>console.log(error))
        console.table(users)
    })
    .catch((error)=>console.log(error))
  }

//   addContact('Jon Snow','www@gmail.com', '9999999')

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}