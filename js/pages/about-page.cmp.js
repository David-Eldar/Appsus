export default {
    template: `
    
    <section class="about-page app-main">
        <!-- <div class="about-container"> -->
        <h1>About Me</h1>
        <p>Juast a simple dude</p>
        <button class="btn" @click="clickBack">Back</button>
        <!-- </div> -->
  
    </section>
    `,

methods: {
    clickBack(){
        this.$router.back()
      }
},
}