// Track mouse movement
const mouseArea = document.getElementById('mouse-area');
const mouseCoords = document.getElementById('mouse-coords');
const clickLog = document.getElementById('click-log');

mouseArea.addEventListener('mousemove', (e) => {
    const x = e.clientX - mouseArea.getBoundingClientRect().left;
    const y = e.clientY - mouseArea.getBoundingClientRect().top;
    mouseCoords.innerText = `X: ${x}, Y: ${y}`;
});

mouseArea.addEventListener('click', (e) => {
    const button = e.button === 0 ? 'Left' : e.button === 2 ? 'Right' : 'Middle';
    clickLog.innerText = `${button} Click Detected`;
    logEvent({ type: 'mouse-click', button, x: e.clientX, y: e.clientY });
});

// Track keyboard presses
const keyboardArea = document.getElementById('keyboard-area');
const keyLog = document.getElementById('key-log');

document.addEventListener('keydown', (e) => {
    keyLog.innerText = `Key Pressed: ${e.key} (Code: ${e.code})`;
    logEvent({ type: 'key-press', key: e.key, code: e.code });
});

// Reset button
document.getElementById('reset-button').addEventListener('click', () => {
    mouseCoords.innerText = 'X: 0, Y: 0';
    clickLog.innerText = 'None';
    keyLog.innerText = 'None';
});

// Log events to the backend
function logEvent(data) {
    fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).catch(err => console.error('Error logging event:', err));
}