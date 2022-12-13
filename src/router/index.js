import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

export const routes = [
    { path: '/login', component: LoginPage },
    { path: '/home', component: HomePage },
    { path: '/:pathMatch(.*)', redirect:'/home'}
]