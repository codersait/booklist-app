<template>
  <div class="add-book container">
    <h2 class="text-center">Add Book</h2>
    <b-form @submit.prevent="addBook">
      <b-form-group id="input-group-1" label="Book Name:" label-for="name" class="field">
        <b-form-input v-model="book.name" id="name" required placeholder="Enter Books Name"></b-form-input>
      </b-form-group>
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
      <b-form-group v-if="book.published">
        <label for="example-datepicker">Published At:</label>
        <b-form-datepicker id="example-datepicker" v-model="book.publishedAt" class="mb-2"></b-form-datepicker>
      </b-form-group>
      <b-button class="buton" type="submit" variant="info" block>Add Book</b-button>
    </b-form>
  </div>
</template>
<script>
import appClient from "../api/BookService";

export default {
  name: "AddBook",
  data() {
    return {
      book:{}
    };
  },
  methods: {
    addBook() {
      console.log(this.book.published);
      if(this.book.published){
        this.book.publishedAt = new Date(this.book.publishedAt).toISOString()
      }else{
        this.book.publishedAt = 'not yet'
      }
      appClient.addBook(this.book).then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },
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
