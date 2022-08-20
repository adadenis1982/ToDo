import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import * as actions from '../../redux/actionCreators/tasksAC';
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const inputValue = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [newTodo, setNewTodo] = useState<string>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    inputValue.current.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleCreateTask = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!newTodo) {
      return false;
    }

    dispatch(actions.addTask({ status: false, body: newTodo, id: uuidv4() }));
    setNewTodo('');
  };

  return (
    <form className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input
          type="text"
          ref={inputValue}
          value={newTodo}
          className="form-control"
          placeholder="New task..."
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-info ms-2 align-self-start"
        disabled={newTodo.length === 0}
        onClick={handleCreateTask}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
