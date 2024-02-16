import React, { useState } from 'react';
import data from './data';
import List from './List';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);

  const clearAllBirthdays = () => {
    setPeople([]);
  };

  return (
    <div className="App">
      <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people}/>
          <button onClick={clearAllBirthdays}>Clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
