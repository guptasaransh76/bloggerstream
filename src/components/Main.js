import React from 'react';

import Author from './Author';

class Main extends React.Component {
  state = {
    newComment: false
  };

  showNewComment = (event) => {
    event.preventDefault();
    this.setState({ newComment: true });
  }

   render() {
    if (!this.props.title) {
      return <h3>Hello! Welcome to BLOGGERSTREAM.</h3>;
    }
    return (
      <div id="current-article">
        <h3>{this.props.title}</h3>
        <div className="article-date">
          {this.props.date}
        </div>
        <Author {...this.props.author} />
        <div className="article-body">
          {this.props.body}
        </div>
          <button id="new-article" className="btn btn-secondary" type="button" onClick={this.showNewComment}>
            Comment
          </button>
      </div>
    );
  }
}

export default Main;
