// Example of simple animation using JavaScript
window.onload = function() {
    let box = document.querySelector('.animation-box');
    box.addEventListener('click', function() {
        box.style.animation = 'spin 2s infinite linear';
    });
}
