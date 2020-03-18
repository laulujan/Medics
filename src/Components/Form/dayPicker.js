import React, {Component} from 'react';
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';

export default class dayPicker extends Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined
    };
    
  }

  handleDayChange(selectedDay, modifiers = {}, dayPickerInput) {
    if (modifiers.disabled) {
      return;
    }
    this.setState({
      selectedDay: modifiers.selected ? undefined : selectedDay,
    });
 
    this.props.whenSelectDate(selectedDay);
  }

  render() {
    const { selectedDay } = this.state;
    const disabledDays = [
      {daysOfWeek: [0, 6]},
      {before: new Date()}
    ];
    return (
      
      <div>
        <DayPicker
          onDayClick={this.handleDayChange}
          disabledDays={disabledDays}
          selectedDays={selectedDay}
 
        />
      </div>
    );
  }
}