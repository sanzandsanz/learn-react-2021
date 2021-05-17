function Button(props){

    const deleteItemHandler = () => {
        props.onRemoveItem(props.item.id);
    };

    return <button onClick={deleteItemHandler}> { props.text} </button>
}

export default Button;