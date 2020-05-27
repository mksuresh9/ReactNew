import React from 'react';

class Inc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  Increment = () => {
    this.setState(
        { clicks: this.state.clicks + 1 }
        );
  }
  Decreament = () => {
    this.setState(
        { clicks: this.state.clicks - 1 }
        );
  }
  ToggleClick = () => {
    this.setState(
        { show: !this.state.show }
        );
  }

  render() {
    return (
      <div>
        <button onClick={this.Increment}>increment</button>
        <button onClick={this.Decreament}>decrement</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default Inc;