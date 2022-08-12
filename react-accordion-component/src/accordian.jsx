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
    // console.log(event.target.id);

  }

  // createTopic(topic) {
  //   return
  //   })
  // }

  render() {
    return (
      <div id='menu'>
        <div onClick={this.handleDrop} id='html' className='container'>
          <div className="drop-hide">
            <h2>Hypertext Marckup Language</h2>
          </div>
          <div className="text-box">
            <p>
              {this.state.topics.name}
            </p>
          </div>
        </div>
      </div>
    );
  }

}
