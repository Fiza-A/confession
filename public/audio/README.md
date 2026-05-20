The website currently uses the official Apple Music/iTunes preview URL for "Tera Hone Laga Hoon" by Atif Aslam, Alisha Chinai and Pritam.

To use your own licensed full song file instead, place it here as:

majboor.mp3

Then change `song.src` in `src/data/loveConfig.js` to:

`${import.meta.env.BASE_URL}audio/majboor.mp3`
