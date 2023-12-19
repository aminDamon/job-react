// import logo from './logo.svg';
// import './App.css';
// import TopNavbar from './component/TopNavbar';

// function App() {
//   return (
//     <div className="App">
//       <TopNavbar />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import './App.css';
import Main from './component/Main';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       lang: "English"
    }
  }

  updateLang = (lan) => {
    this.setState({
      lang: lan
    })


    const root = document.documentElement;
        if (lan === "English") {
            console.log("damon");
            root.style.setProperty("--flex_direction" , "row") 
            root.style.setProperty("--lang" , "inter") 
            root.style.setProperty("--direction" , "ltr") 
            root.style.setProperty("--text-align" , "left") 
        } else if (lan === "Persian") {
            console.log("amin");
           root.style.setProperty("--flex_direction" , "row-reverse") 
           root.style.setProperty("--lang" , "vazir") 
           root.style.setProperty("--direction" , "rtl") 
           root.style.setProperty("--text-align" , "right")
        }
  }
  
  render() {
    return (
      <div className="App">
      {/* <TopNavbar lang={this.state.lang} updateLang={this.updateLang} /> */}
      <Main lang={this.state.lang} updateLang={this.updateLang}/>
    </div>
    )
  }
}

export default App

