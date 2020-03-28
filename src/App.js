import React, {useState} from 'react';
import logo from './logo.svg';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import { useSelector, useDispatch } from 'react-redux';

import { ActionCreators } from 'redux-undo';

import Dashboard from './Dashboard';
import './App.css';

const UndoRedo = (canUndo, canRedo, onUndo, onRedo) => {
  return(
    <Paper>
      <Button onClick={onUndo} disabled={!canUndo} variant="contained">
        Undo
      </Button>
      <Button onClick={onRedo} disabled={!canRedo} variant="contained">
        Redo
      </Button>
    </Paper>
  );
}

function App() {

  let todos = useSelector(state => state.todos);
  let dispatch = useDispatch();

  return (
      <div className="App">
        <Dashboard/>
        { UndoRedo(todos.past.length > 0, todos.future.length > 0, () => dispatch(ActionCreators.undo()), () => dispatch(ActionCreators.redo())) }
      </div>
  );
}

export default App;
