import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [newDate, setNewDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1>Digital Clock</h1>
        <p className="time-display">
          {newDate.toLocaleTimeString()}
        </p>
        <p className="date-display">
          {newDate.toLocaleDateString(undefined, { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    </div>
  );
};

export default App;