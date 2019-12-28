import React from "react";
import { withRouter } from "react-router-dom";

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.book;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then((res) => {
        // // debugger
        return(
            this.props.history.push(`/books/${res.book.id}`)
        )
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </label>

          <label>
            Author
            <input
              type="text"
              value={this.state.author}
              onChange={this.update("author")}
            />
          </label>

          <label>
            ISBN
            <input
              type="text"
              value={this.state.isbn}
              onChange={this.update("isbn")}
            />
          </label>

          <label>
            genre
            <input
              type="text"
              value={this.state.genre}
              onChange={this.update("genre")}
            />
          </label>

          <label>
            Description
            <textarea
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>

          <label>
            Notes
            <textarea
              value={this.state.notes}
              onChange={this.update("notes")}
            />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(BookForm);
