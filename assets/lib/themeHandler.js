class ThemeHandler {
    get theme() {
        return localStorage.theme === 'light';
    }

    set theme(nVal) {
        localStorage.theme = nVal ? 'light' : 'dark';
        if (this.theme) {
            document.body.classList.add('lm');
        }
        else {
            document.body.classList.remove('lm');
        }
    }

    toggle() {
        this.theme = !this.theme;
    }

    constructor(ttBtn) {
        ttBtn.onclick = () => {
            this.toggle();
        }

        this.theme = this.theme; // Set theme from localStorage upon init
    }
}