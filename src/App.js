import React from 'react';
import './App.scss';
import Post from "./useEffect/Post";
import Clock from "./useEffect/Clock";
import ClockHooks from "./customHooks/ClockHooks";
import Counter from "./React.memo/Counter";

function App() {
  return (
    <div className="App">
      {/*<Post />*/}
      {/*<Clock />*/}
      {/*<ClockHooks />*/}
      <Counter />
    </div>
  );
}

export default App;
