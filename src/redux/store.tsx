import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { taskReducer } from './reducer/taskReducer';
import { StoreState } from './types/types';
import { TaskAction } from './actionCreators/tasksAC';

export const store = createStore<StoreState, TaskAction, any, any>(
  taskReducer,
  composeWithDevTools()
);
