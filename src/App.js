import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  // Array destructuring.
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Marcus', age: 24 },
      { name: 'Jack', age: 30 },
      { name: 'John', age: 20 },
    ],
    otherState: 'Some other value...',
  });

  const[otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Marcus Rodrigues', age: 24 },
        { name: 'Jack', age: 30 },
        { name: 'John', age: 44 },
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
