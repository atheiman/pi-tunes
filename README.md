# PiTunes

Internet Radio AngularJS app designed for small touchscreens with no keyboard interface, like a Raspberry Pi.

PiTunes is an internet radio AngularJS app. It's designed for a small touchscreen with no keyboard interface - I use an [Adafruit PiTFT 480x320 3.5" Touchscreen](https://www.adafruit.com/products/2097) hooked up to a Raspberry Pi. It plays music from a variety of sources:

- [ ] Local Tracks
- [ ] Internet Radio Streams
- [ ] Pandora's API
- [ ] Google Play Music API

A explanation of each of the sources is below.

<hr/>

## Local Tracks

The local tracks source plays music from a directory on the server, `pi-tunes/app/local-tracks/` by default. The local tracks directory should have an `album-art` and a `music` subdirectory:

```
local-tracks/
├── album-art
│   ├── misterwives-our-own-house.jpg
│   └── the-black-keys-el-camino.jpg
├── music
│   ├── misterwives-our-own-house.mp3
│   ├── the-black-keys-gold-on-the-ceiling.mp3
│   └── the-black-keys-little-black-submarines.mp3
└── tracks.json
```

After placing music in the local tracks directory, register the track in `tracks.json` (example below). If you dont specify all the properties shown here PiTunes will try to fail gracefully, but I would recommend at least `artist`, `title` along with the of course required `audioFile`.

```JSON
[
  {
    "artist": "The Black Keys",
    "title": "Gold On The Ceiling",
    "album": "El Camino",
    "audioFile": "the-black-keys-gold-on-the-ceiling.mp3",
    "albumArtFile": "the-black-keys-el-camino.jpg"
  },
  {
    "artist": "The Black Keys",
    "title": "Little Black Submarines",
    "album": "El Camino",
    "audioFile": "the-black-keys-little-black-submarines.mp3",
    "albumArtFile": "the-black-keys-el-camino.jpg"
  },
  {
    "artist": "MisterWives",
    "title": "Our Own House",
    "album": "Our Own House",
    "audioFile": "misterwives-our-own-house.mp3",
    "albumArtFile": "misterwives-our-own-house.jpg"
  }
]
```

<hr/>

Below is some old planning that I'm not quite ready to get rid of...

- "Now Playing" frontend to be displayed on the radio using an [Adafruit PiTFT 480x320 3.5" Touchscreen](https://www.adafruit.com/products/2097)
  - [ ] Display IP address on boot
  - [ ] Select audio source
  - [ ] Select "radio station" / genre
  - [ ] Artist, track, album art
  - [ ] Basic interaction (play, pause, thumb up / down, skip)
  - [ ] Display IP address in bottom corner
- Backend to connect to serve media and web pages
  - [ ] Maintain configured sources
  - [ ] Serve audio stream for frontend
  - [ ] Serve web pages
- Admin frontend to manage sources and stations
  - [ ] Manage sources
    - [ ] [Pandora API](http://6xq.net/pandora-apidoc/)
    - [ ] [Google music API](https://unofficial-google-music-api.readthedocs.org/en/latest/index.html)
    - [ ] Radio stream URLs (examples: [810 WHB](http://2503.live.streamtheworld.com:443/WHBAM_SC), [96.5 The Buzz](http://54.158.79.151/entercom-krbzfmmp3-64))
      - [ ] Station name, stream URL, image (uploaded or URL)
  - [ ] Manage local music
    - [ ] Artist, Track

## Ideas

- [Dirble API](https://dirble.com/api-doc)
