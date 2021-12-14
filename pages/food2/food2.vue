<template>
	<view class="a">
		
		<view class="headerBox" v-for="shop in shopList">
			<view class="shop_name">
				{{shop.name}}
			</view>
			<view class="shop_location">
				{{shop.location}}
			</view>
		</view>
		
		<view class="contentBox">
			
			<scroll-view class="left" :scroll-y="true">
				<view class="left_box" v-for="(type,t) in typeList" :key="t" @click="getTypeItem(type.id)">
					<image class="left_img" :src="type.img"></image>
					<view class="left_title">{{type.title}}</view>
				</view>
			</scroll-view>
			
			<scroll-view class="right" :scroll-y="true">
				
				<view class="right_box" v-for="(item,i) in itemList" :key="i">
					<view class="right_box_left">
						<image class="right_img" :src="item.img"></image>
					</view>
					<view class="right_box_right">
						<view class="right_box_right_title">
							<text>{{item.title}}</text>
						</view>
						<view class="right_box_right_desc">
							<text>{{item.desc}}</text>
						</view>
						<view class="right_box_right_down">
							<view class="right_box_right_down_price" >
								<text class="rbrdpi">¥</text>
								<text class="rbrdpn">{{item.price}}</text>
								<!-- <text class="rbrdpw">起</text> -->
							</view>
							<view class="right_box_right_down_icon">
								<!-- <span class="rbrdi iconfont icon-tianjia"></span> -->
								<image class="rbrdi" @click="numMinus(item.id)" src="../../static/pic/add.png"></image>
								<text>{{item.num}}</text>
								<image class="rbrdi" @click="numAdd(item.id)"  src="../../static/pic/add.png"></image>
							</view>
						</view>
					</view>
				</view>
				
			</scroll-view>
			
		</view>
		
		<view class="shoppingList">
			<view class="slLeft">
				<view class="sll01">
					<text>价格：¥</text>
					<text>{{totalPrice}}</text>
				</view>
				<view class="sll02">
					<text>优惠：¥</text>
					<text>{{discountPrice}}</text>
				</view>
			</view>
			<view class="slRight">
				<button class="slrb" type="default" @click="toSettlement()">确认下单</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import store from '@/store/index.js'//必须叫index.js
	import {mapState,mapMutations,mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				typeList:[],
				itemList:[],
				shoppingList:[],
				itemId:'',
				shopList:[
					{id:1,name:"房山店",location:"北京市房山区窦店镇"}
				],
				totalPrice:0,
				discountPrice:0,
				payList:[],
			}
		},
		onLoad() {
			this.getAllTypes()
			this.getAllItems()
		},
		methods: {
			...mapMutations(['storeListToPay']),
			
			toSettlement(){
				this.itemList.forEach(item=>{
					if(item.num>0){
						this.payList.push(item)
						console.log(this.payList)
					}
				})
				this.storeListToPay(this.payList)
				uni.navigateTo({
					url:"../settlement/settlement"
				})
			},
			
			numAdd(id){
				this.itemList.forEach(item=>{
					if(id==item.id){
						++item.num
						this.totalPrice+=item.price
					}
					})
			},
			numMinus(id){
				this.itemList.forEach(item=>{
					if(id==item.id){
						if(item.num==0) {
							alert('再减就没有了！') 
						}else{
							--item.num
							this.totalPrice-=item.price
						}
					}
					})
			},
			
			
			
			async getAllTypes(){
				
				const res = await this.$myRequest({ //await 异步调用
					url:'/type/getAllTypes'
				})
				if(res.statusCode==200){
					this.typeList=res.data
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
				
			},
			
			async getAllItems(){
				
				const res = await this.$myRequest({ //await 异步调用
					url:'/item/getAllItems'
				})
				if(res.statusCode==200){
					this.itemList=res.data
					console.log(this.itemList)
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
				
			},
			async getTypeItem(i){
				// console.log(i)
				const res = await this.$myRequest({
					url:'/item/getTypeItem?typeId='+i
				})
				if(res.statusCode==200){
					this.itemList=res.data
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
			},
			countItem(i){
				// console.log(i)
				// this.itemId=i
				this.shoppingList.push(i)
				// console.log(this.shoppingList)
				this.countPrice(i)
			},
			
		},
		computed:{
				...mapState({}),
				...mapGetters([''])
		}
		
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		padding-bottom: 1393rpx;
	}
	.a{
		height: 100%;
	}
	
	.headerBox{
		// border: 1px solid black;
		height:55px;
		//width: 750rpx;
		width: 100%;
		// height: 13%;
		display: flex;
		flex-flow: column nowrap;
		text-align: left;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		
		.shop_name{
			// border: 1px solid black;
			padding-left: 30rpx;
			font-size: 40rpx;
			font-weight: bold;
			color: #767676;
			
		}
		.shop_location{
			// border: 1px solid black;
			border-top: 1px solid black;
			padding-left: 30rpx;
			font-size: 30rpx;
		}
		
	}
	
	.contentBox{
		// border: 1px solid black;
		height: 80vh;
		display: flex;
			
		.left{
			// border: 1px solid black;
			border-right: 1px solid black;
			width: 150rpx;
			// height: 100%;
			
			.left_box{
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
				justify-content: center;
				margin-top: 10rpx;
				
				.left_img{
					// border: 1px solid black;
					width: 100rpx;
					height: 100rpx;
					
				}
				
				.left_title{
					// border: 1px solid black;
					border-bottom: 1px solid black;
					font-weight: bolf;
					font-size: 30rpx;
				}
				
			}
			.active{
				color: #FFFFFF;
				background-color: #A30007;
			}
			
		}
		.right{
			// border: 1px solid black;
			// height: 100%;
			width: 530rpx;
			margin: 0 auto;
			// flex-flow: row nowrap;
			
			.right_box{
				// border: 1px solid black;
				display: flex;
				margin-top: 20rpx;
				
				.right_box_left{
					// border: 1px solid black;
					width: 159rpx;
					height: 159rpx;
					
					.right_img{
						width: 159rpx;
						height: 159rpx;
						
					}
				}
				
				.right_box_right{
					// border: 1px solid black;
					height: 159rpx;
					width: 371rpx;
					
					.right_box_right_title{
						// border: 1px solid black;
						font-weight: 900;
						font-size: 33rpx;
					}
					
					.right_box_right_desc{
						// border: 1px solid black;
						font-weight: 300;
						font-size: 25rpx;
						color: #A8A8A8;
						overflow:hidden; //超出的文本隐藏
						text-overflow:ellipsis; //溢出用省略号显示
						white-space:nowrap; //溢出不换行
					}
					
					.right_box_right_down{
						// border: 1px solid black;
						display: flex;
						justify-content: space-between;
						margin-top: 30rpx;
						
						.right_box_right_down_price{
							
							.rbrdpn,.rbrdpi{
								color: #DE0E21;
							}
							.rbrdpw{
								color: #A9A9A9;
							}
						}
						
						.right_box_right_down_icon{
							// border: 1px solid black;
							margin-right: 20rpx;
							display: flex;
							align-items: center;
							// justify-content: center;
							// background-color: #DC0011;
							// color: white;
							// border-radius: 45%;
							// font-size: 25rpx;
							
							.rbrdi{
								width: 50rpx;
								height: 50rpx;
								cursor: pointer;
							}
							
						}
						
					}
					
					
				}
				
			}
			
			
			
		}
			
	}
	.shoppingList{
		// border: 1px solid #F2F4F6;
		// margin-top: 20rpx;
		position: fixed;
		bottom: 0;
		z-index: 9999;
		width: 750rpx;
		height: 200rpx;
		background-color: orange;
		display: flex;
		flex-flow: row nowrap;
		
		.slLeft{
			// border: 1px solid black;
			display: flex;
			width: 450rpx;
			height: 200rpx;
			display: flex;
			flex-flow: column nowrap;
			
			.sll01{
				// border: 1px solid black;
				border-bottom: 1px solid black;
				width: 450rpx;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 40rpx;
			}
			
			.sll02{
				// border: 1px solid black;
				width: 450rpx;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 40rpx;
			}
			
		}
		.slRight{
			// border: 1px solid black;
			width: 300rpx;
			height: 200rpx;
			background-color: black;
			display: flex;
			justify-content: center;
			align-items: center;
			
			.slrb{
				// border: 1px solid black;
				width: 300rpx;
				height: 200rpx;
				line-height: 200rpx;
				font-size: 40rpx;
			}
			
		}
		
	}

</style>
