import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as regularSave } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solidSave } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

class FeatCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isSolid: false
        }
    }

    solidHandler = () => {
        this.setState({
            isSolid: !this.state.isSolid
        })
    }

    render() {
        return (
            <div className={this.props.active === "active" ? 'card active' : 'card'}>
                <b className='title'>{this.props.title}</b>
                <div className='tp'>
                    <div className='time'>{this.props.time}</div>
                    <span>Salary: ${this.props.price}</span>
                </div>
                <div className='damon'>
                    <div className='company'>
                        <img src={this.props.ci} />
                        <div className='name_loc'>
                            <b>{this.props.cn}</b>
                            <p>
                                <FontAwesomeIcon className='icon' icon={faLocationDot}/>
                                {this.props.loc}
                            </p>
                        </div>

                    </div>
                    <FontAwesomeIcon 
                    className='save' 
                    icon={this.state.isSolid === false ? regularSave : solidSave} 
                    onClick={this.solidHandler} />
                </div>

            </div>
        )
    }
}

export default FeatCard

