import UserInput from "./UserInput";

export default function UserInputs(props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          value={props.userInput.initialInvestment}
          name="initialInvestment"
          labelText="Initial investment"
          onInputChange={props.onInputChange}
        />
        <UserInput
          value={props.userInput.annualInvestment}
          name="annualInvestment"
          labelText="Annual investment"
          onInputChange={props.onInputChange}
        />
        <UserInput
          value={props.userInput.expectedReturn}
          name="expectedReturn"
          labelText="Expected return"
          onInputChange={props.onInputChange}
        />
        <UserInput
          value={props.userInput.duration}
          name="duration"
          labelText="Duration"
          onInputChange={props.onInputChange}
        />
      </div>
    </section>
  );
}
