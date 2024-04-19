import UserInput from "./UserInput";

export default function UserInputs() {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput labelText="Initial investment" />
        <UserInput labelText="Annual investment" />
        <UserInput labelText="Expected return" />
        <UserInput labelText="Duration" />
      </div>
    </section>
  );
}
