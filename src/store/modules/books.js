import apiClient from '../../api/BookService';
import { format } from 'date-fns'
//import router from '../../router/index';

const state = {
  books: [],
};

const getters = {
  allBooks: state => state.books,
};
/*apiClient.removeBook(id).then(() => {
      this.books = this.books.filter(book => {
        return book.bookId !== id;
      });*/
const actions = {
  fetchBooks({ commit }) {
    apiClient
      .getBooks()
      .then(res => {
        res.data.content.forEach(item=>{
          if(item.publishedAt){
            const date = new Date(item.publishedAt)
            item.publishedAt = format(date, 'dd/MM/yyyy')            
          }else{
            item.publishedAt = 'not yet'
          }
        })
        commit('setBooks', res.data.content);
      })
      .catch(err => console.log(err));
  },
  deleteBook({ commit }, id) {
    apiClient
      .removeBook(id)
      .then(() => {
        const books = state.books.filter(book => {
          return book.id !== id;
        });
        commit('setBooks', books);
      })
      .catch(err => {
        console.log(err);
      });
  },
  
};

const mutations = {
  setBooks: (state, books) => {
    state.books = books;
  },
  setBook: (state, book) => {
    state.book = book;
  },
};

export default { state, getters, actions, mutations };
