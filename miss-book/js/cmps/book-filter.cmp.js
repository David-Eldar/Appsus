export default {
    props: ["books"],
    template: `

 <section class="book-filter">
    <h1>Search For Books</h1>
    <input type="text" v-model="filterBy.title" placeholder="by book title">
    <!-- <input type="text" v-model="filterBy.authors"    placeholder="by authors"> -->
     <div class="price-filter-container">
     <label for="price-range">by price range: {{filterBy.priceRange}}</label>
     <input id="price-range" type="range" v-model="filterBy.priceRange" min="0" max="400">
     </div>
      <button class="btn"  @click="filter">Search</button>

 </section>
`,
    data() {
        return {
            filterBy: {
                title: "",
                authors: '',
                priceRange: 200,
            },
        };
    },
    created() { },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy })
        }
    },
    computed: {},
    unmounted() { },
};