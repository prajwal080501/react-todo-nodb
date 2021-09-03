import React from "react";
import Todo from "../Todo/Todo";
import { useMediaQuery } from 'react-responsive'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div className="todo-container">
          <ul className="todo-list">    
              {filteredTodos.map(todo => (
                  <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} id={todo.id}/>
              ))}
      </ul>
    </div>
  );
};
export default TodoList;
