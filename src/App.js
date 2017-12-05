import React, { Component } from 'react'
import Header from './components/Header'
import CardList from './components/CardList'
import TopicList from './components/TopicList'
import items from './data'

const TOPICS = [
  'Development',
  'System',
  'Tools',
  'Data science',
  'Blockchain',
  'Mobile',
  'Awesome lists',
  'Social',
  'Visual',
  'Open source',
  'All topics'
]

class App extends Component {

  state = { items }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <Header title='HH' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <div className='row'>
              <div className='col-md-3'>
                <TopicList topics={TOPICS} />
              </div>

              <div className='col-md-9'>
                <CardList items={this.state.items} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
