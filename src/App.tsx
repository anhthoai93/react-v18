import React, {useId, useState, useTransition} from 'react';
import './App.css';
import CountDown from "./components/CountDown";

function App() {
  return (
      <div>
          <h1>Welcome to the board</h1>
          <CountDown
              timeTillDate={new Date()}
              timeFormat="MM DD YYYY, h:mm a"
          />,
      </div>
  );
}

export default App;
