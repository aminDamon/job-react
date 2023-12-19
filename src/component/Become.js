import React, { Component } from 'react'
import one from './pic/become/Candidate & Employers.jpg'
import two from './pic/become/Candidate & Employers (1).jpg'
class Become extends Component {
  render() {
    return (
      <div className='become'>
        <img src={one}/>
        <img src={two}/>
      </div>
    )
  }
}

export default Become
