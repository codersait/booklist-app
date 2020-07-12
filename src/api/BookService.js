import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://librarymanagementtt.herokuapp.com',
});

export default {
  getBooks() {
    return apiClient.get('/books');
  },
  getBook(id) {
    return apiClient.get(`/books/${id}`);
  },
  addBook(data) {
    return apiClient.post('/books', data);
  },
  updateBook(id, data) {
    return apiClient.put(`/books/${id}`, data);
  },
  removeBook(id) {
    return apiClient.delete(`/books/${id}`);
  },
};
