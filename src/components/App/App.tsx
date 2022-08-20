import { useAppSelector } from '../../redux/hooks/hooks';
import './App.css';
import Form from '../Form/Form';
import Navs from '../Navs/Navs';
import Footer from '../Footer/Footer';

function App() {
  const tasks = useAppSelector((state) => state.tasks);

  const activeTask = tasks.filter(
    (task: { status: boolean }) => task.status === false
  );

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <Form />
                <Navs tasks={tasks} activeTask={activeTask} />
              </div>
              <Footer activeTask={activeTask} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
