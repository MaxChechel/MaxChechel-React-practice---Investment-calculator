import { useState } from "react";

import UserInput from "./UserInput";

export default function UserInputs() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(event) {
    const value = parseFloat(event.target.value);
    const name = event.target.name;

    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [name]: value };
    });
    console.log(userInput);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          name="initialInvestment"
          labelText="Initial investment"
          onInputChange={handleUserInput}
        />
        <UserInput
          name="annualInvestment"
          labelText="Annual investment"
          onInputChange={handleUserInput}
        />
        <UserInput
          name="expectedReturn"
          labelText="Expected return"
          onInputChange={handleUserInput}
        />
        <UserInput
          name="duration"
          labelText="Duration"
          onInputChange={handleUserInput}
        />
      </div>
    </section>
  );
}
