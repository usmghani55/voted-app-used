import { useState } from "react";
import "./App.css";

function App() {
  const [votes, setVotes] = useState(0);
  const [yesVotes, setYesvotes] = useState(0);
  const 
  return (
    <div className="Main-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 >Voting App</h1>
      <br />
      <h2>Kiya ap is faisly sy mutafiq hain?</h2>
      <br />
      <br />
      <button className="no" onClick={() => setVotes(votes + 1)}> No {votes}</button>
      <br />
      <br />
      <button className="yes" onClick={() => setYesvotes(yesVotes + 1)}> Yes {yesVotes}</button>
    </div>
  );
}
export default App;
