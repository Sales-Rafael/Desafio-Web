// Obtém o elemento checkbox
const chk = document.getElementById('chk')

// Adiciona um ouvinte de evento para detectar mudanças no checkbox
chk.addEventListener('change', () => {
    document.body.classList.toggle('light')
})

// Adiciona um ouvinte de evento para detectar mudanças no checkbox
chk.addEventListener('change', () => {
    document.querySelector('header').classList.toggle('light');
});

// Adiciona um ouvinte de evento para detectar mudanças no checkbox
chk.addEventListener('change', () => {
    document.querySelector('.barra-superior').classList.toggle('light');
});

// Adiciona um ouvinte de evento para detectar mudanças no checkbox
chk.addEventListener('change', () => {
    const links = document.querySelectorAll('.barra-superior a');
    links.forEach(link => {
        link.classList.toggle('light');
    });
});

// Adiciona um ouvinte de evento para detectar mudanças no checkbox
chk.addEventListener('change', () => {
    document.querySelector('main h3').classList.toggle('light');
});

// Adiciona um ouvinte de evento para detectar mudanças no checkbox
chk.addEventListener('change', () => {
    document.querySelector('#matricule-se').classList.toggle('light');
});

// Adiciona um ouvinte de evento para detectar mudanças no checkbox
chk.addEventListener('change', () => {
    document.querySelector('footer h3').classList.toggle('light');
});

// Adiciona um ouvinte de evento para detectar mudanças no checkbox
chk.addEventListener('change', () => {
    document.querySelector('#CONTATO .contato').classList.toggle('light');
});
