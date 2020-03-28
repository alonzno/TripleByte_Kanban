export const ADD_TODO = 'ADD_TODO';
export const MOVE_TODO = 'MOVE_TODO';

export function addTodo(cat, text) {
	return { type: ADD_TODO, cat, text };
}

export function moveTodo(fromCat, toCat, index) {
	return { type: MOVE_TODO, fromCat, toCat, index };
}