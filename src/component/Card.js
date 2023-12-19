import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <img src={this.props.pic} />
                {this.props.br === true
                    ? <div>
                        <b>{this.props.title}</b>
                        <br/>
                        <span>{this.props.caption}</span>
                    </div>
                    : <React.Fragment>
                        <b>{this.props.title}</b>
                        <span>{this.props.caption}</span>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Card
