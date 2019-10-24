import React, { Component } from 'react';

export default class Form extends Component {
  getData = (e) => {
    e.preventDefault();
    this.props.getData(e.target.search.value);
    e.target.search.value = '';
  };

  render() {
    return (
      <form className='search' onSubmit={this.getData}>
        <input
          type='text'
          name='search'
          placeholder='Enter Your GitHub'
          required
        ></input>
        <button type='submit'>Search</button>
      </form>
    );
  }
}
