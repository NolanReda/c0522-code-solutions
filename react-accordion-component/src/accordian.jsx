import React from 'react';
import { topicsArray } from './topics';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: null,
      topics: topicsArray
    };
    this.handleDrop = this.handleDrop.bind(this);
    this.createTopic = this.createTopic.bind(this);
  }

  handleDrop(event) {
    if (this.state.openTopic === event.target.textContent) {
      this.setState({ openTopic: null });
    } else {
      this.setState({ openTopic: event.target.textContent });
    }
  }

  createTopic(topic) {
    const { topics, openTopic } = this.state;
    return topics.map(topic => {
      return (
        <div key={topic.name}>
          <div onClick={this.handleDrop} className='dropdown'>
            <h1>{topic.name}</h1>
          </div>
          <div className={topic.name === openTopic ? 'text-box' : 'hidden'}>
          <p>{topic.text}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {
          this.createTopic()
        }
      </div>
    );
  }

}
