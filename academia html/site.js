// Obtém o elemento com o id 'chk'
const chk = document.getElementById('chk')

// Adiciona um evento de mudança ao interruptor chk
chk.addEventListener('change', () => {
    document.body.classList.toggle('light')
})

// Adiciona um evento de mudança ao interruptor chk para o cabeçalho
chk.addEventListener('change', () => {
    document.querySelector('header').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para a unidade
chk.addEventListener('change', () => {
    document.querySelector('.unidade').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para os links de imagem
chk.addEventListener('change', () => {
    const links = document.querySelectorAll('#imagem a');
    links.forEach(link => {
        link.classList.toggle('light');
    });
});

// Adiciona um evento de mudança ao interruptor chk para a barra superior
chk.addEventListener('change', () => {
    document.querySelector('.barra-superior').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para os links da barra superior
chk.addEventListener('change', () => {
    const links = document.querySelectorAll('.barra-superior a');
    links.forEach(link => {
        link.classList.toggle('light');
    });
});

// Adiciona um evento de mudança ao interruptor chk para os títulos das seções no conteúdo principal
chk.addEventListener('change', () => {
    document.querySelector('main h3').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para os títulos das seções no rodapé
chk.addEventListener('change', () => {
    document.querySelector('footer h3').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para a seção de contato
chk.addEventListener('change', () => {
    document.querySelector('#CONTATO .contato').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para a seção de horários
chk.addEventListener('change', () => {
    document.querySelector('#HORARIOS').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para o título da seção de horários
chk.addEventListener('change', () => {
    document.querySelector('#HORARIOS h3').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para as células da tabela de horários
chk.addEventListener('change', () => {
    const links = document.querySelectorAll('table td');
    links.forEach(link => {
        link.classList.toggle('light');
    });
});

// Adiciona um evento de mudança ao interruptor chk para o título da seção de localização
chk.addEventListener('change', () => {
    document.querySelector('#localizacao h3').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para a seção de parceiros
chk.addEventListener('change', () => {
    document.querySelector('#PARCEIROS').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para o título da seção de parceiros
chk.addEventListener('change', () => {
    document.querySelector('#PARCEIROS h3').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para as imagens de patrocinadores
chk.addEventListener('change', () => {
    document.querySelector('#patrocinio img').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para as imagens de patrocinadores
chk.addEventListener('change', () => {
    document.querySelector('#patrocinio2 img').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para o título da seção de blog
chk.addEventListener('change', () => {
    document.querySelector('#BLOG h3').classList.toggle('light');
});

// Adiciona um evento de mudança ao interruptor chk para a seção de trabalhe conosco
chk.addEventListener('change', () => {
    document.querySelector('#TRABALHE').classList.toggle('light');
});
