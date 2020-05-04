import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Marcus', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Marcus', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Marcus!')}
            changed={this.nameChangedHandler}
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

// ------- REACT HOOKS APPROACH
// const app = (props) => {
//   // Array destructuring.
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Marcus', age: 24 },
//       { name: 'Jack', age: 30 },
//       { name: 'John', age: 20 },
//     ],
//     otherState: 'Some other value...',
//   });

//   const[otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Marcus Rodrigues', age: 24 },
//         { name: 'Jack', age: 30 },
//         { name: 'John', age: 44 },
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App.</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default app;
