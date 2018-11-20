import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min.js'
import TimersDashboard from './components/timersDashboard'

class App extends Component {
  render() {
    return (
      <TimersDashboard />
    );
  }
}

export default App;
