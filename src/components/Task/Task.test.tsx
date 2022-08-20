import { render, screen } from '@testing-library/react';
import Task from '../Task/Task';

test('renders Task', () => {
  render(
    <Task
      task={{
        id: '',
        status: false,
        body: 'test',
      }}
      taskStatus={function (arg0: string): void {
        throw new Error('Function not implemented.');
      }}
    />
  );

  const listItems = screen.getByRole('presentation');
  const inputCheckbox = screen.getByTestId('input-checkbox');
  expect(listItems).toHaveAttribute('role', 'presentation');
  expect(inputCheckbox).not.toBeChecked();
});
