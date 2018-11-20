import React, { Component } from 'react';
import TimerForm from './timerForm';

class ToggleableTimerForm extends Component {
  state = {  }
  render() { 
    if(this.props.isOpen) {
      return ( 
        <TimerForm />
      );
    }else {
      return (
        <div className="ui basic content center aligned segment">
          <button className="ui basic button icon">
            <i className="plus icon"></i>
          </button>
        </div>
      );
    }
  }
}
 
export default ToggleableTimerForm;