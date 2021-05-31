class PCardHandler {
    set open(val) {
        val ? this.elem.classList.add('open') : this.elem.classList.remove('open');
    }

    get open() {
        return this.elem.classList.contains('open');
    }

    toggle() {
        this.open = !this.open;
    }

    constructor(e) {
        this.elem = e;
        this.btn = e.querySelector('.ic-btn');

        this.btn.onclick = () => this.toggle();
    }
}