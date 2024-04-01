const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('light')
})

chk.addEventListener('change', () => {
    document.querySelector('header').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('.barra-superior').classList.toggle('light');
});
chk.addEventListener('change', () => {
    const links = document.querySelectorAll('.barra-superior a');
    links.forEach(link => {
        link.classList.toggle('light');
    });
});
chk.addEventListener('change', () => {
    document.querySelector('main h3').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#matricule-se').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('footer h3').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#CONTATO .contato').classList.toggle('light');
});
