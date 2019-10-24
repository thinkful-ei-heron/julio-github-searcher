import React, { Component } from 'react';

export default class Results extends Component {
  render() {
    return (
      <ul className='results'>
        {this.props.data.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
