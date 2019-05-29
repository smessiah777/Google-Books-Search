import React from "react";
import Navbar from "../components/Navbar";

import API from "../utilities/API";
import Save from "../components/Save";

class Saved extends React.Component {
  state = {
    bookData: []
  };
  componentDidMount() {
    this.load();
  }

  load = () => {
    API.getAll()
      .then(res => this.setState({ bookData: res.data }, console.log(res.data)))
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    API.delete(id)
      .then(res => this.load())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />

        <br />
        <br />
        <br />
        {this.state.bookData.length ? (
          <span>
            {this.state.bookData.map(book => (
              <Save
                key={book._id}
                image={book.image}
                title={book.title}
                authors={book.authors ? book.authors.join(", ") : "N/A"}
                description={book.description}
                link={book.link}
                handleDelete={() => this.handleDelete(book._id)}
              />
            ))}
          </span>
        ) : (
          <h3>Nothing saved</h3>
        )}
      </div>
    );
  }
}

export default Saved;
