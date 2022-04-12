import React, {useId, useState, useTransition} from 'react';
import './App.css';
import CountDown from "./components/CountDown";

function App() {
  return (
      <div>
          <CountDown
              timeTillDate={new Date()}
              timeFormat="MM DD YYYY, h:mm a"
          />,
      </div>
  );
}

export default App;
