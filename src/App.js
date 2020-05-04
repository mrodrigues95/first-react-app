import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Marcus', age: 24 },
      { name: 'Jack', age: 30 },
      { name: 'John', age: 20 },
    ],
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'Marcus Rodrigues', age: 24 },
        { name: 'Jack', age: 30 },
        { name: 'John', age: 44 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
