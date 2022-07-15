import React from 'react';
// import ReactDOM from 'react-dom/client';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    if (this.state.isOn === false) {
      return <div onClick={this.handleClick} className='switch-border off'>
      <div className='switch-off'></div>
           </div>;
    } else if (this.state.isOn === true) {
      return <div onClick={this.handleClick} className='switch-border on'>
               <div className='switch-on'></div>
             </div>;
    }
  }
}
