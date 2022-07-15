import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: 0,
      control: true,
      interval: null
    };
    this.handleTime = this.handleTime.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleTime() {
    this.setState(prevState => ({
      control: !prevState.control
    }));
    if (this.state.control === true) {
      const test = setInterval(() => {
        this.setState({ clock: this.state.clock + 1 });
      }, 1000);
      this.setState({ interval: test });
    } else {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
    }
  }

  reset() {
    if (this.state.control === true) {
      this.setState({ clock: 0 });
    }
  }

  render() {
    return (
      <div className='flex'>
        <div onClick={this.reset} className='watch-rim'>
          <p>{this.state.clock}</p>
        </div>
        <div className='play-pause'>
          <img onClick={this.handleTime} className='pause' src={this.state.control ? '../dist/img/play.png' : '../dist/img/pause.png'} alt="play" />
        </div>
      </div>
    );
  }
}
