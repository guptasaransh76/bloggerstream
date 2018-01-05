import React from 'react';

class NewForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle({
      title: this.titleInput.value,
      author: {
        firstName: this.authorFirstNameInput.value,
        lastName: this.authorLastNameInput.value,
      },
      body: this.bodyInput.value,
    });
  }
  render() {
    return (
      <div id="new-article-form">
        <h3>New Article</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            ref={(input) => this.titleInput = input}
            className="form-control"
            placeholder="Title" />
          <br />
          <input
            ref={(input) => this.authorFirstNameInput = input}
            className="form-control"
            placeholder="First Name" />
          <br />
          <input
            ref={(input) => this.authorLastNameInput = input}
            className="form-control"
            placeholder="Last Name" />
          <br />

          <textarea
            ref={(input) => this.bodyInput = input}
            className="form-control"
            rows="12"
            placeholder="What's on your mind?"></textarea>
          <br />
          <button type="submit" className="btn btn-secondary">
            Add Article
          </button>
        </form>
      </div>
    );
  }
}

export default NewForm;
