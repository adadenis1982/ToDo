import {
  TaskAction,
  TypeAddTask,
  TypeEditTaskStatus,
} from '../actionCreators/tasksAC';
import { StoreState } from '../types/types';
import { ADD_TASK, REMOVE_TASKS, EDIT_STATUS } from '../actionTypes/tasksAT';

export const taskReducer = (
  state: StoreState = { tasks: [] },
  action: TaskAction
): StoreState => {
  switch (action.type) {
    case ADD_TASK:
      const data = action as TypeAddTask;
      return { ...state, tasks: [...state.tasks, data.payload] };
    case EDIT_STATUS:
      const id = action as TypeEditTaskStatus;
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === id.payload) {
            task.status = !task.status;
          }
          return task;
        }),
      };
    case REMOVE_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.status !== true),
      };
    default:
      return state;
  }
};
