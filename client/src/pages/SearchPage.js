import React from "react";
import Navbar from "../components/Navbar.js";

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
        <section id="hero" className="section section-hero">
          <div className="row">
            <div className=" col-sm-6 col-lg-11 ">
              <div className="hero-content">
                <div className="books-img">
                  <img
                    className="img-fluid"
                    alt="Responsive image"
                    src={require("../assets/images/books.png")}
                  />
                </div>
                <div className="title">
                  <h1>Google Book Search</h1>
                  <h2>A MERN stack book search app</h2>
                  <a href="#search-section">
                    <button type="button" className="btn btn-enter">
                      Enter
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="search-section" className="section section-search">
          <Navbar />
          <div className="container">
            <form className="form-styles">
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                className="form-input"
              />

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
