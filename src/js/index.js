export default class Toast {
    constructor(options = {}) {
        this.options = options;
        this.init();
    }

    init() {
        this._toast = document.createElement('div');
        this._toast.id = 'toast-ly';
        this._toast.innerHTML =
            `<div class="${this.options.boxBgClass || 'bg'} ${this.options.animation || 'animation'}">
                 <p class="${this.options.textBgClass || 'bg'}"></p>
             </div>`;
        this._toast.addEventListener('click', e => {
            e.stopPropagation();
            this.close();
        });
        document.body.appendChild(this._toast);
        this._p = document.querySelector('#toast-ly p');
        this._p.addEventListener('click', e => {
            e.stopPropagation();
        });
    }

    open(text = 'text') {
        this._p.textContent = text;
        this._time && clearTimeout(this._time);
        this._toast.classList.add('show');

        if (this.options.autoClose)
            this._time = setTimeout(() => {
                this.close();
            }, this.options.duration || 3000);
    }

    close() {
        this._toast.classList.remove('show');
    }
}
