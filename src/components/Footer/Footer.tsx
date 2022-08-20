import { useAppDispatch } from '../../redux/hooks/hooks';
import * as actions from '../../redux/actionCreators/tasksAC';

export interface Props {
  activeTask: Array<{
    id: string;
    status: boolean;
    body: string;
  }>;
}

function Footer({ activeTask }: Props) {
  const dispatch = useAppDispatch();

  const handleRemoveCompleted = () => {
    dispatch(actions.deleteTasks());
  };

  return (
    <div className="d-flex justify-content-end align-items-center mb-4 me-5">
      <div className="form-outline flex-fill ms-5">
        <h6>{activeTask.length} items left</h6>
      </div>
      <button
        type="submit"
        className="btn btn-info ms-2 align-self-start"
        onClick={handleRemoveCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}

export default Footer;
