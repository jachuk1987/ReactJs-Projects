import React, { Component } from 'react';

export default class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftItems: ['list1', 'list2', 'list3', 'list4'],
      rightItems: []
    };
  }

  onDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  }

  onDrop = (e, box) => {
    const item = e.dataTransfer.getData("text/plain");
    this.setState(prevState => {
      if (box === 'left') {
        return {
          leftItems: [...prevState.leftItems, item],
          rightItems: prevState.rightItems.filter(i => i !== item)
        };
      } else if (box === 'right') {
        return {
          rightItems: [...prevState.rightItems, item],
          leftItems: prevState.leftItems.filter(i => i !== item)
        };
      }
    });
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  render() {
    const styles = {
      block: {
        marginLeft: '400px',
        marginTop: '50px',
        width: '500px',
        height: 'auto',
        display: 'flex',
      },
      box: {
        border: '2px solid red',
        padding: '10px',
        margin: 'auto',
        height: '200px',
        width: '230px',
      },
      item: {
        width: '180px',
        margin: '10px',
        height: '30px',
        textAlign: 'center',
        color: 'aliceblue',
        backgroundColor: 'black',
        cursor: 'pointer',
      }
    };

    return (
      <div>
        <div style={{ marginRight: '20px', color: 'red', textAlign: 'center' }}>
          <h2>Drag and Drop</h2>
        </div>
        <div id="block" style={styles.block}>
          <div
            id="left"
            style={styles.box}
            onDragOver={this.allowDrop}
            onDrop={(e) => this.onDrop(e, 'left')}
          >
            {this.state.leftItems.map(item => (
              <div
                key={item}
                className="one"
                draggable="true"
                onDragStart={(e) => this.onDragStart(e, item)}
                style={styles.item}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            id="right"
            style={styles.box}
            onDragOver={this.allowDrop}
            onDrop={(e) => this.onDrop(e, 'right')}
          >
            {this.state.rightItems.map(item => (
              <div
                key={item}
                className="one"
                draggable="true"
                onDragStart={(e) => this.onDragStart(e, item)}
                style={styles.item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
