import axios from 'axios';

export default {
  getSaved: function() {
    return axios.get("/api/books");
  },
  getSearched: function(title) {
    return axios.get("/api/google/" + title);
  }
}