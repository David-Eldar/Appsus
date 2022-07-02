import { toggleEmit } from '../../../main-services/eventBus-service.js'

export default {
    template: `
      <section class="keep-filter">
          <button href="#" @click="toggleSideNav">☰</button>
          <div class="logo">
              <img src="assets/img/logo-keep.png" alt="">
          </div>
          <div class="search">
            <input class="input-search" type="text" v-model="filterBy.title" @input="filter" placeholder="Search by title">
            <i class="icon fa-solid fa-magnifying-glass"></i>
          </div>
          
      </section>  
  `,
    data() {
      return {
        filterBy: {
          title: '',
        },
      }
    },
    created() {},
    methods: {
      filter() {
        this.$emit('filtered', this.filterBy)
      },
      toggleSideNav() {
        toggleEmit()
        
      },
    },
    computed: {},
    unmounted() {},
  }