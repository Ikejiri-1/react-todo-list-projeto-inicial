import { useEffect, useState } from "react";
import ToDoContext from "./ToDoContext";

const ToDos = "toDos";
export function ToDoProvider({ children }) {
  const savedToDo = localStorage.getItem(ToDos);

  const [toDos, setToDos] = useState(savedToDo ? JSON.parse(savedToDo) : []);

  useEffect(() => {
    localStorage.setItem(ToDos, JSON.stringify(toDos));
  }, [toDos]);
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
