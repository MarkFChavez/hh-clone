import React, { Component } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import TopicList from './components/TopicList'

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
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Header title='HH' />
          </div>
        </div>

        <div className='row'>
          <div className='col-2'>
            <TopicList topics={TOPICS} />
          </div>

          <div className='col-10'>
            <Card
              title='Go Freaking Do It'
              desc='Smart contract for reaching your goals.' />

            <Card
              title='Goodreads for podcasts'
              desc='Echo Podcasts' />
          </div>
        </div>
      </div>
    );
  }
}

export default App
