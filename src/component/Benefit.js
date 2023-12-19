import React, { Component } from 'react'
class Benefit extends Component {
  render() {
    return (
      <div className='benefit'>
        <img src={this.props.pic}/>
        <div className='num'>
            <b>{this.props.num}</b>
            <br/>
            <span>{this.props.tit}</span>
        </div>
      </div>
    )
  }
}

export default Benefit
