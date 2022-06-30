export default {

    props: ['book'],

    template: `
      <section @click="$emit('select')" class="book-preview">
        <img :src="bookImgUrl" alt="book">
        <label>Title: {{book.title}}</label>
        <p>By: {{book.authors.join(', ')}}</p>
        <p class="price" :class="priceColor">Price: {{book.listPrice.amount}}{{sign}}</p>
      </section> 

`,
    data() {
        return {};
    },

    methods: {},
    computed: {
        bookImgUrl() {
            return `${this.book.thumbnail}`
        },
        sign() {
            switch (this.book.listPrice.currencyCode) {
              case "USD":
                return "$"
              case "EUR":
                return "€"
              case "ILS":
                return "₪"
            }
          },
          priceColor() {
            if (this.book.listPrice.amount > 150) return "red"
            if (this.book.listPrice.amount < 20) return "green"
          },
        // priceColor() {
        //     if (this.book.listPrice.amount > 150) return "color-red"
        //     if (this.book.listPrice.amount < 20) return "color-green"
        //   },
    },

};