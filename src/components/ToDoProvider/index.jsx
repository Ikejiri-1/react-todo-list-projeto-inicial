import { useState } from "react";
import ToDoContext from "./ToDoContext";

export function ToDoProvider({ children }) {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);

  function addToDo(formData) {
    const description = formData.get("description");
    setToDos((prevState) => {
      const newToDo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString("pt-BR"),
      };
      return [...prevState, newToDo];
    });
    console.log("precisamos adicionar uma nova tarefa na lista");
  }

  function removeToDo(toDo) {
    setToDos((prevState) => {
      return prevState.filter((t) => t.id !== toDo.id);
    });
  }

  function toggleToDoCompleted(toDo) {
    setToDos((prevState) => {
      return prevState.map((t) => {
        if (t.id === toDo.id)
          return {
            ...t,
            completed: !t.completed,
          };
        return t;
      });
    });
  }
  return (
    <ToDoContext value={{ toDos, addToDo, removeToDo, toggleToDoCompleted }}>
      {children}
    </ToDoContext>
  );
}
