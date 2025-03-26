// Constants
const UPDATE_INTERVAL = 5000; // 5 seconds

// DOM Elements
const trackInfo = document.getElementById('track-info');
const audioPlayer = document.querySelector('audio');

// Single playlist with all songs
const playlist = [
    {
        title: "Sharp Dressed Man",
        artist: "ZZ Top",
        file: "music/ZZ_Top_-_Sharp_Dressed_Man.mp3"
    },
    {
        title: "You Oughta Know",
        artist: "Alanis Morissette",
        file: "music/YouOughtaKnow.mp3"
    },
    {
        title: "Word Up",
        artist: "Cameo",
        file: "music/WordUp.mp3"
    },
    {
        title: "Buddy Holly",
        artist: "Weezer",
        file: "music/Weezer_-_Buddy_Holly.mp3"
    },
    {
        title: "Low Rider",
        artist: "War",
        file: "music/War_-_Low_Rider.mp3"
    },
    {
        title: "Walking On Sunshine",
        artist: "Katrina & The Waves",
        file: "music/WalkingOnSunshine.mp3"
    },
    {
        title: "Valerie",
        artist: "The Zutons",
        file: "music/Valerie.mp3"
    },
    {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        file: "music/Uptownfunk.mp3"
    },
    {
        title: "Red Red Wine",
        artist: "UB 40",
        file: "music/UB_40_-_Red_Red_Wine.mp3"
    },
    {
        title: "Toxic",
        artist: "Britney Spears",
        file: "music/Toxic.mp3"
    },
    {
        title: "Africa",
        artist: "Toto",
        file: "music/toto-africa.mp3"
    },
    {
        title: "Free Fallin'",
        artist: "Tom Petty",
        file: "music/Tom_Petty_-_Free_Fallin'.mp3"
    },
    {
        title: "How Soon Is Now",
        artist: "The Smiths",
        file: "music/The_Smiths_-_How_Soon_Is_Now.mp3"
    },
    {
        title: "Hotel California",
        artist: "The Eagles",
        file: "music/The_Eagles_-_Hotel_California.mp3"
    },
    {
        title: "Manic Monday",
        artist: "The Bangles",
        file: "music/The_Bangles_-_Manic_Monday.mp3"
    },
    {
        title: "House of the Rising Sun",
        artist: "The Animals",
        file: "music/The_Animals_-_House_of_the_Rising_Sun.mp3"
    },
    {
        title: "The Lost Art Of Keeping A Secret",
        artist: "Queens of the Stone Age",
        file: "music/The Lost Art Of Keeping A Secret.mp3"
    },
    {
        title: "Tell Me Baby",
        artist: "Red Hot Chili Peppers",
        file: "music/Tell me baby.mp3"
    },
    {
        title: "It's My Life",
        artist: "Talk Talk",
        file: "music/Talk_Talk_-_Its_My_Life.mp3"
    },
    {
        title: "Eye of the Tiger",
        artist: "Survivor",
        file: "music/Survivor_-_Eye_of_the_Tiger.mp3"
    },
    {
        title: "Sultans of Swing",
        artist: "Dire Straits",
        file: "music/Sultans of Swing.mp3"
    },
    {
        title: "Plush",
        artist: "Stone Temple Pilots",
        file: "music/Stone_Temple_Pilots_-_Plush.mp3"
    },
    {
        title: "Interstate Love Song",
        artist: "Stone Temple Pilots",
        file: "music/Stone_Temple_Pilots_-_Interstate_Love_Song.mp3"
    },
    {
        title: "Part Time Lover",
        artist: "Stevie Wonder",
        file: "music/Stevie_Wonder_-_Part_Time_Lover.mp3"
    },
    {
        title: "Edge of Seventeen",
        artist: "Stevie Nicks",
        file: "music/Stevie_Nicks_-_Edge_of_Seventeen.mp3"
    },
    {
        title: "Higher Love",
        artist: "Steve Winwood",
        file: "music/Steve_Winwood_-_Higher_Love.mp3"
    },
    {
        title: "Born To Be Wild",
        artist: "Steppenwolf",
        file: "music/Steppenwolf_-_Born_To_Be_Wild.mp3"
    },
    {
        title: "Nothing's Gonna Stop Us Now",
        artist: "Starship",
        file: "music/Starship_-_Nothins_Gonna_Stop_Us_Now.mp3"
    },
    {
        title: "True",
        artist: "Spandau Ballet",
        file: "music/Spandau_Ballet_-_True.mp3"
    },
    {
        title: "Gold",
        artist: "Spandau Ballet",
        file: "music/Spandau_Ballet_-_Gold.mp3"
    },
    {
        title: "Black Hole Sun",
        artist: "Soundgarden",
        file: "music/Soundgarden_-_Black_Hole_Sun.mp3"
    },
    {
        title: "Son Of A Preacher Man",
        artist: "Dusty Springfield",
        file: "music/Son Of A PreacherMan.mp3"
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
        title: "My Favorite Mistake",
        artist: "Sheryl Crow",
        file: "music/Sheryl_Crow_-_My_Favorite_Mistake.mp3"
    },
    {
        title: "If It Makes You Happy",
        artist: "Sheryl Crow",
        file: "music/Sheryl_Crow_-_If_It_Makes_You_Happy.mp3"
    },
    {
        title: "Saturday Night's Alright For Fighting",
        artist: "Elton John",
        file: "music/Saturday Nights Alright For Fighting.mp3"
    },
    {
        title: "Smooth Operator",
        artist: "Sade",
        file: "music/Sade_-_Smooth_Operator.mp3"
    },
    {
        title: "Roots Rock Reggae",
        artist: "Bob Marley",
        file: "music/Roots Rock Reggae.mp3"
    },
    {
        title: "Gimme Shelter",
        artist: "Rolling Stones",
        file: "music/Rolling_Stones_-_Gimme_Shelter.mp3"
    },
    {
        title: "Rolling in the Deep",
        artist: "Adele",
        file: "music/Rolling in the deep.mp3"
    },
    {
        title: "War",
        artist: "Rocky IV Soundtrack",
        file: "music/Rocky4-War.mp3"
    },
    {
        title: "Rocket Man",
        artist: "Elton John",
        file: "music/RocketMan.mp3"
    },
    {
        title: "Man on the Moon",
        artist: "R.E.M.",
        file: "music/REM_-_Man_on_the_Moon.mp3"
    },
    {
        title: "Redemption Song",
        artist: "Bob Marley",
        file: "music/Redemption Song.mp3"
    },
    {
        title: "Otherside",
        artist: "Red Hot Chili Peppers",
        file: "music/Red_Hot_Chili_Peppers_-_Otherside.mp3"
    },
    {
        title: "Californication",
        artist: "Red Hot Chili Peppers",
        file: "music/Red_Hot_Chili_Peppers_-_Californication.mp3"
    },
    {
        title: "Rearviewmirror",
        artist: "Pearl Jam",
        file: "music/Rearviewmirror.mp3"
    },
    {
        title: "Karma Police",
        artist: "Radiohead",
        file: "music/Radiohead_-_Karma_Police.mp3"
    },
    {
        title: "Radio Ga Ga",
        artist: "Queen",
        file: "music/Queen_-_Radio_Ga_Ga.mp3"
    },
    {
        title: "Crazy Little Thing Called Love",
        artist: "Queen",
        file: "music/Queen_-_Crazy_Little_Thing_Called_Love.mp3"
    },
    {
        title: "Raspberry Beret",
        artist: "Prince",
        file: "music/Prince_-_Raspberry_Beret.mp3"
    },
    {
        title: "Cream",
        artist: "Prince",
        file: "music/Prince Cream.mp3"
    },
    {
        title: "Power of Love",
        artist: "Huey Lewis & The News",
        file: "music/PowerOfLove.mp3"
    },
    {
        title: "Easy Lover",
        artist: "Phil Collins",
        file: "music/Phil_Collins_-_Easy_Lover.mp3"
    },
    {
        title: "Live and Let Die",
        artist: "Paul McCartney",
        file: "music/Paul_McCartney_-_Live_and_Let_Die.mp3"
    },
    {
        title: "Crazy Train",
        artist: "Ozzy Osbourne",
        file: "music/Ozzy_Osbourne_-_Crazy_Train.mp3"
    },
    {
        title: "Roll With It",
        artist: "Oasis",
        file: "music/Oasis_-_Roll_With_It.mp3"
    },
    {
        title: "Morning Glory",
        artist: "Oasis",
        file: "music/Oasis_-_Morning_Glory.mp3"
    },
    {
        title: "Very Ape",
        artist: "Nirvana",
        file: "music/Nirvana_-_Very_Ape.mp3"
    },
    {
        title: "Rape Me",
        artist: "Nirvana",
        file: "music/Nirvana_-_Rape_Me.mp3"
    },
    {
        title: "Breed",
        artist: "Nirvana",
        file: "music/Nirvana_-_Breed.mp3"
    },
    {
        title: "Ms. Jackson",
        artist: "Outkast",
        file: "music/Ms.Jackson.mp3"
    },
    {
        title: "Time Warp",
        artist: "Rocky Horror Picture Show",
        file: "music/Movie_Themes_-_Rocky_Horror_Picture_Show_-_Let's_Do_the_Time_Warp_Again.mp3"
    },
    {
        title: "Move on Up",
        artist: "Curtis Mayfield",
        file: "music/Move on up.mp3"
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
        title: "Enter Sandman",
        artist: "Metallica",
        file: "music/Metallica_-_Enter_Sandman.mp3"
    },
    {
        title: "Down Under",
        artist: "Men At Work",
        file: "music/Men_At_Work_-_Down_Under.mp3"
    },
    {
        title: "Moves Like Jagger",
        artist: "Maroon 5 ft. Christina Aguilera",
        file: "music/Maroon 5 ft. Christina Aguilera - Moves Like Jagger.mp3"
    },
    {
        title: "So Much Trouble in the World",
        artist: "Bob Marley",
        file: "music/MARLEY.So much trouble in the world.mp3"
    },
    {
        title: "California Dreamin'",
        artist: "The Mamas & The Papas",
        file: "music/Mamas_and_Papas_-_California_Dreamin'.mp3"
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
        title: "Borderline",
        artist: "Madonna",
        file: "music/Madonna_-_Borderline.mp3"
    },
    {
        title: "Our House",
        artist: "Madness",
        file: "music/Madness_-_Our_House.mp3"
    },
    {
        title: "Sweet Home Alabama",
        artist: "Lynyrd Skynyrd",
        file: "music/Lynyrd_Skynyrd_-_Sweet_Home_Alabama.mp3"
    },
    {
        title: "Free Bird",
        artist: "Lynyrd Skynyrd",
        file: "music/Lynyrd_Skynyrd_-_Free_Bird.mp3"
    },
    {
        title: "Kashmir",
        artist: "Led Zeppelin",
        file: "music/Led_Zeppelin_-_Kashmir.mp3"
    },
    {
        title: "Wuthering Heights",
        artist: "Kate Bush",
        file: "music/Kate_Bush_-_Wuthering_Heights.mp3"
    },
    {
        title: "Don't Stop Believin'",
        artist: "Journey",
        file: "music/Journey_-_Don't_Stop_Believin.mp3"
    },
    {
        title: "Cosmic Girl",
        artist: "Jamiroquai",
        file: "music/Jamiroquai_-_Cosmic_Girl.mp3"
    },
    {
        title: "I Just Died In Your Arms Tonight",
        artist: "Cutting Crew",
        file: "music/I Just Died In Your Arms Tonight.mp3"
    },
    {
        title: "I Bet You Look Good on the Dancefloor",
        artist: "Arctic Monkeys",
        file: "music/I bet you look good on the dancefloor.mp3"
    },
    {
        title: "Celebrity Skin",
        artist: "Hole",
        file: "music/Hole_-_Celebrity_Skin.mp3"
    },
    {
        title: "Here Comes Your Man",
        artist: "Pixies",
        file: "music/Here Comes Your Man.mp3"
    },
    {
        title: "Heaven Knows I'm Miserable Now",
        artist: "The Smiths",
        file: "music/Heaven Knows Im Miserable Now.mp3"
    },
    {
        title: "Heart of Glass",
        artist: "Blondie",
        file: "music/Heart Of Glass.mp3"
    },
    {
        title: "MMMBop",
        artist: "Hanson",
        file: "music/Hanson_-_Mmmbop.mp3"
    },
    {
        title: "Hand In My Pocket",
        artist: "Alanis Morissette",
        file: "music/Hand In My Pocket.mp3"
    },
    {
        title: "I Can't Go for That",
        artist: "Hall & Oates",
        file: "music/Hall_and_Oates_-_I_Cant_Go_for_That.mp3"
    },
    {
        title: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        file: "music/Guns_n_Roses_-_Sweet_Child_O_Mine.mp3"
    },
    {
        title: "Paradise City",
        artist: "Guns N' Roses",
        file: "music/Guns_n_Roses_-_Paradise_City.mp3"
    },
    {
        title: "My Sweet Lord",
        artist: "George Harrison",
        file: "music/George_Harrison_-_My_Sweet_Lord.mp3"
    },
    {
        title: "Stupid Girl",
        artist: "Garbage",
        file: "music/Garbage_-_Stupid_Girl.mp3"
    },
    {
        title: "Only Happy When It Rains",
        artist: "Garbage",
        file: "music/Garbage_-_Only_Happy_When_It_Rains.mp3"
    },
    {
        title: "Learn to Fly",
        artist: "Foo Fighters",
        file: "music/Foo_Fighters_-_Learn_to_Fly.mp3"
    },
    {
        title: "Everlong",
        artist: "Foo Fighters",
        file: "music/Foo_Fighters_-_Everlong.mp3"
    },
    {
        title: "Breakout",
        artist: "Foo Fighters",
        file: "music/Foo_Fighters_-_Breakout.mp3"
    },
    {
        title: "Little Lies",
        artist: "Fleetwood Mac",
        file: "music/Fleetwood_Mac_-_Little_Lies.mp3"
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

// Initialize
function init() {
    console.log('Player initialized with random playlist');
    // Enable shuffle by default
    const shuffleBtn = document.getElementById('shuffle-btn');
    shuffleBtn.classList.add('active');
    
    // Start playing
    if (isShuffleEnabled) {
        shuffleArray(playlist);
    }
    audioPlayer.play().catch(error => {
        console.log('Playback failed, waiting for user interaction:', error);
    });
    updateTrackInfo();
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

// Share functionality
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: '8-Bit Waves FM',
            text: 'Check out this awesome retro music player!',
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support Web Share API
        const tempInput = document.createElement('input');
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Link copied to clipboard!');
    }
}

// Bookmark functionality
function bookmarkPage() {
    if (window.sidebar && window.sidebar.addPanel) { // Firefox
        window.sidebar.addPanel('8-Bit Waves FM', window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE
        window.external.AddFavorite(window.location.href, '8-Bit Waves FM');
    } else { // Modern browsers
        alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
    }
} 