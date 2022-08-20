export interface Props {
  task: {
    id: string;
    status: boolean;
    body: string;
  };
  taskStatus(arg0: string): void;
}

function Task({ task, taskStatus }: Props) {
  return (
    <li
      role="presentation"
      className={
        task.status
          ? 'list-group-item d-flex align-items-center border-0 mb-2 rounded text-decoration-line-through opacity-25'
          : 'list-group-item d-flex align-items-center border-0 mb-2 rounded'
      }
      style={{ backgroundColor: '#f4f6f7' }}
    >
      <input
        className="form-check-input me-2"
        type="checkbox"
        onChange={() => taskStatus(task.id)}
        checked={task.status}
        value=""
        aria-label="..."
        data-testid="input-checkbox"
      />
      {task.body}
    </li>
  );
}

export default Task;
