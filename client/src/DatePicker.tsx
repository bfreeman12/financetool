import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function CustomDatePicker({ label, disableFutureDates = false }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}${month}${day}`;
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <InputGroup>
        <FormControl
          value={formatDate(startDate)}
          onChange={(e) => {
            // Optional: Handle manual date input if required
          }}
        />
        <InputGroup>
          <Button variant="outline-secondary">
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              customInput={<React.Fragment />}
              maxDate={disableFutureDates ? new Date() : null}
            />
          </Button>
        </InputGroup>
      </InputGroup>
    </div>
  );
}

export default CustomDatePicker;
