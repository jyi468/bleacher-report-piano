# Running
Since this was created using the `create-react-app`, all you need to do is first install the dependencies.

I used Node v14.16.0 and npm 6.14.11:

`npm install`

Then, run:

`npm run start`

To see the application running on `localhost:3000`.

# Features
- Supports multiple piano instances with logger.
- Synth sound on note press, with sound support for different octaves.
  - The 1st and 2nd pianos shown on the screen have ranges of C5 - B5 and C4 - B4, respectively.
- Glissando with the mouse. (Click on a note and try dragging across the keyboard)
- Validation for input on "Play" button press.
- "Clear Log" button to clear logs

# Potential Features
- Update keys and logs to support showing octave numbers
- Keyboard mappings to keys
- Playing preset melodies / songs
- Preset instruments and controllable synth controls (Envelope, EQ, etc.);
- Who knows...

# References
CSS Piano: https://codepen.io/zastrow/pen/oDBki

Tone.js: https://tonejs.github.io/

General React Documentation when needed.