import Item from './Item';

function Items({ items, onRemoveItem, onBuyItem }) {
    return (
        <>
            {
                items.map((i) => <Item key={i.id} item={i} onRemoveItem={onRemoveItem} onBuyItem={onBuyItem} />  )
            }
        </>


    );
}

export default Items;
