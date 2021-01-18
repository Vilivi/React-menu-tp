const List = (props) => {

    return (
        <li 
        onClick= {() => props.callback(props.index)}
        className={props.selected ? "selected" : ""}
        >
            {props.text}
        </li>
    );
}

export default List;