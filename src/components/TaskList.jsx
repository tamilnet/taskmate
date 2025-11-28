import { useState } from 'react';
import TaskCard from './TaskCard.jsx';
import BoxCard from './BoxCard.jsx';


const TaskList = () => {

  let [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  let [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }


  return (
    <>
    <h1>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)} className='toggle'>Toggle</button>
        {show &&
        tasks.map(task => (
          < TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
        ))}
      </ul>

      <BoxCard result="success">
        <p className="title">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
      </BoxCard>

      <BoxCard result="alert">
        <p className="title">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
      </BoxCard>




      </>
  )
}

export default TaskList
