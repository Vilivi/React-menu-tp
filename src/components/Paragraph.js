const Paragraph = (props) => {

    return (
        <p className={props.index}>{props.text}</p>
    );
};

export default Paragraph;