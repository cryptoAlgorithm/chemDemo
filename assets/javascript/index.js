document.querySelectorAll('div.promo > div.p-card').forEach(elem => new PCardHandler(elem));

const linkHandler = (href, id) => {
    open(href);
}