# Adding Songs to 8-Bit Waves FM

To add songs to the playlist:

1. Place your MP3 files in this `music` folder
2. Open `script.js` and add new entries to the `playlist` array like this:
```javascript
{
    title: "Song Title",
    artist: "Artist Name",
    file: "music/your-song.mp3"
}
```

## Guidelines:
- Use MP3 format for best compatibility
- Keep file sizes reasonable (under 5MB per song)
- Make sure you have rights to use the music
- Use clear, descriptive filenames
- Include both title and artist information

## Example:
```javascript
const playlist = [
    {
        title: "8-Bit Waves FM Theme",
        artist: "8-Bit Waves FM",
        file: "music/theme.mp3"
    },
    {
        title: "Retro Adventure",
        artist: "Chiptune Artist",
        file: "music/retro-adventure.mp3"
    }
];
``` 