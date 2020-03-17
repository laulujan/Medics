import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class dayPicker extends Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      isEmpty: true,
      isDisabled: false,
    };
    
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
    this.props.whenSelectDate(selectedDay);
  }

  render() {
    const { selectedDay, isDisabled, isEmpty } = this.state;
    return (
      <div>
        <p>
          {isEmpty && 'Selecciona una fecha'}
          {!isEmpty && !selectedDay && 'Fecha invalida'}
          {selectedDay && isDisabled && 'Fecha no disponible'}
          {selectedDay &&
            !isDisabled &&
            `Seleccionaste ${selectedDay.toLocaleDateString()}`}
        </p>
        <DayPickerInput
          value={selectedDay}
          onDayChange={this.handleDayChange}
          dayPickerProps={{
            selectedDays: selectedDay,
            disabledDays: {
              daysOfWeek: [0, 6],
              before: new Date()
            },
          }}
        />
      </div>
    );
  }
}