import React from "react";
import DatePicker from "react-datepicker";

function EndDatePicker(props) {
    const {
      placeholder = "Date and time",
      selectedDateTime,
      isShowTime,
      onChange,
      endDate,
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
          minDate={endDate}
        //   onChange={console.log(onChange)}
        />
      </div>
    );
  }
  
  export default EndDatePicker;
