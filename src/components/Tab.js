import List from './List';
import React, {useState} from 'react';

const Tab = (props) => {

    const changeIndexCallback = (newIndex) => {
        setSelected(newIndex)
        props.callback(newIndex)};
    const[selectedIndex, setSelected] = useState(0);

    const liArray = ["Onglet 1", "Onglet 2", "Onglet 3", "Onglet 4"];
    const newLiArray = liArray.map((value, index) => <List 
        text={value} 
        index={index}
        callback={changeIndexCallback}
        selected={index === selectedIndex}
    />);

    return (
            <ul 
            className={props.name} >
                {newLiArray}
            </ul>
    );
}

export default Tab;