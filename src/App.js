import React, {useState} from 'react';
import logo from './logo.svg';

import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [todos, setTodos] = useState({0: ["Any", "thing"], 1: ["Any", "thing"], 2: ["Any", "thing"], 3: ["Any", "thing"]})

  function addTodo(cat, text) {
    let curr_todos = todos[cat];

    let new_obj = Object.assign({}, todos, {[cat]: [...curr_todos, text]});
    //todos[cat] = [...curr_todos, text];

    setTodos(new_obj);
    //setTodos(todos);

    console.log(todos);
  }

  function moveTodo(from_cat, to_cat, text) {
    let index = todos[from_cat].indexOf(text);
    let from_todos = todos[from_cat];
    let to_todos = todos[to_cat];

    from_todos.splice(index, 1);
    to_todos.push(text);


    let new_obj = Object.assign({}, todos, {[from_cat]: from_todos}, 
                                           {[to_cat]: to_todos});
    setTodos(new_obj);
  }

  return (
    <div className="App">
      <Dashboard cb={addTodo} todos={todos} mt={moveTodo}/>
    </div>
  );
}

export default App;
