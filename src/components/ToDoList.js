const ToDoList = ({ dataToRender }) => {
  return (
    <div>
      My list
      <ul>
        {dataToRender.length &&
          dataToRender.map((t) => {
            return <li>{t}</li>;
          })}
      </ul>
    </div>
  );
};

export default ToDoList;
