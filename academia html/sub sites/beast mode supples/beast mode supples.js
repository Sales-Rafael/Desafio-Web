const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('light')
})

chk.addEventListener('change', () => {
    document.querySelector('header').classList.toggle('light');
});