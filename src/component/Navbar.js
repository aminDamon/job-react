import React, { Component } from 'react'
import './styles/header.css'
// import logo from './pic/logo/logo.png'
import iranFlag from './pic/flag/ir.png'
import usaFlag from './pic/flag/usa.png'
import searchIcon from './pic/svg/search.png'
import logo from './pic/logo/briefcase 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
class Navbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         flag: "usa"
      }
      this.flagRef = React.createRef()
    }

    flagHandler = () => {
        this.setState({
            flag: this.flagRef.current.value
        })
    }

    openSearch = () => {
        let damon = !this.props.refFlag;
        this.props.openSearchHandler(damon)
    }
    
  render() {
    // console.log(this.props.refFlag);
    return (
      <div className='navbar'>
        <div className='logo_search'>
            <div className='logo'>
                <FontAwesomeIcon icon={faBars} className='menu_icon' />
                <img src={logo}/>
                <h1 className={this.props.lang === "English" ? "" : "margin_left"}>{this.props.lang === "English" ? "Jobpilto" : "جاب پیلتو"}</h1>
            </div>
            {/* <img src={logo} className='logo'/> */}
            <div className='search_box'>
                <img src={this.state.flag === "usa" ? usaFlag : iranFlag} className='flag'/>
                <select className="select-box" onChange={this.flagHandler} ref={this.flagRef}>
                    <option value="usa">USA</option>
                    <option value="iran">Iran</option>
                </select>
                <img src={searchIcon} className='search_icon'/>
                <input type='text' placeholder={this.props.lang === "English" ? 'Job tittle, keyword,company' : 'عنوان شغلی , نام شرکت'}/>
            </div>
        </div>
        
        <div className='login'>
            <a href='#'>{(this.props.lang === "English" ? "Sign In" : "ثبت نام")}</a>
            <a href='#'>{(this.props.lang === "English" ? "Post a Jobs" : "ثبت آگهی")}</a>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mobile_search' onClick={this.openSearch} />
            <a href='#'>{(this.props.lang === "English" ? "Get Started" : "شروع کنید")}</a>
        </div>
      </div>
    )
  }
}

export default Navbar
