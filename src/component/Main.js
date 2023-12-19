import React, { Component } from 'react'
import TopNavbar from './TopNavbar'
import Navbar from './Navbar'
import Header from './Header'
import Popular from './Popular'
import How from './How'
import Category from './Category'
import Featured from './Featured'
import Client from './Client'
import Footer from './Footer'
import Become from './Become'
class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         refFlag: false,
      }
    }

    openSearchHandler = (value) => {
        this.setState({
            refFlag: value
        })
    }
    
  render() {
    // console.log(this.state.refFlag);
    return (
      <div>
        <TopNavbar lang={this.props.lang} updateLang={this.props.updateLang} />
        <Navbar openSearchHandler={this.openSearchHandler} refFlag={this.state.refFlag} lang={this.props.lang}/>
        <Header refFlag={this.state.refFlag} lang={this.props.lang}/>
        <Popular lang={this.props.lang}/>
        <How lang={this.props.lang}/>
        <Category lang={this.props.lang}/>
        <Featured lang={this.props.lang}/>
        <Client lang={this.props.lang}/>
        <Become lang={this.props.lang}/>
        <Footer lang={this.props.lang}/>
      </div>
    )
  }
}

export default Main

