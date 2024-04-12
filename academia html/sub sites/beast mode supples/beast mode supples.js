// Seleciona o elemento checkbox com o ID 'chk'
const chk = document.getElementById('chk')

// Adiciona um ouvinte de evento para o evento de mudança no checkbox
chk.addEventListener('change', () => {
    document.body.classList.toggle('light')
})

// Adiciona outro ouvinte de evento para o evento de mudança no checkbox
chk.addEventListener('change', () => {
    document.querySelector('header').classList.toggle('light');
});