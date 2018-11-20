import React, { Component } from 'react';
import EditableTimer from './editableTimer';

class EditableTimerLists extends Component {
  state = {  }
  render() { 
    return ( 
      <div id="timers">
        <EditableTimer
          title="Learn Project"
          project="Web Domination"
          elapsed="8986300"
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title="Learn Extreme Ironing"
          project="Web Domination"
          elapsed="3890985"
          runningSince={null}
          editFormOpen={false}
        />
      </div>
    );
  }
}
 
export default EditableTimerLists;