// import { conversation } from "./data"

class Convo {

    constructor(element) {

        this.element = element;

    }
    addMessage(message, index) {
        setTimeout(() => {
            this.element.innerHTML += `
    <div class="message message--${message.side}">
      <div class="message__text">${message.text}</div>
    </div>
  `;
        }, 500 * index);
    }
}



export default Convo;



// const a = new Convo(elem);
// a.anotherProperty = 123;
// a.getElement();

// const b = new Convo(elem2)
// b.anotherProperty = 456
// b.getElement();


// // getFullConvo() {
// //     return `${this.side} ${this.name}. ${this.text}`;
// // }
