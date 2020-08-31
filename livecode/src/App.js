import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,  NavLink, Redirect, } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User=(params)=>{
  return(
    <h1>Welcome {params.username}</h1>
  )
}
class App extends Component {
  state={
    Loggedin:false
  }

  handleClick=()=>{
    this.setState(prevState =>({
      Loggedin: !prevState.Loggedin
    }))
  }
  render() {
    return (
      <Router>

        <div className="App">
         <ul>
         <li>
         <NavLink  exact activeStyle={{color:'yellow'}} to="/"  >Home</NavLink>
         </li>
        
        <li><NavLink  exact activeStyle={{color:'yellow'}} to="/about"  >About</NavLink></li>
        <li> <NavLink  exact activeStyle={{color:'yellow'}}  to="/user/chetan" >user chetan</NavLink></li>
</ul>
          <input type='button' value={this.state.Loggedin? "Logout" : "Login"} onClick= {this.handleClick}></input>


          <Route path="/"  exact render={() => { return <h1>Welcome home</h1> }}></Route>
          <Route path="/about" exact  render={() => { return <h1>Welcome about</h1> }}></Route>
          <Route path="/user/:username" exact render={({match})=> {return(
            this.state.Loggedin ? (<User username={match.params.username}></User>): (<Redirect to="/"></Redirect> ) 

          )}}>
          </Route>
          

        

        </div>
      </Router>
    )
  }
}



export default App;
