export default class Toast {
    constructor(text = 'text', options = {}) {
        this.text = text;
        this.options = options;

        this._toast = document.createElement('div');
        this._html = `<div id="toast-ly" class="${this.options.class || 'bg'}">
                <p>${this.text}</p>
            </div>`;

        this.open();

        setTimeout(() => {
            this.close();
        }, this.options.duration || 3000);
    }

    open() {
        this._toast.innerHTML = this._html;
        document.body.appendChild(this._toast);
    }

    close() {
        document.body.removeChild(this._toast);
    }
}
