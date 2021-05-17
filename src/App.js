import './App.css';
import Items from './components/Items';
import Item from './components/Item';
import ÁddItemButton from './components/AddItemButton';
import AddItemButton from './components/AddItemButton';
import {useState} from 'react';

function App() {

  const[tasks, setTasks]  = useState([
    {
      id: 1,
      text: 'Apples',
      isBuy: false
    },
    {
      id: 2,
      text: 'Banana',
      isBuy: false
    },
    {
      id: 3,
      text: 'Milk',
      isBuy: true
    }
  ]);

  // function addItemHandler(task){
  //   console.log(task);
  //   console.log(tasks);

  //   //const newTask = {task.id, task.text, task.isBuy};
  //   setTasks([...tasks, task]);
  //   console.log(tasks);
  //   // item.id = 4;
  //   // item.text = 'Momo';
  //   // list.push(item);
  // }

  const addItemHandler = (task) => {
    console.log('baba');
    console.log(tasks);

    // const sampleTask = {
    //   id: 99, 
    //   text: "baba", 
    //   isBusy: false
    // };

   setTasks([...tasks, task]);
  }

  const removeItemHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h1> Grocessery List </h1>
      <Items items = {tasks}  onRemoveItem={removeItemHandler} /> 
      <AddItemButton onAdd={addItemHandler}/>
    </div>
  );
}

export default App;
