const q = (e) => document.querySelector(e);
const $ = (e) => document.getElementById(e);

window.onscroll = (e) => {
    if (window.scrollY >= 10) q('header').classList.add('v');
    else if (window.scrollY < 8) q('header').classList.remove('v');
}

const th = new ThemeHandler($('tBtn'));