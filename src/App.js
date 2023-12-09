import React, { useState } from 'react';
import './App.css';
import { scenarios } from './Script';

function App() {
  const [currentScenario, setCurrentScenario] = useState(scenarios[0]);

  const handleChoice = (nextScenarioId) => {
    const nextScenario = scenarios.find(scenario => scenario.id === nextScenarioId);
    setCurrentScenario(nextScenario);
  };

  return (
    <div className="App">
      <div className='App-header'>
      <h2>Developing Dungeon</h2>
        <div className='Background-Screen'>
      <img src={currentScenario.image} alt="Current Scenario" />
      </div>
      <div className='container'>
        <p>{currentScenario.text}</p>
      <div className="btn-grid">
        {currentScenario.choices.map(choice => (
          <button className="btn" key={choice.nextId} onClick={() => handleChoice(choice.nextId)}>
            {choice.text}
          </button>
        ))}
      </div>
      </div>

      </div>
    </div>
  );
}

export default App;
