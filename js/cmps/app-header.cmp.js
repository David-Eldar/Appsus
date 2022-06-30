export default {

  template: `
    <header class="app-header">
       <router-link to="/"><div class="logo">
           <img class="logo-icon" src="assets/imgs/unicorn-icon.png" alt="logo icon">
           <h3>Appsus</h3>
          </div></router-link>
          <router-link class="about-link" to="/about">About</router-link>
          <div class="nav-icon">
            <img src= "assets/icons/main-icons/menu.png"
             alt="menu" @click="toggleNav">
            </div>
            <nav class="nav-bar" :class="onNavOpen">
                <router-link to="/"><img src="assets/icons/main-icons/home.png" alt="" @click="toggleNav"></router-link>
                <router-link to="/mail"><img src="assets/icons/main-icons/mail.png" alt="" @click="toggleNav"></router-link> 
                <router-link to="/book"><img src="assets/icons/main-icons/book.png" alt="" @click="toggleNav"></router-link>
                <router-link to="/notes"><img src="assets/icons/main-icons/keep.png" alt="" @click="toggleNav"></router-link>
          </nav>

    </header>
   `,

  data() {
    return {
      isNavDisplayed: false,
      isNavOpen: false,
    }

  },

  methods: {
    toggleNav() {
      this.isNavDisplayed = !this.isNavDisplayed;
      
      setTimeout(() => this.isNavOpen = !this.isNavOpen, 10)
    }
  },
  computed: {
    navDisplayed() {
      return this.isNavDisplayed ? 'display: block' : 'display: none'
    },
    onNavOpen() {
      return this.isNavOpen ? 'open-nav' : ''
    },
  }
}