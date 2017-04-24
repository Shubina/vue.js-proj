import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from './views/pages/Homepage.vue'
import News from './views/pages/News.vue'
import Contacts from './views/pages/Contacts.vue'

Vue.use(VueRouter)


export default new VueRouter({
	mode: 'history',
	routes: [

		{ name: 'home', path: '/', component: Homepage },
		{ name: 'news', path: '/news', component: News },
		{ name: 'contacts', path: '/contacts', component: Contacts },
		{ path: '*', redirect: '/' }
	]
})

