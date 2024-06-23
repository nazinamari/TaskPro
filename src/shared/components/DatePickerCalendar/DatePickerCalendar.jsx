import DatePicker from 'react-datepicker';
import './DatePickerCalendar.module.css';

export default function DatePickerCalendar({ setDeadline, deadline }) {
  return (
    <DatePicker
      id="deadline"
      selected={deadline}
      onChange={date => setDeadline(date)}
      required
      shouldCloseOnSelect={false}
      showPopperArrow={false}
      dayClassName={date => {
        if (date.getDate() > 23) {
          return 'prevMonth';
        }
      }}
      fixedHeight
    />
  );
}
