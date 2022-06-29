export default {
  template: `
    <header class="app-header">
       <div class="logo">
           <img class="logo-icon" src="assets/icons/main-icons/horse-icon.png" alt="logo icon">
           <h3>Appsus</h3>
          </div>
          <div class="nav-icon">
            <router-link to="/about">About</router-link>
            <img src= "assets/icons/main-icons/menu.png"
             alt="menu" @click="toggleNav">
            </div>
            <!-- <nav class="nav-bar" :class="onNavOpen">
                <router-link to="/"><img src="assets/icons/main-icons/home.png" alt="" @click="toggleNav"></router-link>
                <router-link to="/mail"><img src="assets/icons/main-icons/mail.png" alt="" @click="toggleNav"></router-link>
                <router-link to="/book"><img src="assets/icons/main-icons/book.png" alt="" @click="toggleNav"></router-link>
                <router-link to="/notes"><img src="assets/icons/main-icons/keep.png" alt="" @click="toggleNav"></router-link>
          </nav> -->

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
      console.log(this.isNavDisplayed );
    }
  },
  computed: {}
}