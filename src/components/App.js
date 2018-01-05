import React from 'react';

import List from './List';
import Main from './Main';
import NewForm from './NewForm';

import * as layout from '../layout';

class App extends React.Component {

  state = {
    data: {
      articles: [],
      currentArticle: {}
    },
    newArticleForm: false
  };

  componentDidMount() {
    layout.getArticleList().then(articleList => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          articles: articleList,
        },
      }));
    });
  }

  setCurrentArticle = (articleId) => {
    layout.getArticle(articleId).then(article => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          currentArticle: article,
        },
        newArticleForm: false,
      }));
    });
  };

  showNewArticleForm = (event) => {
    event.preventDefault();
    this.setState({ newArticleForm: true });
  }

  addArticle = (articleInput) => {
    layout.addArticle(articleInput).then(newArticle => {
      this.setState((prevState) => ({
        data: {
          articles: [...prevState.data.articles, newArticle],
          currentArticle: newArticle,
        },
        newArticleForm: false,
      }));
    });
  };

  render() {
    return (
      <div className="App">
        <h2 id="header">BloggerStream</h2>

        <div id="left">
          <button id="new-article" className="btn btn-danger" type="button" onClick={this.showNewArticleForm}>
            Add Article
          </button>
          
          <br /><br />

          <h3>Article List</h3>
          <input type="textbox" id="searchbox" />
          <button id="new-search" className="btn btn-secondary" type="button">
            Search
          </button>

          <List
            articles={this.state.data.articles}
            onArticleClick={this.setCurrentArticle}
          />


        </div>

        <div id="right">
          {
            this.state.newArticleForm ?
              <NewForm addArticle={this.addArticle} /> :
              <Main {...this.state.data.currentArticle} />
          }
        </div>


      </div>
    );
  }
}

export default App;
