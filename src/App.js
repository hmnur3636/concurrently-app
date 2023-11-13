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
    <img id="image" class="center" src="https://drive.google.com/uc?export=view&id=1bDdoLrKDvqQ8q3-mUG8ke1UQgH88D0FO"
     alt="Dungeon room 1"></img>
  </div>
  </header>
    </div>
    )
  
};


export default App;
