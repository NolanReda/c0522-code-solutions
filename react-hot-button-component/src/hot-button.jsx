import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heat: 'cold',
      clickCount: 0
    };
    this.heatingUp = this.heatingUp.bind(this);
  }

  heatingUp() {
    this.setState({ clickCount: this.state.clickCount + 1 });
    if (this.state.clickCount === 3) {
      this.setState({ heat: 'cool' });
    } else if (this.state.clickCount === 6) {
      this.setState({ heat: 'tepid' });
    } else if (this.state.clickCount === 9) {
      this.setState({ heat: 'warm' });
    } else if (this.state.clickCount === 12) {
      this.setState({ heat: 'hot' });
    } else if (this.state.clickCount === 15) {
      this.setState({ heat: 'nuclear' });
    }
  }

  render() {
    if (this.state.clickCount < 4) {
      return <button onClick={this.heatingUp} className='hot-button cold'>{this.state.heat}</button>;
    } else if (this.state.clickCount < 7) {
      return <button onClick={this.heatingUp} className='hot-button cool'>{this.state.heat}</button>;
    } else if (this.state.clickCount < 10) {
      return <button onClick={this.heatingUp} className='hot-button tepid'>{this.state.heat}</button>;
    } else if (this.state.clickCount < 13) {
      return <button onClick={this.heatingUp} className='hot-button warm'>{this.state.heat}</button>;
    } else if (this.state.clickCount < 16) {
      return <button onClick={this.heatingUp} className='hot-button hot'>{this.state.heat}</button>;
    } else if (this.state.clickCount >= 16) {
      return <button onClick={this.heatingUp} className='hot-button nuclear'>{this.state.heat}</button>;
    }
  }
}
