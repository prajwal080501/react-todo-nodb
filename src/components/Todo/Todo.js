import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Todo.css";
import { useMediaQuery } from 'react-responsive'



const Todo = ({ text, todo, todos, setTodos }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id != todo.id))
    
  }

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed,
        };
      }
      return item;
    }))
  }
  return (
    <center>
      <div className="todo">
        <li className={`todo-item, ${todo.completed ? "completed" : ""}`}>
          {" "}
          <h4>{text}</h4>
        </li>
        <button onClick={completeHandler} className="complete-btn">Done</button>
        <button onClick={deleteHandler} className="delete-btn">Delete</button>
      </div>
    </center>
  );
};
export default Todo;
