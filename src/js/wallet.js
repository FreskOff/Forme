const connectBtn = document.getElementById('connect-btn');
const walletAddress = document.getElementById('wallet-address');

connectBtn.addEventListener('click', () => {
    const isConnected = localStorage.getItem('walletConnected') === 'true';
    
    if (isConnected) {
        localStorage.setItem('walletConnected', 'false');
        walletAddress.textContent = 'EQ111...222';
        connectBtn.textContent = 'Connect';
    } else {
        localStorage.setItem('walletConnected', 'true');
        walletAddress.textContent = 'EQABC...XYZ (Connected)';
        connectBtn.textContent = 'Disconnect';
    }
});

// Проверка состояния при загрузке
window.addEventListener('load', () => {
    const isConnected = localStorage.getItem('walletConnected') === 'true';
    if (isConnected) {
        walletAddress.textContent = 'EQABC...XYZ (Connected)';
        connectBtn.textContent = 'Disconnect';
    }
});