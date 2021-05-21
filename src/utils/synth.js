import * as Tone from 'tone';

const synth = new Tone.Sampler({
    urls: {
        "C0": "C0.mp3",
        "C1": "C1.mp3",
        "C2": "C2.mp3",
        "C3": "C3.mp3",
        "C4": "C4.mp3",
        "C5": "C5.mp3",
        "C6": "C6.mp3",
        "C7": "C7.mp3",
        "C8": "C8.mp3",
        "C9": "C9.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

export default synth;