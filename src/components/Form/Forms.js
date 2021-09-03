import React from "react";
import "./Forms.css";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const inputTextHandler = (event) => {
    console.log(event);
    setInputText(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };


  const statusHandler = (event) => {
    console.log(event);
  }



  return (
    <center>
      <form className="form">
        <input
          value={inputText}
          onChange={ inputTextHandler}
          type="text"
          class="todo-input"
          placeholder="Enter a todo"
        />
        <button onClick={submitTodoHandler} class="todo-button" type="Submit">
          Add Todo
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </center>
  );
};
export default Form;
