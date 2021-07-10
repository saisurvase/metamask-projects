import React from "react";
import DatePicker from "react-datepicker";

function DateTimePicker(props) {
  const {
    placeholder = "Date and time",
    selectedDateTime,
    isShowTime,
    onChange,
    minDate,
  } = props;

  return (
    <div>
      <DatePicker
        placeholderText={placeholder}
        dateFormat="Pp"
        className="form-control"
        selected={(selectedDateTime && new Date(selectedDateTime)) || ""}
        showTimeSelect={isShowTime}
        onChange={onChange}
        minDate={new Date()}
      />
    </div>
  );
}

export default DateTimePicker;
