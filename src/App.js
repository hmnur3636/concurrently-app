{
  "author" ; "William Monin"
}

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
    <p></p>
    <img id="image" class="center" src="C:\Users\billj\OneDrive\Pictures\Zoom.jfif" alt="Troy Baker and His Many Roles"></img>
    <div id="img-caption">
    <p></p>
  </div>
  </div>
  <h1>Users</h1>
  {users.map((user) => (
    <p key ={user.id}>{user.name}</p>
  ))}
  </header>
    </div>
    )
  
};


export default App;
