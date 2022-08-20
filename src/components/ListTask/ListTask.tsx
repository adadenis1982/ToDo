import { useAppDispatch } from '../../redux/hooks/hooks';
import Task from '../Task/Task';
import * as actions from '../../redux/actionCreators/tasksAC';
import { v4 as uuidv4 } from 'uuid';

export interface Props {
  tasks: Array<{
    id: string;
    status: boolean;
    body: string;
  }>;
}

function ListTask({ tasks }: Props) {
  const dispatch = useAppDispatch();

  const taskStatus = (id: string) => {
    dispatch(actions.editTaskStatus(id));
  };

  return (
    <div className="tab-content" id="ex1-content">
      <div
        className="tab-pane fade show active"
        id="ex1-tabs-1"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        <ul className="list-group mb-0">
          {tasks.map((task: { id: string; status: boolean; body: string }) => (
            <Task key={uuidv4()} task={task} taskStatus={taskStatus} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListTask;
