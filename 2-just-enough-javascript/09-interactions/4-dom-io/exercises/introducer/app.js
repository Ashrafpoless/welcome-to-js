// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
let name = readString("fn") + ' ' + readString("ln")
  // --- create a message ---
let message = 'hello, my name is ' + name + '.'
  // --- display the message ---
  displayString("greet-field", message);
});
