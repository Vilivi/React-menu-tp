import logo from './logo.svg';
import './App.css';
import './components/Tab';
import Tab from './components/Tab';
import React, {useState} from 'react';
import FirstArticle from './components/ArticleFirst';
import SecondArticle from './components/ArticleSecond';
import ThirdArticle from './components/ArticleThird';
import FourthArticle from './components/ArticleFourth';

function App() {

  const[selectedArticle, setArticle] = useState(0);
  const arrayArticle = [<FirstArticle/>, <SecondArticle/>, <ThirdArticle/>, <FourthArticle/>];
  const sendIndexProps = (newIndex) => {
    setArticle(newIndex);
  };

  let DisplayedArticle = arrayArticle[selectedArticle];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Tab callback={sendIndexProps}/>
      </header>
      <div>
        {DisplayedArticle}
      </div>
    </div>
  );
}

export default App;
