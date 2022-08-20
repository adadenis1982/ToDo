import * as actionTypes from '../actionTypes/tasksAT';

export interface TypeTask {
  type: string;
  payload: {
    id: string;
    status: boolean;
    body: string;
  };
}

export interface TypeAddTask {
  type: string;
  payload: {
    id: string;
    status: boolean;
    body: string;
  };
}

export interface TypeEditTaskStatus {
  type: string;
  payload: string;
}

export interface TypeDeleteTasks {
  type: string;
}

export const addTask = (task: {
  id: string;
  status: boolean;
  body: string;
}): TypeAddTask => {
  return {
    type: actionTypes.ADD_TASK,
    payload: task,
  };
};

export const editTaskStatus = (id: string): TypeEditTaskStatus => {
  return {
    type: actionTypes.EDIT_STATUS,
    payload: id,
  };
};

export const deleteTasks = (): TypeDeleteTasks => {
  return {
    type: actionTypes.REMOVE_TASKS,
  };
};

export type TaskAction =
  | TypeTask
  | TypeDeleteTasks
  | TypeAddTask
  | TypeEditTaskStatus;
