import React from "react";
import Navbar from "../components/Navbar.js";
import Jumbotron from "../components/Body.js";
import Result from "../components/Result.js";
import { Input, FormBtn } from "../components/Form.js";
import API from "../utilities/API";
class BookSearch extends React.Component {
  state = {
    bookData: [],
    search: ""
  };

  search = query => {
    console.log("Search got called");
    API.search(query)
      .then(res => {
        this.setState(
          {
            bookData: res.data.items,
            search: ""
          },
          console.log(res.data.items)
        );
      })
      .catch(err => console.log(err));
  };

  delete = id => {
    API.delete(id).catch(err => console.log(err));
  };

  saveBook = bookData => {
    API.save(bookData).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Handle Form Submit got called");
    this.search(this.state.search);
  };

  render() {
    return (
      <div>
        <Navbar />

        <section id="hero" className="section">
          <Jumbotron>
            <span>Google Books Search</span>
            <h1>Search Books</h1>
          </Jumbotron>
        </section>

        <section id="search-section" className="section">
          <div className="container">
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search"
              />
              {/* Why u no work? */}
              <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
            </form>
            <br />
            <br />
            <br />
            {this.state.bookData.length ? (
              <span>
                {this.state.bookData.map(book => (
                  <Result
                    key={book._id}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    authors={
                      book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(", ")
                        : "N/A"
                    }
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    saveBook={() => {
                      console.log(book.volumeInfo.imageLinks);
                      this.saveBook({
                        image: book.volumeInfo.imageLinks.thumbnail,
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors,
                        description: book.volumeInfo.description,
                        link: book.volumeInfo.infoLink
                      });
                    }}
                  />
                ))}
              </span>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default BookSearch;
