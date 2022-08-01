import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Input from "./components/Input";
import AddToDoList from "./components/AddToDo";
import "./App.css";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  console.log("todoleo", toDos);

  return (
    <div className="App">
      <div>
        <Input toDoValue={toDo} handleToDoValue={setTodo} />
        <AddToDoList
          allToDo={toDos}
          handleSetTodos={setTodos}
          singletoDo={toDo}
          setSingleToDo={setTodo}
        />
      </div>
      <div>
        <ToDoList dataToRender={toDos} />
      </div>
    </div>
  );
}

export default App;
