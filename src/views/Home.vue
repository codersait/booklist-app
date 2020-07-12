<template>
  <div class="home container">
    <div class="mx-auto mb-3" style="width:200px">
      <router-link :to="{name:'AddBook'}">
        <b-button class="add" variant="info">
          <b-icon-book></b-icon-book>
          <span class="ml-2">Add Book</span>
        </b-button>
      </router-link>
    </div>
    <b-table-simple hover small caption-top responsive bordered striped class="text-center">
      <b-thead head-variant="primary">
        <b-tr>
          <b-th>Id</b-th>
          <b-th>Book Name</b-th>
          <b-th>Author</b-th>
          <b-th>Page Count</b-th>
          <b-th>Published Status</b-th>
          <b-th>Published Date</b-th>
          <b-th>UUID Number</b-th>
          <b-th>Created At</b-th>
          <b-th>Edit</b-th>
          <b-th>Delete</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="book in allBooks" :key="book.id">
          <b-td>{{ book.id }}</b-td>
          <b-td>{{ book.name }}</b-td>
          <b-td>{{ book.author }}</b-td>
          <b-td>{{ book.pageCount }}</b-td>
          <b-td>{{ book.published }}</b-td>
          <b-td>{{ book.publishedAt}}</b-td>
          <b-td>{{ book.userUuid }}</b-td>
          <b-td>{{ book.createdAt }}</b-td>
          <b-td>
            <router-link :to="{ name: 'EditBook', params: { id: book.id } }">
              <b-icon-pencil></b-icon-pencil>
            </router-link>
          </b-td>
          <b-td>
            <b-icon-trash class="delete" @click="deleteBook(book.id)"></b-icon-trash>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
// @ is an alias to /src
//import apiClient from "../api/BookService";
import { mapActions, mapGetters } from "vuex";
//import axios from "axios";
export default {
  name: "Home",
  computed: mapGetters(["allBooks"]),
  methods: mapActions(["fetchBooks", "deleteBook"]),
  created() {
    this.fetchBooks();
  }
};
</script>
<style scoped>
.add {
  padding: 10px 40px;
  text-align: center;
}
a {
  text-decoration: none;
}
.home {
  margin-top: 30px;
}
.delete {
  cursor: pointer;
}
</style>
