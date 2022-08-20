import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ListTask from '../ListTask/ListTask';

export interface Props {
  tasks: Array<{
    id: string;
    status: boolean;
    body: string;
  }>;
  activeTask: Array<{
    id: string;
    status: boolean;
    body: string;
  }>;
}

function Navs({ tasks, activeTask }: Props) {
  const [key, setKey] = useState<string>('all');

  const completedTask = tasks.filter(
    (task: { status: boolean }) => task.status !== false
  );

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(eventKey: string | null) => {
        if (eventKey) {
          setKey(eventKey);
        }
      }}
      className="nav nav-tabs mb-4 pb-2"
    >
      <Tab eventKey="all" title="All">
        <ListTask tasks={tasks} />
      </Tab>
      <Tab eventKey="active" title="Active">
        <ListTask tasks={activeTask} />
      </Tab>
      <Tab eventKey="completed" title="Completed">
        <ListTask tasks={completedTask} />
      </Tab>
    </Tabs>
  );
}

export default Navs;
