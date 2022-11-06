

// let main = document.querySelector("main");

// const chat = document.querySelector(".new-div2");

import { conversation } from "./data"

export let func = conversation.forEach((row, index) => {
    let main = document.querySelector("main");
    const chat = document.querySelector(".new-div2");
    setTimeout(() => {

        main.innerHTML += `
    <div class="message message--${row.side}">
      <div class="message__text">${row.text}</div>
    </div>
  `;
    }, index * "200");
});

console.log("hello")