import { useEffect, useState } from "react";
import "./App.css";
import logo from './logo.svg';

function App() {
  const [users, setUsers] = useState ([]);

  useEffect(() => {
    fetch('/api/users')
    .then((res) => res.json())
    .then ((data) => setUsers(data));
}, []);

  return (
    
    <div className="App">
      
  <header className="App-header">
  <div id="img-div" class="image-housing">
main
    <h1>Game Name</h1>
    <img id="image" class="center" 
    src="https://drive.google.com/uc?
    export=view&id=1bDdoLrKDvqQ8q3-mUG8ke1UQgH88D0FO"
     alt="Dungeon room 1"></img>
  </div>
  <div class="container">
        <div id="text">
          <p>You wake up at the gates of a dungeon. The last thing you remember is that 
            you were sailing when suddenly a dangerous storm occurred. 
            The storm tore apart your ship and everything went black. 
            Looking around the dungeon entrance you see a note left on the floor in front of you. 
            You see some chains, bones, and weapons on the walls. 
            There is also a door that is open and light floods out from it. 
            Going through the door seems to be your 
            only way forward as going out leads to the beach you arrived on. 
            What do you want to do? 
          </p>
          </div>
        <div id="button-options" class="btn-grid">
        <button type="button" class="btn btn-option1">Option 1</button>
        <button type="button" class="btn btn-option2">Option 2</button>
        <button type="button" class="btn btn-option3">Option 3</button>
        <button type="button" class="btn btn-option4">Option 4</button>
        </div>
        </div>
  </header>
  </div>
    )
    
};


export default App;
