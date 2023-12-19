import React, { Component } from 'react'
import './styles/header.css'
import callIcon from './pic/svg/PhoneCall.png'
import iranFlag from './pic/flag/ir.png'
import usaFlag from './pic/flag/usa.png'
class TopNavbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         lang: "English",
         position: "rel"
      }
      this.selectRef = React.createRef()
    }
    
    componentDidMount() {
        console.log(this.selectRef.current.value);
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                this.fixNavbar()
            } else {
                this.relNavbar()
            }
        })
    }

    fixNavbar = () => {
        this.setState({
            position: "fixed"
        })
    }

    relNavbar = () => {
        this.setState({
            position: "rel"
        })
    }

    damon = (event) => {
        this.setState({
            lang: this.selectRef.current.value
        })
        this.props.updateLang(this.selectRef.current.value)
        console.log(this.state.lang);
        console.log(this.selectRef.current.value);
    }
  render() {
    return (
      <div className={this.state.position === "rel" ? 'top_navbar' : 'top_navbar fix'}>
        <div className='menu'>
            <a href='#' className='active'>{(this.state.lang === "English" ? "Home" : "خانه")}</a>
            <a href='#'>{(this.state.lang === "English" ? "Find Job" : "پروژه")}</a>
            <a href='#'>{(this.state.lang === "English" ? "Employers" : "کارفرمایان")}</a>
            <a href='#'>{(this.state.lang === "English" ? "Candidates" : "نامزدهای")}</a>
            <a href='#'>{(this.state.lang === "English" ? "Pricing Plans" : "طرح های قیمت گذاری")}</a>
            <a href='#'>{(this.state.lang === "English" ? "Customer Supports" : "پشتیبانی از مشتری")}</a>
        </div>
        <div className='call'>
            <div className='lang'>
                <img src={callIcon}/>
                <b>{(this.state.lang === "English" ? "+98-939-520-3333" : "+98-939-520-3333")}</b>
            </div>
            
            <div className='lang'>
                <img src={this.state.lang === "English" ? usaFlag: iranFlag}/>
                <select className="select-box" onChange={this.damon} ref={this.selectRef}>
                    <option value="English">{(this.state.lang === "English" ? "English" : "انگلیسی")}</option>
                    <option value="Persian">{(this.state.lang === "English" ? "Persian" : "فارسی")}</option>
                </select>
            </div>
            
        </div>
      </div>
    )
  }
}

export default TopNavbar
