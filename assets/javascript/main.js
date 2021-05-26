const q = (e) => document.querySelector(e);
const $ = (e) => document.getElementById(e);

const scrollElem = $('scroll');

scrollElem.onscroll = () => {
    if (scrollElem.scrollTop >= 10) q('header').classList.add('v');
    else if (scrollElem.scrollTop < 8) q('header').classList.remove('v');
}

new ThemeHandler($('tBtn'));

onreadystatechange = console.log;