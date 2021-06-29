import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Types from '@/views/Types.vue'
import Relayers from '@/views/Relayers.vue'
import TezosSend from '@/views/TezosSend.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/types', component: Types },
	{ path: '/relayers', component: Relayers },
	{ path: '/tezos-send', component: TezosSend},
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
