/* eslint-disable react/no-array-index-key */
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todo, setTodo] = useState("");
  const [todoarray, setTodoarray] = useState([]);

  const getTodo = async () => {
    await axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/todolist`
      )
      .then((res) => {
        setTodoarray(res.data);
      });
  };

  const addTodo = async () => {
    await axios
      .post(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/todolist`,
        { todo }
      )
      .then((response) => response.data);
    setTodo("");
    getTodo();
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/todolist/${id}`
      )
      .then((res) => res.data);
    getTodo();
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <h1>Liste de tâches</h1>
      <form>
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add" type="button" onClick={addTodo}>
          Ajouter
        </button>
      </form>
      <div className="divUl">
        <ul>
          {todoarray &&
            todoarray.map((todol) => {
              return (
                <div key={todol.id} className="listEl">
                  <li>- {todol.todo}</li>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => {
                      deleteTodo(todol.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default App;
