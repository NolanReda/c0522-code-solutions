import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerClassNames: 'drawer hidden',
      containerClass: 'container'
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    this.setState({ drawerClassNames: 'drawer', containerClass: 'container shadow' });
  }

  hideMenu(event) {
    if (this.state.drawerClassNames === 'drawer') {
      this.setState({ drawerClassNames: 'drawer hidden', containerClass: 'container' });
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.hideMenu} className={this.state.containerClass}>
          <img onClick={this.showMenu} className='menu-button' src='../src/img/menu.png' alt='menu button' />
        </div>
        <div className={this.state.drawerClassNames}>
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
