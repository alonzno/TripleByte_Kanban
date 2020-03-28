import { combineReducers } from 'redux';

import undoable, { distinctState } from 'redux-undo';

import {
	ADD_TODO,
	MOVE_TODO
} from './Actions';

function todos(state={0:[], 1:[], 2:[], 3:[]}, action) {
	switch(action.type) {
		case ADD_TODO:
			return Object.assign({}, 
								 state, 
								 {[action.cat]: [ ...state[action.cat], action.text ]});
		case MOVE_TODO:
			let fromList = state[action.fromCat];
			let text = fromList[action.index];
			return Object.assign({}, 
								 state, 
								 {[action.fromCat]: fromList.slice(0, action.index).concat(fromList.slice(action.index + 1))}, 
								 {[action.toCat]: [ ...state[action.toCat], text ]});
		default:
			return state;
	}
}

const undoableTodos = undoable(todos, {});

const todoApp = combineReducers({
	todos: undoableTodos,
});

export default todoApp;