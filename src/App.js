import "./App.css";
import Forms from "./components/Form/Forms";
import TodoList from "./components/TodoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'


function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  //states
  const [inputText, setInputText] = useState(""); //used to set input
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  

  //useeffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //functions;

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.fiiter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.fiiter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <center>
      <div className="App">
        <h1 className="app-title">Remindo</h1>
        <Forms
          status={status}
          setStatus={setStatus}
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </center>
  );
}

export default App;
