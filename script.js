// Constants
const STREAM_URL = 'https://uk17freenew.listen2myradio.com/live.mp3?typeportmount=s1_28059_stream_159897494';
const UPDATE_INTERVAL = 5000; // 5 seconds

// DOM Elements
const listenerCount = document.getElementById('listener-count');
const currentTrack = document.getElementById('current-track');
const audioPlayer = document.querySelector('audio');

// Bookmark functionality
function bookmarkPage() {
    if (window.sidebar && window.sidebar.addPanel) { // Firefox
        window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE
        window.external.AddFavorite(window.location.href, document.title);
    } else { // Chrome, Safari, etc.
        alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
    }
}

// Enhanced share functionality
function sharePage() {
    const shareMenu = document.createElement('div');
    shareMenu.className = 'share-menu';
    shareMenu.innerHTML = `
        <div class="share-options">
            <button onclick="shareToTwitter()" class="share-btn">[ TWITTER ]</button>
            <button onclick="shareToFacebook()" class="share-btn">[ FACEBOOK ]</button>
            <button onclick="shareToReddit()" class="share-btn">[ REDDIT ]</button>
            <button onclick="copyLink()" class="share-btn">[ COPY LINK ]</button>
            <button onclick="document.querySelector('.share-menu').remove()" class="share-btn">[ CLOSE ]</button>
        </div>
    `;
    document.body.appendChild(shareMenu);

    // Add click event listener to close when clicking outside
    shareMenu.addEventListener('click', function(e) {
        if (e.target === this) {
            shareMenu.remove();
        }
    });
}

function shareToTwitter() {
    const text = encodeURIComponent('🎮 Vibing to some awesome chiptunes at 8bit-waveFM! Check it out:');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareToReddit() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('8bit-waveFM - 24/7 Chiptune Radio');
    window.open(`https://reddit.com/submit?url=${url}&title=${title}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            alert('Link copied to clipboard! Share with your friends! ��');
        });
}

// Audio stream setup
function setupAudioStream() {
    audioPlayer.src = STREAM_URL;
    
    audioPlayer.addEventListener('error', (e) => {
        console.error('Stream error:', e);
        currentTrack.textContent = 'Stream Error - Please try again';
    });
    
    audioPlayer.addEventListener('playing', () => {
        console.log('Stream connected and playing');
        currentTrack.textContent = 'Live Stream';
        playPauseBtn.querySelector('i').className = 'fas fa-pause';
    });

    audioPlayer.addEventListener('waiting', () => {
        currentTrack.textContent = 'Buffering...';
    });

    // Try to autoplay
    audioPlayer.load();
    audioPlayer.play().catch(err => {
        console.log('Click play to start', err);
        playPauseBtn.querySelector('i').className = 'fas fa-play';
    });
}

// Initialize
function init() {
    setupAudioStream();
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Digital Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial update 

// Color controls
const primaryColorInput = document.getElementById('primaryColor');
const secondaryColorInput = document.getElementById('secondaryColor');
const accentColorInput = document.getElementById('accentColor');

primaryColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--primary-color', e.target.value);
});

secondaryColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--secondary-color', e.target.value);
});

accentColorInput.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--accent-color', e.target.value);
});

// Initialize colors
document.documentElement.style.setProperty('--primary-color', primaryColorInput.value);
document.documentElement.style.setProperty('--secondary-color', secondaryColorInput.value);
document.documentElement.style.setProperty('--accent-color', accentColorInput.value);

// Audio Controls
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.querySelector('i').className = 'fas fa-pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.querySelector('i').className = 'fas fa-play';
    }
});

// Volume controls
let previousVolume = 1;
volumeBtn.addEventListener('click', () => {
    if (audioPlayer.volume > 0) {
        previousVolume = audioPlayer.volume;
        audioPlayer.volume = 0;
        volumeBtn.querySelector('i').className = 'fas fa-volume-mute';
        volumeSlider.value = 0;
    } else {
        audioPlayer.volume = previousVolume;
        volumeBtn.querySelector('i').className = 'fas fa-volume-up';
        volumeSlider.value = previousVolume;
    }
});

volumeSlider.addEventListener('input', (e) => {
    const volume = parseFloat(e.target.value);
    audioPlayer.volume = volume;
    volumeBtn.querySelector('i').className = volume === 0 ? 'fas fa-volume-mute' : 
                                           volume < 0.5 ? 'fas fa-volume-down' : 
                                           'fas fa-volume-up';
});

// Initialize colors
document.documentElement.style.setProperty('--primary-color', primaryColorInput.value);
document.documentElement.style.setProperty('--secondary-color', secondaryColorInput.value);
document.documentElement.style.setProperty('--accent-color', accentColorInput.value);

// Crypto support functions
function showCryptoAddresses() {
    let modal = document.querySelector('.crypto-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'crypto-modal';
        modal.innerHTML = `
            <button class="close-modal" onclick="closeCryptoModal()">×</button>
            <h3>[ CRYPTO ADDRESSES ]</h3>
            <div class="crypto-address" onclick="copyToClipboard(this)">
                BTC: 37sVrmpoBjK8ftERoxAmT8snayHSLxTpZD
            </div>
            <div class="crypto-address" onclick="copyToClipboard(this)">
                ETH: 0x5e8C561c123199130D617d2120d2e4a8580F9B32
            </div>
            <div class="crypto-address" onclick="copyToClipboard(this)">
                USDT: 0xBc0599a55A54619Bc06F92b73A8EdDC929C9377f
            </div>
            <div class="crypto-address" onclick="copyToClipboard(this)">
                SOL: 8ao7cGw7EorRhg1omQrWPp2XBbeo2wpq9NkTb7cULTDm
            </div>
            <div class="crypto-address" onclick="copyToClipboard(this)">
                DOGE: DLTdwrjhZgA4dQtRji7vgotPME5Q7SvenM
            </div>
            <p class="crypto-note">Click address to copy • Powered by Coinbase</p>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = 'block';
}

function closeCryptoModal() {
    document.querySelector('.crypto-modal').style.display = 'none';
}

function copyToClipboard(element) {
    const text = element.textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const originalText = element.textContent;
        element.textContent = '[ COPIED! ]';
        setTimeout(() => {
            element.textContent = originalText;
        }, 1000);
    });
} 