import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    this.setState({ isOpen: true });
  }

  hideMenu(event) {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <div onClick={this.hideMenu} className={this.state.isOpen ? 'container shadow' : 'container' }>
          <img onClick={this.showMenu} className='menu-button' src='../src/img/menu.png' alt='menu button' />
        </div>
        <div className={this.state.isOpen ? 'drawer' : 'drawer hidden'}>
          <h1>Choose a Game</h1>
          <h3 onClick={this.hideMenu}>The Legend of Zelda</h3>
          <h3 onClick={this.hideMenu}>A Link to the Past</h3>
          <h3 onClick={this.hideMenu}>Ocarina of Time</h3>
          <h3 onClick={this.hideMenu}>The Wind Waker</h3>
          <h3 onClick={this.hideMenu}>Breath of the Wild</h3>
        </div>
      </div>
    );
  }
}
