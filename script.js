// Constants
const UPDATE_INTERVAL = 5000; // 5 seconds

// DOM Elements
const trackInfo = document.getElementById('track-info');
const audioPlayer = document.querySelector('audio');

// Single playlist with all songs
const playlist = [
    {
        title: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        file: "music/Guns_n_Roses_-_Sweet_Child_O_Mine.mp3"
    },
    {
        title: "Hotel California",
        artist: "The Eagles",
        file: "music/The_Eagles_-_Hotel_California.mp3"
    },
    {
        title: "Sweet Home Alabama",
        artist: "Lynyrd Skynyrd",
        file: "music/Lynyrd_Skynyrd_-_Sweet_Home_Alabama.mp3"
    },
    {
        title: "Paradise City",
        artist: "Guns N' Roses",
        file: "music/Guns_n_Roses_-_Paradise_City.mp3"
    },
    {
        title: "Free Bird",
        artist: "Lynyrd Skynyrd",
        file: "music/Lynyrd_Skynyrd_-_Free_Bird.mp3"
    },
    {
        title: "Everlong",
        artist: "Foo Fighters",
        file: "music/Foo_Fighters_-_Everlong.mp3"
    },
    {
        title: "Black Hole Sun",
        artist: "Soundgarden",
        file: "music/Soundgarden_-_Black_Hole_Sun.mp3"
    },
    {
        title: "Tonight Tonight",
        artist: "Smashing Pumpkins",
        file: "music/Smashing_Pumpkins_-_Tonight_Tonight.mp3"
    },
    {
        title: "1979",
        artist: "Smashing Pumpkins",
        file: "music/Smashing_Pumpkins_-_1979.mp3"
    },
    {
        title: "Learn to Fly",
        artist: "Foo Fighters",
        file: "music/Foo_Fighters_-_Learn_to_Fly.mp3"
    },
    {
        title: "Thriller",
        artist: "Michael Jackson",
        file: "music/Michael_Jackson_-_Thriller.mp3"
    },
    {
        title: "Beat It",
        artist: "Michael Jackson",
        file: "music/Michael_Jackson_-_Beat_It.mp3"
    },
    {
        title: "Material Girl",
        artist: "Madonna",
        file: "music/Madonna_-_Material_Girl.mp3"
    },
    {
        title: "Holiday",
        artist: "Madonna",
        file: "music/Madonna_-_Holiday.mp3"
    },
    {
        title: "Don't Stop Believin'",
        artist: "Journey",
        file: "music/Journey_-_Don't_Stop_Believin.mp3"
    }
];

let currentTrackIndex = 0;
let isShuffleEnabled = true; // Enable shuffle by default

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

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Toggle shuffle
function toggleShuffle() {
    isShuffleEnabled = !isShuffleEnabled;
    const shuffleBtn = document.getElementById('shuffle-btn');
    shuffleBtn.classList.toggle('active');
    
    if (isShuffleEnabled) {
        // Shuffle the playlist
        shuffleArray([...playlist]);
        currentTrackIndex = 0;
        audioPlayer.src = playlist[0].file;
        audioPlayer.play();
        updateTrackInfo();
    }
    
    gtag('event', 'shuffle_toggle', {
        'event_category': 'Playback',
        'event_label': isShuffleEnabled ? 'Shuffle On' : 'Shuffle Off'
    });
}

// Play next track
function playNextTrack() {
    if (isShuffleEnabled) {
        currentTrackIndex = Math.floor(Math.random() * playlist.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    }
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
    console.log('Player initialized with random playlist');
    // Enable shuffle by default
    const shuffleBtn = document.getElementById('shuffle-btn');
    shuffleBtn.classList.add('active');
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

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
function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById('play-pause-btn').querySelector('i').className = 'fas fa-pause';
        gtag('event', 'play_radio', {
            'event_category': 'Engagement',
            'event_label': 'Radio Play'
        });
    } else {
        audioPlayer.pause();
        document.getElementById('play-pause-btn').querySelector('i').className = 'fas fa-play';
        gtag('event', 'pause_radio', {
            'event_category': 'Engagement',
            'event_label': 'Radio Pause'
        });
    }
}

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