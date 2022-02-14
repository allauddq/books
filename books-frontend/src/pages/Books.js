import React, { Component } from 'react';

class Books extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  // Fetch the books on first mount
  componentDidMount() {
    this.getBooks();
  }

  // Retrieves the books of items from the Express app
  getBooks = () => {
    fetch('/books')
      .then(res => res.json())
      .then(books => this.setState({ books }))
  }

  render() {
    const { books } = this.state;

    return (
      <div className="App">
        <h1>List of Books</h1>
        {/* Check to see if any items are found*/}
        {books.length ? (
          <div>
            {/* Render the books of items */}
            {books.map((item) => {
              return (
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>Books Found: {books.length}
            </h2>
          </div>
        )
        }
      </div>
    );
  }
}

export default Books;