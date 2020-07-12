<template>
  <div class="add-book container">
    <h2 class="text-center">Edit Book {{book.name}}</h2>
    <b-form @submit.prevent="editBook">
      <b-form-group id="input-group-4" label="Book Id:" label-for="title" class="field readonly">
        <b-form-input
          readonly
          v-model="book.id"
          type="number"
          id="title"
          required
          placeholder="Enter Page Count"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Book Name:" label-for="name" class="field">
        <b-form-input v-model="book.name" id="name" required placeholder="Enter Books Name"></b-form-input>
      </b-form-group>
      <!-- <b-form-group id="input-group-2" label="UUID Number:" label-for="title" class="field">
        <b-form-input v-model="UUID" id="title" required placeholder="Enter UUID Number"></b-form-input>
      </b-form-group>-->
      <b-form-group id="input-group-3" label="Author Name:" label-for="title" class="field">
        <b-form-input v-model="book.author" id="title" required placeholder="Enter Author Name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Page Count:" label-for="title" class="field">
        <b-form-input
          v-model="book.pageCount"
          type="number"
          id="title"
          required
          placeholder="Enter Page Count"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Published:" label-for="title" class="field">
        <b-form-radio v-model="book.published" name="some-radios" value="true" required>Yes</b-form-radio>
        <b-form-radio v-model="book.published" name="some-radios" value="false">No</b-form-radio>
      </b-form-group>
      <b-form-group>
        <label for="example-datepicker">Published At:</label>
        <b-form-datepicker v-model="book.publishedAt" id="example-datepicker" class="mb-2"></b-form-datepicker>
      </b-form-group>
      <b-form-group>
        <label for="example-datepicker">Created At:</label>
        <b-form-datepicker readonly v-model="book.createdAt" id="example-datepicker" class="mb-2"></b-form-datepicker>
      </b-form-group>
      <b-button class="buton" type="submit" variant="info" block>Update Book</b-button>
    </b-form>
  </div>
</template>
<script>
import appClient from "../api/BookService";
export default {
  name: "EditBook",
  data() {
    return {
      book: null
    };
  },
  methods: {
    editBook() {
      this.book.publishedAt = new Date(this.book.publishedAt).toISOString()
      appClient.updateBook(this.$route.params.id, this.book).then(() => {
        this.$router.push({ name: "Home" });
      });
    }
   
  },
  created() {
    appClient.getBook(this.$route.params.id).then(res => {
      this.book = res.data;
    });
  }
};
</script>

<style>
.add-book {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-book h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-book .field {
  margin: 20px auto;
}
</style>
