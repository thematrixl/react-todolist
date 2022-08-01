const Input = ({ toDoValue, handleToDoValue }) => {
  const hanleOnChange = (e) => {
    e.preventDefault();
    handleToDoValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={toDoValue} onChange={(e) => hanleOnChange(e)} />
    </div>
  );
};

export default Input;
