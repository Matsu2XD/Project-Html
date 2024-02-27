function moveClock() {
    const clock = document.getElementById('clock');
    const newX = Math.floor(Math.random() * window.innerWidth);
    const newY = Math.floor(Math.random() * window.innerHeight);
    clock.style.left = newX + 'px';
    clock.style.top = newY + 'px';
}
