import React, { Component } from "react";
import '../App.css';
import card_icon from "../assets/card-text.svg";
import pencil_icon from "../assets/pencil.svg";
import trash_icon from "../assets/trash.svg";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      this.setState({ notes: JSON.parse(savedNotes) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.notes !== this.state.notes) {
      localStorage.setItem("notes", JSON.stringify(this.state.notes));
    }
  }

  addNote = () => {
    this.setState((prevState) => ({
      notes: ["", ...prevState.notes],
    }));
  };

  updateNote = (index, content) => {
    const updatedNotes = [...this.state.notes];
    updatedNotes[index] = content;
    this.setState({ notes: updatedNotes });
  };

  deleteNote = (index) => {
    const updatedNotes = [...this.state.notes];
    updatedNotes.splice(index, 1);
    this.setState({ notes: updatedNotes });
  };

  render() {
    const { notes } = this.state;

    return (
      <div className="container2">
        <h1>
          <img src={card_icon} alt="Notes Icon" />
          Notes
        </h1>
        <button className="btn" onClick={this.addNote}>
          <img src={pencil_icon} alt="Create Note" />
          Create Note
        </button>
        <div className="notes-container">
          {notes.map((note, index) => (
            <div key={index} className="note">
              <p
                contentEditable="true"
                className="input-box"
                onInput={(e) => this.updateNote(e.currentTarget.textContent, index)}
              >
                {note}
              </p>
              <img
                src={trash_icon}
                alt="Delete Note"
                onClick={() => this.deleteNote(index)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Notepad;
