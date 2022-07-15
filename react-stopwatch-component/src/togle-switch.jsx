import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clock: 0 };
  }

  render() {
    return (
      <div>
        <div className='watch-rim'>
          <p>{this.state.clock}</p>
        </div>
        <div className='play-pause'>
          <button>random text</button>
        </div>
      </div>
    );
  }
}
