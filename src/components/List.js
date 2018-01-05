import React from 'react';
import Row from './Row';

class List extends React.Component {
  render() {
    const { articles, onArticleClick } = this.props;
    return (
      <div className="article-list">
        {articles.map(article =>
          <Row
            onClick={onArticleClick}
            key={article.id}
            {...article}
          />
        )}
      </div>
    );
  }
}

export default List;
