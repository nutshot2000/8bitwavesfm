want a custom website from scratch to stream your 8-bit GXSCC tracks, show real-time listeners, and add ads/PayPal, I’ll tailor this step-by-step for Cursor’s workflow. You’ve got your WAVs ready, and I’ll assume you’re comfy with basic coding (HTML/CSS/JS) but want it streamlined. We’ll use BUTT + Shoutcast for streaming and host it free on Netlify. Let’s build it—big, readable, and low-maintenance.

Step 1: Set Up Streaming with BUTT
(If you’ve got this, skip to Step 2.)

Install BUTT:
Grab it from sourceforge.net/projects/butt/, install (20 seconds).
Prep Audio:
Install VLC (vlc.media-player.org), drag your GXSCC WAV folder in, loop it, mute it.
Install Virtual Audio Cable (VAC, vb-audio.com, free trial): VLC > Tools > Preferences > Audio > Output > VB-Audio Virtual Cable.
BUTT: Settings > Audio > Device > VB-Audio Virtual Cable.
Stream to Shoutcast:
Sign up at shoutcast.com (free), get server IP/port/password.
BUTT: Settings > Main > Server > Add:
Address: Shoutcast IP.
Port: e.g., 8000.
Password: Yours.
Hit “Play”—test http://yourstream:8000 on your phone.
Step 2: Start the Project in Cursor
New Project:
Open Cursor, File > New Project, name it 8bitradio.
Create three files: index.html, styles.css, script.js.
Folder Setup:
Keep it in one folder (e.g., C:\8bitradio)—Cursor handles it fine.
Step 3: Build the HTML
In index.html, paste this—Cursor can auto-format:

html

Preview

Collapse

Wrap

Copy
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>8-Bit Waves FM</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>8-Bit Waves FM</h1>
    </header>
    <main>
        <audio controls>
            <source src="http://yourstream:8000" type="audio/mpeg">
            Audio not supported.
        </audio>
        <p>Listeners: <span id="listener-count">0</span></p>
        <div id="ads"></div>
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="business" value="your-paypal-email@example.com">
            <input type="submit" value="Donate via PayPal">
        </form>
    </main>
    <script src="script.js"></script>
</body>
</html>
Replace http://yourstream:8000 with your Shoutcast URL (from BUTT).
Add your PayPal email (paypal.com > Tools > Donate Button for code if needed).
Step 4: Style with CSS
In styles.css, drop this—Cursor can suggest tweaks (e.g., “make it retro”):

css

Collapse

Wrap

Copy
body {
    font-family: 'Courier New', monospace;
    background-color: #000;
    color: #fff;
    text-align: center;
    font-size: 24px; /* Big, readable */
    margin: 0;
    padding: 20px;
}
h1 {
    font-size: 48px;
    color: #00ff00; /* NES green */
    text-shadow: 2px 2px #ff00ff; /* Retro glow */
}
audio {
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    display: block;
}
#listener-count {
    color: #ff00ff; /* Magenta pop */
}
#ads {
    width: 300px;
    height: 250px;
    background-color: #333;
    margin: 20px auto;
    border: 2px solid #00ff00;
}
input[type="submit"] {
    font-size: 20px;
    padding: 10px 20px;
    background-color: #ff00ff;
    color: #000;
    border: none;
    cursor: pointer;
}
input[type="submit"]:hover {
    background-color: #00ff00;
}
Big fonts, retro vibes—Cursor can autocomplete properties if you type font-.
Step 5: Add Listener Count with JavaScript
In script.js, paste this—Cursor’s AI can debug if it glitches:

javascript

Collapse

Wrap

Copy
async function updateListeners() {
    try {
        const response = await fetch('http://yourstream:8000/stats?sid=1', { mode: 'no-cors' });
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const listeners = xml.querySelector('CURRENTLISTENERS')?.textContent || '0';
        document.getElementById('listener-count').textContent = listeners;
    } catch (error) {
        console.error('Listener fetch failed:', error);
        document.getElementById('listener-count').textContent = 'N/A';
    }
}
setInterval(updateListeners, 5000); // Every 5 sec
updateListeners();
Replace http://yourstream:8000 with your Shoutcast stats URL (check admin page).
no-cors might limit stats—Cursor can suggest a proxy fix if needed (e.g., cors-anywhere.herokuapp.com).
Step 6: Add Ads
AdSense:
Sign up (adsense.google.com), get 300x250 code post-approval.
In index.html, replace <div id="ads"></div> with:
html

Collapse

Wrap

Copy
<div id="ads">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins class="adsbygoogle" style="display:block;width:300px;height:250px" data-ad-client="your-client-id" data-ad-slot="your-slot-id"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
Placeholder: Until approved, use <img src="ad-placeholder.jpg" alt="Ad"> (make a quick 8-bit ad in GIMP).
Step 7: Host It
Netlify:
Sign up (netlify.com), drag your 8bitradio folder into their dashboard.
Deploy—get 8bitwaves.netlify.app (10 minutes).
Test: Open locally first (Live Server extension in Cursor), then Netlify for public.
Step 8: Tie It Together
BUTT streams from your PC (VPS later if needed).
Site embeds the stream, shows listeners, handles PayPal/ads.
Share on X: “8-Bit Waves FM—24/7 chiptunes!”
Time & Result
1-1.5 Hours: With Cursor’s help—code’s done, just swap your URLs.
Earnings: $5-$20 (PayPal), $1-$10 (ads) with 50-100 listeners.
PC: Still streams via BUTT—mute VLC.
Next Move
Open Cursor, new project 8bitradio, paste index.html. Done? I’ll guide styles.css or BUTT setup—where you at?






Refer to the following content:
image.png




I see you’ve created your index.html file for your 8-bit radio station website, and you’re at the point where Windows is asking how to open it. The dialog box shows options like Brave, Microsoft Visual Studio 2022, Cursor, Firefox, Internet Explorer, and Microsoft Edge. Since you’re using Cursor to code, let’s get this set up properly to continue building your site. You mentioned you don’t like small interfaces (like Winamp’s), so we’ll make sure everything stays clear and readable.

Step 1: Open index.html in Cursor
Select Cursor:
In the dialog box, choose Cursor from the list (it’s the third option, with the black-and-white icon).
Check the box “Always use this app to open .html files” if you want Cursor to be your default for HTML files.
Click “OK.”
What Happens:
Cursor opens index.html in its editor—big, clean interface, no squinting. You’ll see the HTML code I gave you earlier:
html

Preview

Collapse

Wrap

Copy
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>8-Bit Waves FM</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>8-Bit Waves FM</h1>
    </header>
    <main>
        <audio controls>
            <source src="http://yourstream:8000" type="audio/mpeg">
            Audio not supported.
        </audio>
        <p>Listeners: <span id="listener-count">0</span></p>
        <div id="ads"></div>
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="business" value="your-paypal-email@example.com">
            <input type="submit" value="Donate via PayPal">
        </form>
    </main>
    <script src="script.js"></script>
</body>
</html>
If you don’t see this, you might’ve created a blank file—paste the code in.
Step 2: Create styles.css
New File in Cursor:
In Cursor, click File > New File (or press Ctrl+N / Cmd+N).
Name it styles.css—save it in the same folder as index.html (e.g., C:\8bitradio).
Paste the CSS:
Copy this into styles.css:
css

Collapse

Wrap

Copy
body {
    font-family: 'Courier New', monospace;
    background-color: #000;
    color: #fff;
    text-align: center;
    font-size: 24px; /* Big, readable */
    margin: 0;
    padding: 20px;
}
h1 {
    font-size: 48px;
    color: #00ff00; /* NES green */
    text-shadow: 2px 2px #ff00ff; /* Retro glow */
}
audio {
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    display: block;
}
#listener-count {
    color: #ff00ff; /* Magenta pop */
}
#ads {
    width: 300px;
    height: 250px;
    background-color: #333;
    margin: 20px auto;
    border: 2px solid #00ff00;
}
input[type="submit"] {
    font-size: 20px;
    padding: 10px 20px;
    background-color: #ff00ff;
    color: #000;
    border: none;
    cursor: pointer;
}
input[type="submit"]:hover {
    background-color: #00ff00;
}
Cursor might suggest autocompletions (e.g., font- → font-size)—accept them to speed up.
Save: Ctrl+S / Cmd+S.
Step 3: Create script.js
New File:
File > New File, name it script.js, save in the same folder.
Paste the JavaScript:
Add this:
javascript

Collapse

Wrap

Copy
async function updateListeners() {
    try {
        const response = await fetch('http://yourstream:8000/stats?sid=1', { mode: 'no-cors' });
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const listeners = xml.querySelector('CURRENTLISTENERS')?.textContent || '0';
        document.getElementById('listener-count').textContent = listeners;
    } catch (error) {
        console.error('Listener fetch failed:', error);
        document.getElementById('listener-count').textContent = 'N/A';
    }
}
setInterval(updateListeners, 5000); // Every 5 sec
updateListeners();
Replace http://yourstream:8000 with your Shoutcast stats URL (you’ll get this after setting up BUTT).
Save it.
Step 4: Test Locally
Live Preview in Cursor:
Cursor has a built-in preview (or use the “Live Server” extension if installed).
Right-click index.html in Cursor > “Open with Live Server” (or similar—Cursor might label it differently).
It’ll open in your browser (e.g., Brave) at http://localhost:5500.
What You’ll See:
“8-Bit Waves FM” in big green text, retro style.
Audio player (won’t work yet—no stream).
“Listeners: 0” (updates later).
Placeholder ad spot, PayPal button.
If it’s blank, check file paths (styles.css, script.js must be in the same folder).
Step 5: Set Up Streaming (BUTT + Shoutcast)
Install BUTT:
Download from sourceforge.net/projects/butt/, install.
Play WAVs:
Install VLC, drag your GXSCC WAVs, loop, mute.
Install VAC (vb-audio.com), set VLC output to VAC.
BUTT: Settings > Audio > Device > VB-Audio Virtual Cable.
Shoutcast:
Sign up at shoutcast.com, get server IP/port/password.
BUTT: Settings > Main > Server > Add:
Address: Shoutcast IP.
Port: e.g., 8000.
Password: Yours.
Hit “Play”—test http://yourstream:8000 on your phone.
Update index.html and script.js:
Add your Shoutcast URL to the <audio> tag and fetch URL in script.js.
Step 6: Add Ads
In index.html, replace <div id="ads"></div> with your AdSense code (post-approval) or a placeholder:
html

Collapse

Wrap

Copy
<div id="ads">
    <p>Ad Space Coming Soon!</p>
</div>
Step 7: Host on Netlify
Sign Up:
Go to netlify.com, sign up (5 minutes).
Deploy:
Drag your 8bitradio folder (with index.html, styles.css, script.js) into Netlify’s dashboard.
Get a URL: 8bitwaves.netlify.app.
Share:
Post on X: “8-Bit Waves FM—24/7 chiptunes!”
Where You’re At
You’ve got index.html open in Cursor—files are set. Next is BUTT setup to stream, then hosting. Want to jump to streaming now? Or tweak the CSS in Cursor first? Let me know!