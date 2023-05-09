import { Routes, Route, BrowserRouter , Navigate} from "react-router-dom"
import React, { Component } from 'react'
import About from './Component/About'
import Contact from './Component/Contact'
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Blog from "./Component/Blog"
import Project from "./Component/Project"
import Services from "./Component/Services"
import Post from "./Component/Post"


export class App extends Component {
  

  constructor(props){
    super(props)
    this.state={
      sagar:false,//false means not login.
    }
  }

loginhandler =()=>{
this.setState({sagar: !this.state.sagar});//it will true to false and false to true.
}


   
  render() {
    return (
        <BrowserRouter>
      <div>
      <Navbar login={this.loginhandler} status={this.state.sagar}></Navbar>
     <Routes>
     <Route path="/"   element={<Home/>}></Route>
     <Route path="/About"  element= {this.state.sagar === false ? (<Navigate to='/'/>):(<About/>)}></Route>{/* login first */}
     <Route path="/Contact"   element= {this.state.sagar === false ? (<Navigate to='/'/>):(<Contact/>)}></Route>
     <Route path="/Blog"   element= {this.state.sagar === false ? (<Navigate to='/'/>):(<Blog/>)}></Route>
     <Route path="/Project"  element= {this.state.sagar === false ? (<Navigate to='/'/>):(<Project/>)}></Route>
     <Route path="/Services"  element= {this.state.sagar === false ? (<Navigate to='/'/>):(<Services/>)}></Route>
     <Route path="/Post" element={this.state.sagar === false ? (<Navigate to='/'/>):(<Post/>)}></Route>
     <Route path="*" element=<h1>404 page not found!</h1>></Route>
  </Routes>
      </div>
        </BrowserRouter>
    )
  }
}

export default App










