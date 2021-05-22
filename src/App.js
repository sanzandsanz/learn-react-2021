import './App.css';
import Items from './components/Items';
import Item from './components/Item';
import ÁddItemButton from './components/AddItemButton';
import AddItemButton from './components/AddItemButton';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [tasks, setTasks] = useState([
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

  const buyItemHandler = (id) => {
    const selectedTask = tasks.filter((task) => task.id == id)[0];
    selectedTask.isBuy = !selectedTask.isBuy
    setTasks([...tasks]);
  }

  return (
    // <div className="main">
    //   <h1> Grocessery List </h1>
    //   <div class="container">
    //     <AddItemButton onAdd={addItemHandler}/>
    //     <div class="items">
    //       <Items items = {tasks}  onRemoveItem={removeItemHandler} onBuyItem={buyItemHandler}/> 
    //     </div>
    //   </div>
    // </div>
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/additem">Add Item </Link></li>
          </ul>
        </nav>

        <div className="main">
          <div class="container">
            <Switch>
              <Route path="/additem">
                <AddItemButton onAdd={addItemHandler} />
              </Route>
              <Route path="/">
                <h1> Grocessery List </h1>
                <div className='items'>
                  <Items items={tasks} onRemoveItem={removeItemHandler} onBuyItem={buyItemHandler} />
                </div>
              </Route>
            </Switch>
          </div>
        </div>


      </div>
    </Router >
  );
}

export default App;
