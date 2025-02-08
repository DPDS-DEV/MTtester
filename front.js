// Track mouse movement
document.addEventListener('mousemove', (e) => {
    document.getElementById('mouse-coords').innerText = `X: ${e.clientX}, Y: ${e.clientY}`;
});

// Track mouse clicks
document.addEventListener('click', (e) => {
    const button = e.button === 0 ? 'Left' : e.button === 2 ? 'Right' : 'Middle';
    document.getElementById('click-log').innerText = `${button} Click Detected`;
});

// Track keyboard presses
document.addEventListener('keydown', (e) => {
    document.getElementById('key-log').innerText = `Key Pressed: ${e.key} (Code: ${e.code})`;
});