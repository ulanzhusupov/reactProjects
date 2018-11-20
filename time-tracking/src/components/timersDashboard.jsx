import React, { Component } from 'react';
import EditableTimerList from './editableTimerLists';
import ToggleableTimerForm from './toggleableTimerForm';

class TimersDashboard extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList />
          <ToggleableTimerForm
          isOpen={true}
          />
        </div>
      </div>
    );
  }
}
 
export default TimersDashboard;