const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('light')
})

chk.addEventListener('change', () => {
    document.querySelector('header').classList.toggle('light');
});

chk.addEventListener('change', () => {
    document.querySelector('.unidade').classList.toggle('light');
});
chk.addEventListener('change', () => {
    const links = document.querySelectorAll('#imagem a');
    links.forEach(link => {
        link.classList.toggle('light');
    });
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
    document.querySelector('footer h3').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#CONTATO .contato').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#HORARIOS').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#HORARIOS h3').classList.toggle('light');
});
chk.addEventListener('change', () => {
    const links = document.querySelectorAll('table td');
    links.forEach(link => {
        link.classList.toggle('light');
    });
});
chk.addEventListener('change', () => {
    document.querySelector('#localizacao h3').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#PARCEIROS').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#PARCEIROS h3').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#patrocinio img').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#patrocinio2 img').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#BLOG h3').classList.toggle('light');
});
chk.addEventListener('change', () => {
    document.querySelector('#TRABALHE').classList.toggle('light');
});
