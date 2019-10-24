import React, { Component } from 'react';
import Form from './components/Form';
import Results from './components/Results';
import Video from './components/Video';
import './App.css';

export default class App extends Component {
  state = {
    data: [],
    loading: false,
    active: false,
  };

  getData = (user) => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(this.setState({ loading: true }))
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
          active: true,
        });
      });
  };

  render() {
    return (
      <>
        <header>
          <h1>GitHub Searchinator 9000.2</h1>
        </header>
        <Form getData={this.getData} />
        <Results data={this.state.data} />
        {this.state.active ? <Video /> : null}
      </>
    );
  }
}
