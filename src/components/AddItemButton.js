import {useState} from 'react';
import uuid from 'react-uuid';
import { useHistory } from "react-router-dom";

function AddItemButton( {onAdd}) {

    const [text, setText] = useState('');
    const [id, setId] = useState(uuid());
    const [isBuy, setIsBuy] = useState(false)
    const history = useHistory();

    const handleRoute = () =>{ 
        history.push("/");
      }

    const addTask = (e) => {
        e.preventDefault();
       
        if(!text){
            alert('please add a task');
            return;
        }

        const newTask = { id: id, text: text, isBuy: false}
        //onAdd([id,text, false]);
        onAdd(newTask);

        setId(uuid()); // Create new unique Id
        setText(''); // Reset text value to empty;

        handleRoute();
    };
    
    return (
        <form onSubmit={ addTask }>
            <br/>
             <label> Item Name </label><input  type="text" value={text} placeholder='Add Text' onChange={(e) => setText(e.target.value)}/>
             <br/>
             <input type="hidden" name="isBuy" />
            
            <br/>
            <input type="submit" value="Add" />
        </form>
    );
}

export default AddItemButton;