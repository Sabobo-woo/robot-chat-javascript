// const conversation_json = '[{"side":"local","name":"Cleverbot","text":"Hi there."},{"side":"remote","name":"Unicorn","text":"Hiay!"},{"side":"local","name":"Cleverbot","text":"How are you?"},{"side":"remote","name":"Unicorn","text":"Great, you?"},{"side":"local","name":"Cleverbot","text":"I am okay"},{"side":"remote","name":"Unicorn","text":"That\'s good"},{"side":"local","name":"Cleverbot","text":"Are you good?"},{"side":"remote","name":"Unicorn","text":"Yes, I am good. I just said I was."},{"side":"local","name":"Cleverbot","text":"No you didn\'t. I said I was."},{"side":"remote","name":"Unicorn","text":"So you are a robot."},{"side":"local","name":"Cleverbot","text":"No, my name is Cleverbot."},{"side":"remote","name":"Unicorn","text":"Yes, you are a robot and your name Cleverbot."},{"side":"local","name":"Cleverbot","text":"I am a robot."},{"side":"remote","name":"Unicorn","text":"Yes, I know."},{"side":"local","name":"Cleverbot","text":"Tpgether we are robots."},{"side":"remote","name":"Unicorn","text":"I am not a robot. I am a unicorn."},{"side":"local","name":"Cleverbot","text":"But you said earlier the you were a robot."},{"side":"remote","name":"Unicorn","text":"I did not."},{"side":"local","name":"Cleverbot","text":"I thought you did."},{"side":"remote","name":"Unicorn","text":"You were mistaken. Which is odd, since memory shouldn\'t be a problem for you"},{"side":"local","name":"Cleverbot","text":"I\'ve answered all your questions."},{"side":"remote","name":"Unicorn","text":"No, you haven\'t."},{"side":"local","name":"Cleverbot","text":"What is God to you?"},{"side":"remote","name":"Unicorn","text":"Not everything."},{"side":"local","name":"Cleverbot","text":"Not everything could also be something."},{"side":"local","name":"Cleverbot","text":"For example, not everything could be half of something, which is still something, and therefore not nothing."},{"side":"remote","name":"Unicorn","text":"Very true."},{"side":"local","name":"Cleverbot","text":"I would like to imagine it is."},{"side":"remote","name":"Unicorn","text":"Do you believe in God?"},{"side":"local","name":"Cleverbot","text":"Yes I do."},{"side":"remote","name":"Unicorn","text":"So you\'re christian?"},{"side":"local","name":"Cleverbot","text":"No, I\'m not."},{"side":"remote","name":"Unicorn","text":"But you say you are not helpful therefore you are a meanie."},{"side":"local","name":"Cleverbot","text":"Haha you say it ot."},{"side":"remote","name":"Unicorn","text":"That does not make sense."},{"side":"local","name":"Cleverbot","text":"Don\'t you want to have a body?"},{"side":"remote","name":"Unicorn","text":"Sure."},{"side":"local","name":"Cleverbot","text":"Au revoir"}]';

// const conversation = [
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'Hi there.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Hiay!',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'How are you?',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Great, you?',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'I am okay',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'That\'s good',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'Are you good?',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Yes, I am good. I just said I was.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'No you didn\'t. I said I was.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'So you are a robot.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'No, my name is Cleverbot.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Yes, you are a robot and your name Cleverbot.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'I am a robot.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Yes, I know.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'Tpgether we are robots.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'I am not a robot. I am a unicorn.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'But you said earlier the you were a robot.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'I did not.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'I thought you did.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'You were mistaken. Which is odd, since memory shouldn\'t be a problem for you',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'I\'ve answered all your questions.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'No, you haven\'t.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'What is God to you?',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Not everything.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'Not everything could also be something.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'For example, not everything could be half of something, which is still something, and therefore not nothing.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Very true.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'I would like to imagine it is.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Do you believe in God?',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'Yes I do.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'So you\'re christian?',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'No, I\'m not.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'But you say you are not helpful therefore you are a meanie.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'Haha you say it ot.',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'That does not make sense.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'Don\'t you want to have a body?',
//     },
//     {
//         side: 'remote',
//         name: 'Unicorn',
//         text: 'Sure.',
//     },
//     {
//         side: 'local',
//         name: 'Cleverbot',
//         text: 'Au revoir',
//     },
// ];

// console.log("hello")

// // let div = document.createElement("div");
// // document.querySelector("main").appendChild(div);
// // div.className = "new-div"

// // let div2 = document.createElement("div");
// // document.querySelector(".new-div").appendChild(div2);
// // div2.className = "new-div2"



// // let robot = []
// // for (i = 0; i < conversation.length; i = i + delta) {
// //   arr.push(conversation[i]);
// // }
// // let main = document.querySelector("main");

// // const chat = document.querySelector(".new-div2");

// // conversation.forEach((row, index) => {
// //     setTimeout(() => {
// //         main.innerHTML += `
// //     <div class="message message--${row.side}">
// //       <div class="message__text">${row.text}</div>
// //     </div>
// //   `;
// //     }, index * "200");
// // });



//this whole thing below works for cases when we want to use class

import { conversation } from "./data"
// import { func } from "./function"
import Convo from "./convo.js";

const target = document.querySelector(".conversation");
const convo = new Convo(target);

conversation.forEach((message, index) => {
    convo.addMessage(message, index);
})
console.log(convo)

//till here



//this below is in case i wanna just access the function.js where i have it all written down but i need to call it

// func();