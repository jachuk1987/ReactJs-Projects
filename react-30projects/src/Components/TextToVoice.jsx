import React, { Component } from 'react';

export default class TextToVoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      voices: [],
      selectedVoiceIndex: 0,
    };

    this.speech = new SpeechSynthesisUtterance();
  }

  componentDidMount() {
    this.updateVoices();
    window.speechSynthesis.onvoiceschanged = this.updateVoices;
  }

  updateVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      this.setState({ voices }, () => {
        this.speech.voice = voices[this.state.selectedVoiceIndex];
      });
    }
  };

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleVoiceChange = (event) => {
    const selectedVoiceIndex = event.target.value;
    this.setState({ selectedVoiceIndex }, () => {
      this.speech.voice = this.state.voices[selectedVoiceIndex];
    });
  };

  handleListenClick = () => {
    this.speech.text = this.state.text;
    window.speechSynthesis.cancel(); // Cancel any ongoing speech to prevent overlapping
    window.speechSynthesis.speak(this.speech);
  };

  render() {
    return (
      <div style={{ backgroundColor: 'aqua', padding: 0, margin: 0, height: '100vh' }}>
        <u>
          <div style={{ marginRight: '20px', color: 'green', textAlign: 'center' }}>
            <h2> Text To Voice Converter</h2>
          </div>
        </u>

        <div id="main" style={styles.main}>
          <div>
            <textarea
              id="textarea"
              style={styles.textarea}
              value={this.state.text}
              onChange={this.handleTextChange}
            ></textarea>
          </div>

          <div>
            <h3 style={{ color: 'rgb(66, 30, 210)' }}>Select voice to listen:</h3>
            <select
              style={styles.select}
              value={this.state.selectedVoiceIndex}
              onChange={this.handleVoiceChange}
            >
              {this.state.voices.map((voice, index) => (
                <option key={index} value={index}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
            <span>
              <button style={styles.button} onClick={this.handleListenClick}>
                <h3>Listen</h3>
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    marginLeft: '250px',
    marginTop: '50px',
    padding: '20px',
  },
  textarea: {
    width: '700px',
    height: '300px',
    borderRadius: '10px',
    border: '2px solid black',
  },
  select: {
    width: '500px',
    height: '40px',
    border: '2px solid black',
    borderRadius: '20px',
    color: 'black',
  },
  button: {
    width: '100px',
    borderRadius: '10px',
    backgroundColor: 'rgb(238, 139, 39)',
    height: '40px',
    marginLeft: '50px',
  },
};
