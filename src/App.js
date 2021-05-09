import React from "react";
import User from "./components/User";
import Follower from "./components/Follower";
import "./styles.scss";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Card</h1>
        <User />
        <Follower />
      </header>
    </div>
  );
}

export default App;
