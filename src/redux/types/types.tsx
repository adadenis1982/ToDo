import { store } from '../store';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export interface StoreState {
  tasks: Array<{
    id: string;
    status: boolean;
    body: string;
  }>;
}
