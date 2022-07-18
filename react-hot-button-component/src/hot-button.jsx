import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.heatingUp = this.heatingUp.bind(this);
  }

  heatingUp() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount < 4) {
      return <button onClick={this.heatingUp} className='hot-button cold'>Cold</button>;
    } else if (this.state.clickCount < 7) {
      return <button onClick={this.heatingUp} className='hot-button cool'>Cool</button>;
    } else if (this.state.clickCount < 10) {
      return <button onClick={this.heatingUp} className='hot-button tepid'>Tepid</button>;
    } else if (this.state.clickCount < 13) {
      return <button onClick={this.heatingUp} className='hot-button warm'>Warm</button>;
    } else if (this.state.clickCount < 16) {
      return <button onClick={this.heatingUp} className='hot-button hot'>Hot</button>;
    } else if (this.state.clickCount >= 16) {
      return <button onClick={this.heatingUp} className='hot-button nuclear'>Nuclear</button>;
    }
  }
}
