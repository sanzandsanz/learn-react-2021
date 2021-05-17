import Item from './Item';

function Items({ items, onRemoveItem }) {
    return (
        <>
            {
                items.map((i) => <Item key={i.id} item={i} onRemoveItem={onRemoveItem} />  )
            }
        </>


    );
}

export default Items;
