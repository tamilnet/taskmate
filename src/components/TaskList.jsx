import { useState } from 'react';



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
          <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
            <span>
              {task.id} - {task.title}
            </span>
            <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
          </li>
        ))}
      </ul>
      </>
  )
}

export default TaskList
