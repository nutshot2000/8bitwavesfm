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
    if (navigator.share) {
        navigator.share({
            title: '8-Bit Waves FM',
            text: 'Check out this awesome chiptune radio station!',
            url: window.location.href
        })
        .then(() => {
            gtag('event', 'share', {
                'event_category': 'Engagement',
                'event_label': 'Share Station'
            });
        })
        .catch(console.error);
    } else {
        // Fallback
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('URL copied to clipboard!');
        gtag('event', 'copy_url', {
            'event_category': 'Engagement',
            'event_label': 'Copy Station URL'
        });
    }
}

// Playlist configuration
const playlist = [
    {
        title: "8-Bit Waves FM Theme",
        artist: "8-Bit Waves FM",
        file: "music/theme.mp3"
    },
    // Add more songs here
];

let currentTrackIndex = 0;

// Initialize audio player with first track
audioPlayer.src = playlist[0].file;
audioPlayer.volume = 0.5;

// Update track info display
function updateTrackInfo() {
    const currentTrack = playlist[currentTrackIndex];
    trackInfo.innerHTML = `
        <div class="track-title">${currentTrack.title}</div>
        <div class="track-artist">${currentTrack.artist}</div>
    `;
}

// Play next track
function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    audioPlayer.src = playlist[currentTrackIndex].file;
    audioPlayer.play();
    updateTrackInfo();
    gtag('event', 'track_change', {
        'event_category': 'Playback',
        'event_label': playlist[currentTrackIndex].title
    });
}

// Play previous track
function playPreviousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    audioPlayer.src = playlist[currentTrackIndex].file;
    audioPlayer.play();
    updateTrackInfo();
    gtag('event', 'track_change', {
        'event_category': 'Playback',
        'event_label': playlist[currentTrackIndex].title
    });
}

// Initialize player
updateTrackInfo();

// Add event listeners
audioPlayer.addEventListener('ended', playNextTrack);

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
        gtag('event', 'play_radio', {
            'event_category': 'Engagement',
            'event_label': 'Radio Play'
        });
    } else {
        audioPlayer.pause();
        playPauseBtn.querySelector('i').className = 'fas fa-play';
        gtag('event', 'pause_radio', {
            'event_category': 'Engagement',
            'event_label': 'Radio Pause'
        });
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

// Track volume changes
volumeSlider.addEventListener('change', function() {
    gtag('event', 'volume_change', {
        'event_category': 'Engagement',
        'event_label': 'Volume Adjustment',
        'value': Math.round(this.value * 100)
    });
});

// Track PayPal button clicks
document.querySelector('.pp-TPEXQKHJHHDQU').addEventListener('click', function() {
    gtag('event', 'begin_checkout', {
        'event_category': 'Donations',
        'event_label': 'PayPal Donation Click'
    });
});

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
        gtag('event', 'view_crypto', {
            'event_category': 'Donations',
            'event_label': 'View Crypto Addresses'
        });
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