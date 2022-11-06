class message {
    constructor(side, text) {
        this.side = side;
        this.text = text;
    }
    prepareMessage() {
        return `
        <div class="message message--${this.side}">
      <div class="message__text">${this.text}</div>
    </div>`
    }
}

export default message