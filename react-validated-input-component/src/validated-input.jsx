import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passValue: '',
      nameValue: '',
      imgSrc: null,
      passConfirm: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ nameValue: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ passValue: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.passValue === '') {
      event.preventDefault();
      this.setState({ imgSrc: './img/x-mark-16.png', passConfirm: 'A password is required' });
      setTimeout(() => this.setState({ imgSrc: null, passConfirm: '' }), 2000);
    } else if (this.state.passValue.length > 7) {
      event.preventDefault();
      this.setState({ nameValue: '', passValue: '' });
      this.setState({ imgSrc: './img/checkmark-16.png' });
      setTimeout(() => this.setState({ imgSrc: null, passConfirm: null }), 2000);
    } else {
      event.preventDefault();
      this.setState({ imgSrc: './img/x-mark-16.png', passConfirm: 'Your password is too short' });
      setTimeout(() => this.setState({ imgSrc: null, passConfirm: '' }), 2000);
    }
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="password">
              Password:
              <input type="password" name="password" id="password" value={this.state.passValue} onChange={this.handlePasswordChange} />
              <img src={this.state.imgSrc} />
            </label>
            <button className='submit-button'>Submit</button>
          </form>
        </div>
        <p>{this.state.passConfirm}</p>
      </div>
    );
  }
}
