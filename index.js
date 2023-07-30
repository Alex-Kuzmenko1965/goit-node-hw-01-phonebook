// console.log('Hello Word');

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers');

const contacts = require("./contacts");
// contacts.listContacts();
// contacts.getContactById("1DEXoP8AuCGYc1YgoQ6hw");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case 'get':
      const oneContacts = await contacts.getContactById(id);
      console.log(oneContacts);
      break;

    case 'add':
      const newContacts = await contacts.addContact({ name, email, phone });
      console.log(newContacts);
      break;

    case 'remove':
      const removeContacts = await contacts.removeContact(id);
      console.log(removeContacts);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction(argv);
// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: '05olLMgyVQdWRwgKfg5J6' });
// invokeAction({ action: 'add', name: 'Alex Kezma', email: 'gc-dn@ukr.net', phone: '(050) 334-0550' });
// invokeAction({ action: 'remove', id: 'ulVSma2vZ1AiDrMcsrngK' });

const arr = hideBin(process.argv)
console.log(arr);
// node index --action listContacts
const { argv } = yargs(arr);
console.log(argv);
// node index --action listContacts --id MymyLpC6_eXO3dH-2VbYC --name 'Alex Kezma' --email gc-dn@ukr.net --phone '(050)-334-0550'
invokeAction(argv);
// node index --action='list'

// node index --action='get' --id 05olLMgyVQdWRwgKfg5J6

// node index --action='add' --name 'Alex Kezma' --email gc-dn@ukr.net --phone '(050)-334-0550'

// node index --action="remove" --id MymyLpC6_eXO3dH-2VbYC