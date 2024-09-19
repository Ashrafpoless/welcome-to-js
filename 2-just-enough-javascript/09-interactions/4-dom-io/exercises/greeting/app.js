// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nametag', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
let name = readString("first") +' '+ readString("last");
  // --- create a greeting ---
let greating = 'hello ' + name + '.'; 
  // --- display the greeting ---
  displayString("greeting", greating)
});
