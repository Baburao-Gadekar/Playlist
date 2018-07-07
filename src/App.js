import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Agreegrate extends Component{
  render(){
    return (
        <div style={{width:"40%", display:"inline-block"}}>
          <h2>Normal text</h2>
          </div>
    );
  }
}

  class Filter extends Component{
      render(){
        return (
            <div>
              <img/>
              <input type="text"></input>
              <input type="button" value="Filter"></input>
              </div>
        );
      }
  }

  class Playlist extends Component{
    render(){
      return (
          <div style={{display:"inline-block" , width:"20%",borderColor:"black"}}>
            <img/>
            <h3 style={{ background: "#3399ff" , padding: "1px"}}>PlayList</h3>            
          {  React.createElement("ul", null,
          React.createElement("li", null, "Song 1"),
          React.createElement("li", null, "Song 2"),
          React.createElement("li", null, "Song 3")          
        ) }
            </div>
      );
    }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ background: "#11a7e2"}}>Title</h1>
        <Agreegrate/>
        <Agreegrate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
