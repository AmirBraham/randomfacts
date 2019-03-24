import readline from 'readline';
import axios from "axios"


readline.emitKeypressEvents(process.stdin);
console.log('Welcome to random fact 👻 ! \nPress SPACE to get new useless fact\n');
console.log("Made with ❤️  by Amir braham \n ")



process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else if (key.name === 'enter') {
        console.log("DID YOU KNOW THAT : \n")
        axios.get("http://randomuselessfact.appspot.com/random.json?language=en")
            .then(({ data }) => console.log(data.text))

    }
})
