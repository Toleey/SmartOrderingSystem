import Vue from 'vue'
import Vuex from 'vuex'

import cart from '@/store/modules/cart.js'
import fetchMealCode from '@/store/modules/fetchMealCode.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	
	modules:{
		cart,
		fetchMealCode
	
	}
})

export default store