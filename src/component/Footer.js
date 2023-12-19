import React, { Component } from 'react'
import logo from './pic/footer/briefcase 1.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram , faFacebook , faYoutube } from '@fortawesome/free-brands-svg-icons'
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='one'>
                    <div className='team'>
                        <img src={logo} />
                        <h1>Jobpilot</h1>
                    </div>
                    <span>Call now: <b>09395203333</b></span>
                        <span>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</span>
                </div>
                <div className='two'>
                    <h1>Quick Link</h1>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                </div>

                <div className='three foot_menu'>
                    <h1>Candidate</h1>
                    <p>Browse Jobs</p>
                    <p>Browse Employers</p>
                    <p>Candidate Dashboard</p>
                    <p>Saved Jobs</p>
                </div>

                <div className='four foot_menu'>
                    <h1>Employers</h1>
                    <p>Post a Job</p>
                    <p>Browse Candidates</p>
                    <p>Employers Dashboard</p>
                    <p>Applications</p>
                </div>

                <div className='five foot_menu'>
                    <h1>Support</h1>
                    <p>Faqs</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                

                <div className='social'>
                    <span>@ 2021 Jobpilot - Job Portal. All rights Rserved</span>
                    <div className='social_icon'>
                        <FontAwesomeIcon className='icon' icon={faFacebook}/>
                        <FontAwesomeIcon className='icon' icon={faYoutube}/>
                        <FontAwesomeIcon className='icon' icon={faInstagram}/>
                        <FontAwesomeIcon className='icon' icon={faTwitter}/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
