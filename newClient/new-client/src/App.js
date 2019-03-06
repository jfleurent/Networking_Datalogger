import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let Chart = require("chart.js");

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const node = this.node;

        let myChart = new Chart(node, {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [
                    {
                        label: "# of Likes",
                        data: [12, 19, 3],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)"
                        ]
                    }
                ]
            }
        });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <canvas
              style={{ width: 800, height: 300 }}
              ref={node => (this.node = node)}
          />
      </div>
    );
  }
}

export default App;
