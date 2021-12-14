<template>
	<view>
		
		<view class="item-box">
			
			<view class="item" v-for="item in itemList">
				
				<view class="item01">
					<image src="https://cdn.pixabay.com/photo/2018/07/18/07/56/drink-3545791_1280.jpg"></image>
				</view>
				<view class="item02">
					<view class="item02-title">{{item.title}}</view>
					<view class="item02-desc">
						<text>x</text>
						<text>{{item.num}}</text>
					</view>
				</view>
				<view class="item03">
					<!-- <text>¥</text>
					<delete>16</delete> -->
					<text>¥</text>
					<text>{{item.price}}</text>
				</view>
				
			</view>
			
		</view>
		
		<view>
			<view>
				<text>总金额：¥</text>
				<text>{{totalPrice}}</text>
			</view>
			<button type="default" @click="toFetchMetal">确认支付</button>
		</view>
		
	</view>
</template>

<script>
	import store from '@/store/index.js'//必须叫index.js
	import {mapState,mapMutations,mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				totalPrice:0,
			};
		},
		onLoad() {
			this.isNullData()
			this.countTotalPrice();
		},
		methods:{
			...mapMutations(['storeCodeToFetch']),
			countTotalPrice(){
				this.itemList.forEach(item=>{
					this.totalPrice+=item.num*item.price
				})
			},
			toFetchMetal(){
				uni.request({
					url: "http://localhost:8088/order/submitItems",
					method: 'POST',
					dataType: 'json',
					data: {
						"items":JSON.stringify(this.itemList)
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log('成功', res)
						console.log(res.data);
						this.storeCodeToFetch(res.data)
						
					},
					fail: (res) => {
						console.log('错误', res)
					}
				})
				
				uni.redirectTo({
					url:"../fetchmeal/fetchmeal"
				})
				
			},
			isNullData(){
				if(this.itemList.length==0){
					uni.redirectTo({
						url:"../food2/food2"
					})
				}
			},
		},
		computed:{
				...mapState({
					itemList:state=>state.cart.list
				}),
				...mapGetters([''])
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F2F2F2;
	}
	.item-box{
		width: 680rpx;
		min-height: 600rpx;
		background-color: white;
		margin: 30rpx auto;
		border-radius: 3%;
		padding: 10rpx 0 40rpx 0;
		
		.item{
			margin-top: 20rpx;;
			border: 1px solid black;
			width: 680rpx;
			height: 200rpx;
			display: flex;
			
			.item01{
				height: 200rpx;
				width: 200rpx;
				
				image{
					border: 1px solid black;
					width: 200rpx;
					height: 200rpx;
					
				}
				
			}
			
			.item02{
				border: 1px solid black;
				display: flex;
				flex-flow: column nowrap;
				width: 380rpx;
				height: 200rpx;
				line-height: 90rpx;//100rpx挤出来
				text-align: center;
				
				.item02-title{
					border: 1px solid black;
					width: 380rpx;
					height: 100rpx;
					
				}
				
				.item02-desc{
					border: 1px solid black;
					width: 380rpx;
					height: 100rpx;
				}
				
			}
			
			.item03{
				border: 1px solid black;
				width: 100rpx;
				line-height: 200rpx;
				text-align: center;
			}
			
			
		}
		
		
	}

</style>
