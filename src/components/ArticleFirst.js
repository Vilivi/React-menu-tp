import Paragraph from './Paragraph';

const FirstArticle = (props) => {

    const paragraphArray1 = ["Art 1: Je suis le premier paragraphe.", "Moi, le second", "Et moi le troisième", "Quatre paragraphes seront suffisant"];
    const paragraphOfArticle = paragraphArray1.map((value, index) => 
        <Paragraph 
            className={(index+1)}
            text={value}
        />);

    return (
        <article>
            <h1>{props.title}</h1>
                {paragraphOfArticle}
        </article>
    );
};

export default FirstArticle;