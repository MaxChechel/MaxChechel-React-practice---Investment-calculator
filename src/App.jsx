import { useState } from "react";

import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import CalculationsTable from "./components/CalculationsTable";

function App() {
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
  }
  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onInputChange={handleUserInput} />
      <CalculationsTable userInput={userInput} />
    </>
  );
}

export default App;
