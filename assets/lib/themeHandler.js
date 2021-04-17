class ThemeHandler {
    get theme() {
        return localStorage.theme === 'light';
    }

    set theme(nVal) {
        localStorage.theme = nVal ? 'light' : 'dark';
        if (this.theme) {
            document.body.classList.add('lm');
            this.icn.src = 'static/icns/dark_mode_white.svg';
        }
        else {
            document.body.classList.remove('lm');
            this.icn.src = 'static/icns/light_mode_white.svg';
        }
    }

    toggle() {
        this.theme = !this.theme;
    }

    constructor(ttBtn) {
        this.icn = ttBtn.querySelector('img');

        ttBtn.onclick = () => {
            this.toggle();
        }

        this.theme = this.theme; // Set theme from localStorage upon init
    }
}