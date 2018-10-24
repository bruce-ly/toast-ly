export default class Toast {
    constructor(options = {}) {
        this.options = options;
        this._toast = document.createElement('div');
        this._toast.id = 'toast-box-ly';
        this._html = `<div class="${this.options.bgClass || 'bg'}">
                          <p></p>
                      </div>`;
        this._toast.innerHTML = this._html;
        document.body.appendChild(this._toast);
    }

    open(text = 'text') {
        clearTimeout(this._time);
        document.querySelector('#toast-box-ly p').textContent = text;
        this._toast.classList.add('show');

        if (!this.options.isAuto)
            this._time = setTimeout(() => {
                this.close();
            }, this.options.duration || 3000);
    }

    close() {
        this._toast.classList.remove('show');
    }
}
