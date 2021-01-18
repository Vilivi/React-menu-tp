import Paragraph from './Paragraph';

const ThirdArticle = (props) => {

    const paragraphArray3 = ["Art 3: Je suis le premier paragraphe.", "Moi, le second", "Et moi le troisième", "Quatre paragraphe sera suffisant"];
    const paragraphOfArticle3 = paragraphArray3.map((value, index) => 
        <Paragraph 
            className={(index+1)}
            text={value}
        />
    );

    return (
        <article>
            <h1>{props.title}</h1>
                {paragraphOfArticle3}
        </article>
    );
};

export default ThirdArticle;