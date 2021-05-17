class ThemeHandler {
    get theme() {
        return localStorage.theme === 'light';
    }

    set theme(nVal) {
        localStorage.theme = nVal ? 'light' : 'dark';
        if (this.theme) {
            document.body.classList.add('lm');
            this.lIcn.style.display = 'none';
            this.dIcn.style.display = 'block';
        }
        else {
            document.body.classList.remove('lm');
            this.lIcn.style.display = 'block';
            this.dIcn.style.display = 'none';
        }
    }

    toggle() {
        this.theme = !this.theme;
    }

    constructor(ttBtn) {
        this.lIcn = ttBtn.querySelector('img.l');
        this.dIcn = ttBtn.querySelector('img.d');

        ttBtn.onclick = () => {
            this.toggle();
        }

        this.theme = this.theme; // Set theme from localStorage upon init
    }
}