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
								<text class="rbrdpw">起</text>
							</view>
							<view class="right_box_right_down_icon" @click="countItem(item.id)">
								<!-- <span class="rbrdi iconfont icon-tianjia"></span> -->
								<image class="rbrdi" src="../../static/pic/add.png"></image>
							</view>
						</view>
					</view>
				</view>
				
			</scroll-view>
			
		</view>
		
		<view class="shoppingList" >
			<view></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList:[],
				itemList:[],
				shoppingList:[],
				itemId:'',
				shopList:[
					{id:1,name:"房山店",location:"北京市房山区窦店镇"}
				]
			}
		},
		onLoad() {
			this.getAllTypes()
			this.getAllItems()
			this.toFood2()
		},
		methods: {
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
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
				
			},
			async getTypeItem(i){
				console.log(i)
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
				console.log(i)
				this.itemId=i
				this.shoppingList.push(i)
				console.log(this.shoppingList)
			},
			toFood2(){
				uni.redirectTo({
					url:"../food2/food2"
				})
			}
			
			
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
		border: 1px solid black;
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
			border: 1px solid black;
			padding-left: 30rpx;
			font-size: 40rpx;
			font-weight: bold;
			color: #767676;
			
		}
		.shop_location{
			border: 1px solid black;
			padding-left: 30rpx;
			font-size: 30rpx;
		}
		
	}
	
	.contentBox{
		border: 1px solid black;
		height: 80vh;
		display: flex;
			
		.left{
			border: 1px solid black;
			width: 150rpx;
			// height: 100%;
			
			.left_box{
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
				justify-content: center;
				margin-top: 10rpx;
				
				.left_img{
					border: 1px solid black;
					width: 100rpx;
					height: 100rpx;
					
				}
				
				.left_title{
					border: 1px solid black;
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
			border: 1px solid black;
			// height: 100%;
			width: 530rpx;
			margin: 0 auto;
			// flex-flow: row nowrap;
			
			.right_box{
				border: 1px solid black;
				display: flex;
				margin-top: 20rpx;
				
				.right_box_left{
					border: 1px solid black;
					width: 159rpx;
					height: 159rpx;
					
					.right_img{
						width: 159rpx;
						height: 159rpx;
						
					}
				}
				
				.right_box_right{
					border: 1px solid black;
					height: 159rpx;
					width: 371rpx;
					
					.right_box_right_title{
						border: 1px solid black;
						font-weight: 900;
						font-size: 33rpx;
					}
					
					.right_box_right_desc{
						border: 1px solid black;
						font-weight: 300;
						font-size: 25rpx;
						color: #A8A8A8;
						overflow:hidden; //超出的文本隐藏
						text-overflow:ellipsis; //溢出用省略号显示
						white-space:nowrap; //溢出不换行
					}
					
					.right_box_right_down{
						border: 1px solid black;
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
							border: 1px solid black;
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
								height: 50rpx
							}
							
						}
						
					}
					
					
				}
				
			}
			
			
			
		}
			
	}
	.shoppingList{
		position: fixed;
		bottom: 90rpx;
		z-index: 9999;
		
		width: 750rpx;
		height: 200rpx;
		background-color: black;
	}

</style>
