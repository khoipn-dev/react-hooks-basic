import React from 'react';
import './App.scss';
import Post from "./useEffect/Post";
import Clock from "./useEffect/Clock";
import ClockHooks from "./customHooks/ClockHooks";

function App() {
  return (
    <div className="App">
      <Post />
      {/*<Clock />*/}
      <ClockHooks />
    </div>
  );
}

export default App;
