import Paragraph from './Paragraph';

const SecondArticle = (props) => {

    const paragraphArray2 = ["Art 2: Je suis le premier paragraphe.", "Moi, le second", "Et moi le troisième", "Quatre paragraphes seront suffisant"];
    const paragraphOfArticle2 = paragraphArray2.map((value, index) => 
        <Paragraph 
            className={(index+1)}
            text={value}
        />
    );

    return (
        <article>
            <h1>{props.title}</h1>
                {paragraphOfArticle2}
        </article>
    );
};

export default SecondArticle;