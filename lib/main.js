import readline from 'readline';
import axios from 'axios';
readline.emitKeypressEvents(process.stdin);
console.log(
  'Welcome to random fact 👻 ! \nPress ENTER to get new useless fact\n'
);
console.log('Made with ❤️  by Amir braham \n ');

const giveRandomFact = () => {
  axios
    .get('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(({ data }) => {
      console.log('DID YOU KNOW THAT :  ' + data.text, '\n');
    });
};

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else if (key.name === 'enter') {
    giveRandomFact();
  }
});
