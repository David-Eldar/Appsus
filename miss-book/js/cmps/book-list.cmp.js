import bookPreview from "../cmps/book-preview.cmp.js";

export default {
  props: ['books'],

  template: `

<section v-if="books" class="books-list">
        <ul>
         <li v-for="book in books" :key="book.id" class="book-preview-container">  
           
             
             <router-link class="btn-card" :to="'/book/'+book.id"><book-preview @select="select(book)" :book="book"/></router-link>    
             <router-link class="link" :to="'/book/'+book.id">See Details</router-link>    
         </li> 
        </ul>
     </section>
`,

components: {
  bookPreview
},
  data() {
    return {};
  },

  methods: {
    select(book){
      this.$emit("selected",book)
    }

  },
  computed: {},

};