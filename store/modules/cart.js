export default{
	
	state:{
		list:[]
	},
	mutations:{
		storeListToPay(state,itemList){
			state.list=itemList
			console.log(state.list)
		}
	},
	actions:{
		
	},
	getters:{
		showListToPay(state){
			return state.list
		}
	}
	
	
	
}