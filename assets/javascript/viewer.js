(() => {
    const p = new URLSearchParams(window.location.search).get('p');
    if (p) {
        const v = atob(p);
        // Prevent randomly adding classes to body
        if (['grey', 'blue', 'green', 'turquoise'].includes(v)) document.body.classList.add('p__' + v);
    }
    else document.body.classList.add('p__grey');
})();