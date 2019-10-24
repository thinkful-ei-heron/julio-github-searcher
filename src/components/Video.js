import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (
      <video className='video' width='50%' autoPlay loop>
        <source src={require('../videoplayback.webm')} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    );
  }
}
