import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";

import MediaCard from "./MediaCard";

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
  color: #ead866;
 

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
    justify-content: center;
    margin: 1rem 0;
    width: 90%;

  input, button {
    width: 90%
    margin-top: 1rem;
  }
`;

const Input = styled.input`
  background-color: white;
  color: black;
  padding: 0.75rem 0.75rem;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;

  &:hover {
    background-color: #66d8ea;
    color: #EAD866;
  }
}
`;

function DatePick() {
  const [media, updateMedia] = useState("");
  const [date, updateDate] = useState(moment().format("YYYY-MM-DD"));
  const [dateInput, updateDateInput] = useState("");

  console.log(date);

  const apiKey = "lNC8oCJ2EiL15eHwhxfE41kjJoyciE1Pz6vQCyjD";

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true&date=${date}`
      )
      .then(res => updateMedia(res.data))
      .catch(err => console.log(err));
  }, [date]);

  function handleChange(e) {
    updateDateInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateDate(dateInput);
  }

  return (
    <div className="pickDate">
      <MediaCard media={media} />
      <Form onSubmit={handleSubmit}>
         <label htmlFor="dateInput">Date:</label>
        <Input
          type="date"
          id="date"
          value={dateInput}
          name="dateInput"
          onChange={handleChange}
        />
        <Button type="submit">Pick a Date!</Button>
      </Form>
    </div>
  );
}

export default DatePick;
