import Paragraph from './Paragraph';

const FourthArticle = (props) => {

    const paragraphArray4 = ["Art 4: Je suis le premier paragraphe.", "Moi, le second", "Et moi le troisième", "Quatre paragraphe sera suffisant"]; 
    const paragraphOfArticle4 = paragraphArray4.map((value, index) => 
        <Paragraph 
            className={(index+1)}
            text={value}
        />
    );

    return (
        <article>
            <h1>{props.title}</h1>
                {paragraphOfArticle4}
        </article>
    );
};

export default FourthArticle;