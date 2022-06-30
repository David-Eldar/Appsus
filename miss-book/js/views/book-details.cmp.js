import longText from "../cmps/book-long-text.cmp.js";
import { bookService } from "../services/book-service.js";

export default {


    // props: ["book"],

    template: `
          <section v-if="book" class="book-details app-main">
            <h1>Book Details</h1>
            <img :src="bookImgUrl" alt="img">
            <label>Book Title: {{book.title}} </label>
            <label>Autors: {{book.authors.join(', ')}} </label>
            <P>Categories: {{book.categories.join(', ')}}</P>
            <P>Language: {{book.language}}</P>
            <P>Subtitle: {{book.subtitle}}</P>

            <button class="btn" @click="clickBack">Back</button>
            <!-- <router-link class="btn" to="/book">Back</router-link> -->
          </section>
          <div v-else>Loading...</div>
      `,
    components: {
        longText,
    },
    created() {
        // console.log(this.$route);
        const id = this.$route.params.bookId
        bookService.get(id).then((book) => (this.book = book))
    },
    
    data() {
        return {
         book:null,
        };
    },
    methods: {
        clickBack(){
            this.$router.back()
          }
    },
    computed: {
        bookImgUrl() {
            return this.book.thumbnail
          },
        //   sign() {
        //     switch (this.book.listPrice.currencyCode) {
        //       case "USD":
        //         return "$"
        //       case "EUR":
        //         return "€"
        //       case "ILS":
        //         return "₪"
        //     }
        //   },
        //   reading() {
        //     const pageCount = this.book.pageCount
        //     if (pageCount > 500) return "Long reading"
        //     if (pageCount > 200) return " Decent Reading"
        //     if (pageCount < 100) return "Light Reading"
        //   },
        //   bookStatus() {
        //     const currYear = new Date().getFullYear()
        //     const publishedDate = this.book.publishedDate
        //     if (currYear - publishedDate < 1) return "new!"
        //     if (currYear - publishedDate > 10) return "Veteran Book"
        //   },
        //   priceColor() {
        //     const bookPrice = this.book.listPrice.amount
        //     if (bookPrice > 150) return "color-red"
        //     if (bookPrice < 20) return "color-green"
        //   },
    },
};
