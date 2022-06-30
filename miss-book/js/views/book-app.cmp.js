import { bookService } from "../services/book-service.js";

import bookList from "../cmps/book-list.cmp.js";
import bookFilter from "../cmps/book-filter.cmp.js";

export default {
    template: `
   <section class="book-app">

       <book-filter @filtered="setFilter" />
       <book-list @selected="selectBook" :books="booksToShow" />
       <book-details  v-if="selectedBook" :book="selectedBook" @close="selectedBook=null" />
   </section>
     
`,
    created() {
        bookService.query().then((books) => {
            this.books = books
        })
    },
    data() {
        return {
            // books: bookService.query(),
            books: null,
            selectedBook: null,
            filterBy: null,

        };
    },

    methods: {
        selectBook(book) {
            this.selectedBook = book
            console.log(book);

        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }

    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            let regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter(book => regex.test(book.title) && book.listPrice.amount <= this.filterBy.priceRange)
        }
    },

    components: {
        bookList,
        bookFilter,
        // bookDetails,
    },

    // unmounted() { },
}