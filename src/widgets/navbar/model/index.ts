import type { FunctionalComponent } from "vue"
import OrdersIcon from "@/shared/assets/icons/OrdersIcon.vue"
import IncomesIcon from "@/shared/assets/icons/IncomesIcon.vue"
import HomeIcon from "@/shared/assets/icons/HomeIcon.vue"
import SalesIcon from "@/shared/assets/icons/SalesIcon.vue"
import StocksIcon from "@/shared/assets/icons/StocksIcon.vue"
export const navbarModel = [
    {
        to: '/',
        name: 'home',
        title: 'Главная',
        icon: HomeIcon, 
    },
    {
        to: '/incomes',
        name: 'incomes',
        title: 'Доходы',
        icon: IncomesIcon, 
    },
    {
        to: '/orders',
        name: 'orders',
        title: 'Заказы',
        icon: OrdersIcon
    },
    {
        to: '/sales',
        name: 'sales',
        title: 'Продажи',
        icon: SalesIcon, 
    },
    {
        to: '/stocks',
        name: 'stocks',
        title: 'Склады',
        icon: StocksIcon, 
    },
]