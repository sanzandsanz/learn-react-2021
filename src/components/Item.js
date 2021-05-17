import Button from './Button'
import { FaTimes, FaCheck } from 'react-icons/fa'


// To Remove double quote '''', press Ctr + z and then type text to be placed inside ''

function Item({item, onRemoveItem, onBuyItem}) {

    const removeItem = () =>{

        console.log('remove item');
        console.log(item.id);

        // set Id to delete
        onRemoveItem(item.id);
    };


    const buyItem = () => {
       console.log(item);
       //item.isBuy = true;
       onBuyItem(item.id);
    }



    return (
        <>
            {/* <div> {item.text} <Button text='Delete' item = {item} onRemoveItem={onRemoveItem}/></div> */}
            <div className={item.isBuy ? "item isBuy" : "item"} > {item.text} 
                <FaTimes className="icon" style={{color: 'red', cursor: 'pointer'}} onClick={removeItem} item={item} />
                <FaCheck className="check" onClick={buyItem}  />
            </div>
        </>
    );

}

export default Item;