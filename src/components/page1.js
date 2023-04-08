import React, { useState } from "react";
import styled from "styled-components";

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #006f8b;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Page1 = ({ setTravelData }) => {
  const [transport, setTransport] = useState("");
  const [distance, setDistance] = useState("");

  const handleTransportChange = (event) => {
    setTransport(event.target.value);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTravelData({ transport, distance });
  };

  return (
    <Container>
      <Header>Respondent Travel Profile</Header>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            What is your most frequently used means of travel from your home to
            work location?
          </Label>
          <RadioGroup>
            <RadioInput
              type="radio"
              name="transport"
              value="bus"
              onChange={handleTransportChange}
            />
            <RadioLabel>Bus</RadioLabel>
            <RadioInput
              type="radio"
              name="transport"
              value="metro"
              onChange={handleTransportChange}
            />
            <RadioLabel>Metro</RadioLabel>
            <RadioInput
              type="radio"
              name="transport"
              value="two-wheeler"
              onChange={handleTransportChange}
            />
            <RadioLabel>Own Two-wheeler</RadioLabel>
            <RadioInput
              type="radio"
              name="transport"
              value="car"
              onChange={handleTransportChange}
            />
            <RadioLabel>Own Car</RadioLabel>
            <RadioInput
              type="radio"
              name="transport"
              value="walk-bicycle"
              onChange={handleTransportChange}
            />
            <RadioLabel>Walk / Bicycle</RadioLabel>
            <RadioInput
              type="radio"
              name="transport"
              value="auto"
              onChange={handleTransportChange}
            />
            <RadioLabel>Auto</RadioLabel>
            <RadioInput
              type="radio"
              name="transport"
              value="app-cab"
              onChange={handleTransportChange}
            />
            <RadioLabel>
              App based ride hailing cab services including Ola / Uber
            </RadioLabel>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>
            What is the total distance between your home and workplace?
          </Label>
          <RadioGroup>
            <RadioInput
              type="radio"
              name="distance"
              value="<5km"
              onChange={handleDistanceChange}
            />
            <RadioLabel>&lt; 5 km</RadioLabel>
            <RadioInput
              type="radio"
              name="distance"
              value="5-10km"
              onChange={handleDistanceChange}
            />
            <RadioLabel>5 - 10 km</RadioLabel>
            <RadioInput
              type="radio"
              name="distance"
              value="10-15km"
              onChange={handleDistanceChange}
            />
            <RadioLabel>10 - 15 km</RadioLabel>
            <RadioInput
              type="radio"
              name="distance"
              value="15-20km"
              onChange={handleDistanceChange}
            />
            <RadioLabel>15 - 20 km</RadioLabel>
            <RadioInput
              type="radio"
              name="distance"
              value="20-25km"
              onChange={handleDistanceChange}
            />
            <RadioLabel>20 - 25 km</RadioLabel>
            <RadioInput
              type="radio"
              name="distance"
              value=">25km"
              onChange={handleDistanceChange}
            />
            <RadioLabel>&gt; 25 km</RadioLabel>
          </RadioGroup>
        </FormGroup>
        <ButtonContainer>
          <SubmitButton type="submit">Next</SubmitButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Page1;
