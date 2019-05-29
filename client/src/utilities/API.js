import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";
export default {
  getAll: function() {
    return axios.get("/api/books");
  },

  search: function(query) {
    return axios.get(URL + query);
  },

  delete: function(id) {
    return axios.delete("/api/books/" + id);
  },

  save: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
