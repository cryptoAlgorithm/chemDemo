document.querySelectorAll('div.promo > div.p-card').forEach(elem => {
    new PCardHandler(elem);
    console.log(elem);
});

// new Ripple('.btn-rp');