<template>
	<view>
		<view class="box" v-for="order in orderList">
			<view class="box01">
				<text class="fetchMealCode-title">取餐码：</text>
				<text class="fetchMealCode-content">{{order.fetchMealCode}}</text>
			</view>
			<view class="buyItems">
				<!-- 买的东西 -->
			</view>
			<view class="box02">
				<text class="placeOrderTime-title">下单时间：</text>
				<text class="placeOrderTime-content">{{order.createdTime}}</text>
			</view>
			<view class="box03">
				<text class="placeOrderCode-title">订单编号：</text>
				<text class="placeOrderCOde-content">{{order.id}}</text>
			</view>
			<view class="box04">
				<view class="contactShop" @click="contactShop()">联系商家</view>
				<view class="requestFund">申请退款</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[]
			}
		},
		onLoad() {
			this.getAllOrders()
		},
		methods: {
			getAllOrders(){
				
			},
			async getAllOrders(){
				const res = await this.$myRequest({
					url:'/order/getAllOrders'
				})
				if(res.statusCode==200){
					this.orderList=res.data
				}else{
					uni.showToast({
						title:"请求有误"
					})
				}
			},
			contactShop(){
				uni.makePhoneCall({
				    phoneNumber: '',//手机号
					success: () => {
						console.log("调用成功了")
					},
					fail: () => {
						console.log("调用失败了")
					},
					complete: () => {
						console.log("调用了")
					}
				});
			},
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F4F2F9;
	}

	.box{
		//border: 1px solid black;
		margin: 30rpx auto;
		min-height: 300rpx;
		width: 700rpx;
		background-color: white;
		
		.box01{
			//border: 1px solid black;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 140rpx;
			
			.fetchMealCode-title{
				font-size: 40rpx;
			}
			.fetchMealCode-content{
				font-size: 80rpx;
				font-weight: bold;
				color: red;
			}
		}
		.buyItems{
			// border: 1px solid black;
			height: 50rpx;
		}
		
		.box02{
			height: 50rpx;
			.placeOrderTime-title{}
			.placeOrderTime-content{}
		}
		.box03{
			height: 50rpx;
			.placeOrderCode-title{}
			.placeOrderCode-content{}
		}
		.box04{
			//border: 1px solid black;
			display: flex;
			justify-content: flex-end;
			height: 60rpx;
			
			.contactShop{
				border: 1px solid black;
				// background-color: grey;
				cursor: pointer;
				
			}
			.requestFund{
				border: 1px solid black;
				// background-color: grey;
				cursor: pointer;
				margin-left: 20rpx;
			}
		}
		
		
	}

</style>
