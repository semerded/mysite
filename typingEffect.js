class TypingEffect {
    constructor(id, text, resetWhenNotVisible = false) {
        this.id = id;
        this.requestedText = text;
        this.currentText = "";
        this.underScoreVisible = false;
        this.resetRequest = false;
        this.resetWhenNotVisible = false
    }

    start() {
        if (document.getElementById(this.id) === null) {
            setTimeout(() => {
                this.start();
            }, 100);
        } else {
            this.id = document.getElementById(this.id);
            this.#typingEffect()
        }
    }

    restart() {
        this.#typingEffect()
    }

    reset() {
        this.resetRequest = true;
        this.id.innerHTML = ""
        this.currentText = ""
    }

    #typingEffect() {
        let nextLetterIndex = this.currentText.length;
        this.currentText += this.requestedText[nextLetterIndex];
        this.id.innerHTML = this.currentText;
        if (this.requestedText.length > this.currentText.length) {
            setTimeout(() => {
                this.#typingEffect();
            }, 50);
        } else {
            this.resetRequest = false;
            this.#idleUnderscore();
        }
    }

    #idleUnderscore() {
        if (this.resetRequest) {
            return
        }
        if (!this.underScoreVisible) {
            this.id.innerHTML += "_"
        } else {
            this.id.innerHTML = this.requestedText;
        }
        this.underScoreVisible = !this.underScoreVisible;
        setTimeout(() => {
            this.#idleUnderscore()
        }, 500);

    }
}
