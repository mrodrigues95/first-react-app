import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <Person name="Marcus" age="24" />
        <Person name="Jack" age="30" >My Hobbies: Racing</Person>
        <Person name="John" age="20" />
      </div>
    );
  }
}

export default App;
