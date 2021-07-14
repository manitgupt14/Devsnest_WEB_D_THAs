import React from 'react';
import './index.css';


class Counter extends React.Component {
    state = {
      count: 0
    };
  
    handleClick = () => {
      // Use updater function when new state is derived from old
      this.setState((prev) => ({ count: prev.count + 1 }));
    };
  
    render() {
      return (
        <button className="block" onClick={this.handleClick}>
          <div className="counter">{this.state.count}</div>
        </button>
      );
    }
  }
  
  // Now you can use it dynamically like this:
  class App extends React.Component {
    render() {
      return (
        <div className="App">
          <div className="Txt">
            There are 4 counter component instances that each manage their own
            state.
          </div>
          {[1, 2, 3, 4].map((v) => (
            <Counter />
          ))}
        </div>
      );
    }
  }
  export default App;