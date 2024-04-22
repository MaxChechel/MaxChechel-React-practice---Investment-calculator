export default function UserInput(props) {
  function handleChange(event) {
    props.onInputChange(event);
  }
  return (
    <div>
      <label>{props.labelText}</label>
      <input name={props.name} type="number" onChange={handleChange} />
    </div>
  );
}
