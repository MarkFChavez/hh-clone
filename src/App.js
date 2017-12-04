import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Header>
              <h2> HH </h2>
              <small> a hacker hunt clone written by <a href='#'>@markisundefined</a> </small>
            </Header>
          </div>
        </div>
      </div>
    );
  }
}

export default App
