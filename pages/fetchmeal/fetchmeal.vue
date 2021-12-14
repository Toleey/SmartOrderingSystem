<template>
	<view>
		
		<view class="item-box">
			
			<view class="item">
				
				<view class="fm-title">取餐码</view>
				<view class="fm-num">{{this.getCode}}</view>
				
			</view>
			
		</view>
		
		<view>
			<button type="default" @click="toOrder()">返回订单页</button>
		</view>
		
	</view>
</template>

<script>
	import store from '@/store/index.js'//必须叫index.js
	import {mapState,mapMutations,mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				itemList:[
					{id:1,name:"霸气满满",num:1,price:15},
					{id:1,name:"霸气满满",num:1,price:15},
					{id:1,name:"霸气满满",num:1,price:15}
				],
				totalPrice:15
			};
		},
		methods:{
			toOrder(){
				uni.switchTab({
					url:"../order/order"
				})
			}
		},
		computed:{
				...mapState({}),
				...mapGetters(['getCode'])
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F2F2F2;
	}
	.item-box{
		width: 680rpx;
		// min-height: 600rpx;
		background-color: white;
		margin: 30rpx auto;
		border-radius: 3%;
		padding: 10rpx 0 40rpx 0;
		
		.item{
			margin-top: 20rpx;;
			border: 1px solid black;
			width: 680rpx;
			// height: 200rpx;
			
			
			.fm-title{
				border: 1px solid black;
				width: 680rpx;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 80rpx;
				text-align: center;
				
			}
			
			.fm-num{
				border: 1px solid black;
				width: 680rpx;
				height: 300rpx;
				line-height: 300rpx;
				font-size: 200rpx;
				text-align: center;
			}
			
			
		}
		
		
	}

</style>
