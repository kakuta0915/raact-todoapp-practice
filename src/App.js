import { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';




function App() {

  const [taskList, setTaskList] = useState([]);

  //taskList 状態を管理する関数

  //setTaskList タスクリストの中身を変更する関数

  //taskListにタスクを追加したいときにsetTaskListを使えば、setTaskの中身も更新される

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
