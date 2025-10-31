import { useState } from 'react';
import './App.css';

// function App() {

//   let [count, setCount] = useState(0);

//   function handleAdd(){
//     setCount(count => count + 1);
//     setCount(count => count + 1);
//     setCount(count => count + 1);

//   }

//   function handleSub(){
//     setCount(count - 1);
//   }

//   function handleReset(){
//     setCount(0);
//   }

//   return (

//     <div className="App">
//       <div className="box">
//         <p>{count}</p>
//         <button className='add' onClick={handleAdd}>ADD</button>
//         <button className='sub' onClick={handleSub}>SUB</button>
//         <button className='reset' onClick={handleReset}>RESET</button>
//         </div>
//     </div>

//   );
// }

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>
              {task.id} - {task.title}
            </span>
            <button className='delete'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}






export default App;
