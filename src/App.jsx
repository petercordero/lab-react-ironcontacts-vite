import "./App.css";
import contacts from "./contacts.json";
import ActorsList from "./components/ActorsList";
import ActorCard from "./components/ActorCard";
import AddRandom from "./components/AddRandom";
import { useState } from "react";

function App() {

const [actors, setActors] = useState(contacts.slice(0,5))

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <AddRandom/>
      <ActorsList contacts={actors}/>
    </div>
  );
}

export default App;
