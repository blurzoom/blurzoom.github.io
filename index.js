import moment from 'moment';
import Noty from 'noty';

// index.js
console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
new Noty({text: 'Some notification text 4'}).show();