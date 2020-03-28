import { createStore } from 'redux';
import todoApp from './Reducers';

const store = createStore(todoApp);

export default store;