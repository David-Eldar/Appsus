// const { createApp } = Vue
import appHeader from "./cmps/app-header.cmp.js";
import appFooter from "./cmps/app-footer.cmp.js";

import { router } from "./router.js";







const options = {
    template: `
        <section class="main-container">
            <app-header />
            <!-- <router-view/> -->
            <app-footer />
        </section>

 `,



    components: {
        appHeader,
        appFooter,

    },

};



const app = Vue.createApp(options)
app.use(router)
app.mount('#app')



