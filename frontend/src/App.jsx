import style from './App.module.css'
import { ToDoListContainer } from './components/ToDoListContainer/ToDoListContainer';

const App = () => {

  return (
    <div className={style.appContainer}>
      <ToDoListContainer />
    </div>
  );
}

export default App
