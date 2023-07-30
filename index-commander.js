// console.log('Hello Word');
const { Command } = require('commander');

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

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();
// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: 'rMcc5umnx-Ci1sy1e3nf5' });
// invokeAction({ action: 'add', name: 'Alex Kezma', email: 'gc-dn@ukr.net', phone: '(050) 334-0550' });
// invokeAction({ action: 'remove', id: 'rMcc5umnx-Ci1sy1e3nf5' });

invokeAction(argv);
// node index-commander --action='list'

// node index-commander --action='get' --id 05olLMgyVQdWRwgKfg5J6

// node index-commander --action='add' --name 'Alex Kezma' --email gc-dn@ukr.net --phone '(050)-334-0550'


// node index-commander --action='remove' --id ibbhjv2uoxK9qUEXgVvwV