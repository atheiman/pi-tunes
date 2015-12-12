# PiTunes

Internet Radio AngularJS app designed for small touchscreens with no keyboard interface, like a Raspberry Pi.

PiTunes is an internet radio AngularJS app. It's designed for a small touchscreen with no keyboard interface - I use an [Adafruit PiTFT 480x320 3.5" Touchscreen](https://www.adafruit.com/products/2097) hooked up to a Raspberry Pi. It plays music from a variety of sources:

- [ ] internet radio streams
- [ ] music stored locally
- [ ] Pandora's api
- [ ] Google play music api

<hr/>

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

