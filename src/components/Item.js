import Button from './Button'
import { FaTimes } from 'react-icons/fa'

// To Remove double quote '''', press Ctr + z and then type text to be placed inside ''

function Item({item, onRemoveItem}) {

    const removeItem = () =>{

        console.log('remove item');
        console.log(item.id);

        // set Id to delete
        onRemoveItem(item.id);
    };



    return (
        <>
            {/* <div> {item.text} <Button text='Delete' item = {item} onRemoveItem={onRemoveItem}/></div> */}
            <div> {item.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={removeItem} item={item} /></div>
        </>
    );

}

export default Item;