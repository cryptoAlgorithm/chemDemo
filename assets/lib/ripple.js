// INCOMPLETE
class Ripple {
    constructor(sel) {
        document.querySelectorAll(sel).forEach(elem => {
            elem.onclick = (evt) => {
                const rp = document.createElement('div');
                rp.classList.add('rp-act');

                const br = elem.getBoundingClientRect();
                rp.style.width = (br.width*2).toString() + 'px';
                rp.style.height = (br.width*2).toString() + 'px';

                rp.style.top = ((br.top - evt.clientY) - br.width).toString() + 'px';
                rp.style.left = ((br.left - evt.clientX) - br.width).toString() + 'px';

                console.log(evt);
                elem.appendChild(rp);
            }

            elem.onmouseup = () => {

            }
        });
    }
}