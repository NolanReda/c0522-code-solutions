import React from 'react';
import ReactDOM from 'react-dom/client';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passValue: '',
      nameValue: ''
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
    console.log('New user signed up:' + this.state.nameValue + ' ' + this.state.passValue);
    event.preventDefault();
    this.setState({ nameValue: '', passValue: '' });
  }

  render() {
    return (
      <form onClick={this.handleSubmit}>
      <label>
        Username:
        <input type="text" value={this.state.nameValue} onChange={this.handleUsernameChange} />
      </label>
      <label>
        Password:
          <input type="password" value={this.state.passValue} onChange={this.handlePasswordChange} />
      </label>
      <button>Submit</button>
    </form>
    );
  }
}

const element = <RegistrationForm />;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
