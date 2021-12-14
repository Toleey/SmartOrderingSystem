export default{
	
	state:{
		code:0
	},
	mutations:{
		storeCodeToFetch(state,code){
			state.code=code
		}
	},
	actions:{
		
	},
	getters:{
		getCode(state){
			return state.code
		}
	}
	
	
	
}