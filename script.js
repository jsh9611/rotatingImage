document.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('rotatingImage');
    image.addEventListener('click', () => {
        image.classList.toggle('rotate');
    });
});