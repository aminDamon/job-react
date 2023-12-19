import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as noStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as star } from '@fortawesome/free-solid-svg-icons';
import arrow from './pic/client/Group.png'
class ClientCard extends Component {
    render() {
        return (
            <div className='client_card'>
                <div>
                    <div className='star'>
                        <FontAwesomeIcon icon={this.props.star >= 1 ? star : noStar} className={this.props.star >= 1 ? 'active' : ''} />
                        <FontAwesomeIcon icon={this.props.star >= 2 ? star : noStar} className={this.props.star >= 2 ? 'active' : ''} />
                        <FontAwesomeIcon icon={this.props.star >= 3 ? star : noStar} className={this.props.star >= 3 ? 'active' : ''} />
                        <FontAwesomeIcon icon={this.props.star >= 4 ? star : noStar} className={this.props.star >= 4 ? 'active' : ''} />
                        <FontAwesomeIcon icon={this.props.star >= 5 ? star : noStar} className={this.props.star >= 5 ? 'active' : ''} />
                    </div>
                    <p>{this.props.caption}</p>
                </div>

                <div className='user'>
                    <div className='left'>
                        <img src={this.props.userPic} />
                        <div><b>{this.props.userName}</b>
                            <br />
                            <span>{this.props.userJob}</span></div>

                    </div>
                    <div className='right'><img src={arrow} /></div>

                </div>
            </div>
        )
    }
}

export default ClientCard
