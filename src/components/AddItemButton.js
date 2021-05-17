import {useState} from 'react';
import uuid from 'react-uuid';

function AddItemButton( {onAdd}) {

    const [text, setText] = useState('');
    const [id, setId] = useState(uuid());
    const [isBuy, setIsBuy] = useState(false)

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
    };
    
    return (
        <form onSubmit={ addTask }>
            <br/>
             <label> Item: </label><input  type="text" value={text} placeholder='Add Text' onChange={(e) => setText(e.target.value)}/>
             <br/>
             <input type="hidden" name="isBuy" />
            
            <br/>
            <input type="submit" value="Add" />
        </form>
    );
}

export default AddItemButton;