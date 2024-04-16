import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from './view/HomeView.vue'
import AboutView from './view/AboutView.vue'
import ContactView from './view/ContactView.vue'
import AppView from './view/AppView.vue'
import UserProfile from './view/UserProfile.vue'
import RefView from './view/RefView.vue'
import ReactiveView from './view/ReactiveView.vue'

const routes = [
    {
        path: "/",
        component:  HomeView
    },
    {
        path: "/about",
        component:  AboutView
    },
    {
        path: "/contact",
        component:  ContactView
    },
    {
        path: "/app",
        component: AppView
    },
    {
        path: "/user/:username",
        component: UserProfile
    },
    {
        path: "/ref",
        component: RefView
    },
    {
        path: "/reactive",
        component: ReactiveView
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')
