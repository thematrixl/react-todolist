const AddToDoList = ({
  handleSetTodos,
  allToDo,
  singletoDo,
  setSingleToDo,
}) => {
  const handleAddToDos = () => {
    const newToDo = [...allToDo, singletoDo];
    handleSetTodos(newToDo);
    setSingleToDo("");
  };
  return (
    <div>
      <button onClick={handleAddToDos}>Add to do</button>
    </div>
  );
};

export default AddToDoList;
