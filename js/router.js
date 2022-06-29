// import keepApp from "./views/book-app.cmp.js";
import homePage from './pages/home-page.cmp.js';
// import aboutPage from './views/about-page.cmp.js';



const routes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    // {
    //     path: '/book',
    //     component: keepApp
    // },
    // {

    // },
    // {
    //     path: '/book/add/:bookId?',
    //     component: bookAdd
    // },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})