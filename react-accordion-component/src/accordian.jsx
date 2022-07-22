import React from 'react';
import { topicsArray } from './topics';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropHtml: 'drop-hide',
      textHtml: 'text-box hidden',
      dropCss: 'drop-hide',
      textCss: 'text-box hidden',
      dropJs: 'drop-hide',
      textJs: 'text-box hidden'
    };
    this.handleHtml = this.handleHtml.bind(this);
    this.handleCss = this.handleCss.bind(this);
    this.handleJavaScript = this.handleJavaScript.bind(this);
  }

  handleHtml(event) {
    this.setState({ dropHtml: 'dropdown', textHtml: 'text-box' });
    if (this.state.dropHtml === 'dropdown') {
      this.setState({ dropHtml: 'drop-hide', textHtml: 'text-box hidden' });
    }
  }

  handleCss(event) {
    this.setState({ dropCss: 'dropdown', textCss: 'text-box' });
    if (this.state.dropCss === 'dropdown') {
      this.setState({ dropCss: 'drop-hide', textCss: 'text-box hidden' });
    }
  }

  handleJavaScript(event) {
    this.setState({ dropJs: 'dropdown', textJs: 'text-box' });
    if (this.state.dropJs === 'dropdown') {
      this.setState({ dropJs: 'drop-hide', textJs: 'text-box hidden' });
    }
  }

  render() {
    return (
      <div id='menu'>
        <div onClick={this.handleHtml} className='container'>
          <div className={this.state.dropHtml}>
            <h2>Hypertext Marckup Language</h2>
          </div>
          <div className={this.state.textHtml}>
            <p>
              {topicsArray.HTML}
            </p>
          </div>
        </div>
        <div onClick={this.handleCss} className='container'>
          <div className={this.state.dropCss}>
            <h2>Cascading Style Sheets</h2>
          </div>
          <div className={this.state.textCss}>
            <p>
              {topicsArray.css}
            </p>
          </div>
        </div>
        <div onClick={this.handleJavaScript} className='container'>
          <div className={this.state.dropJs}>
            <h2>JavaScript</h2>
          </div>
          <div className={this.state.textJs}>
            <p>
              {topicsArray.javascript}
            </p>
          </div>
        </div>
      </div>
    );
  }

}
