<template>
	<view>
		
		<view class="headerBox">
			<view class="shop_name">
				房山店
			</view>
			<view class="shop_location">
				北京市房山区窦店镇
			</view>
		</view>
		<view class="content">
			<scroll-view class="left" :scroll-y="true">
				<view class="left_box">
					<image class="left_img" src="http://yy.wenyuan6.com/imgs/web3.png"></image>
					<view class="left_title">新品来袭</view>
				</view>
				<view class="left_box" v-for="(type,i) in typeList" :key="i">
					<image class="left_img" :src="type.img"></image>
					<view class="left_title">{{type.title}}</view>
				</view>
			</scroll-view>
			
			<scroll-view class="right" :scroll-y="true">
				<view v-for="(type,i) in typeList" :key="i">
					{{type.name}}
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeList:[
					{id:1,title:"新品来袭",img:"http://yy.wenyuan6.com/imgs/web3.png"},
					{id:1,title:"新品来袭",img:"http://yy.wenyuan6.com/imgs/web3.png"},
					{id:1,title:"新品来袭",img:"http://yy.wenyuan6.com/imgs/web3.png"},
					{id:1,title:"新品来袭",img:"http://yy.wenyuan6.com/imgs/web3.png"},
					{id:1,title:"新品来袭",img:"http://yy.wenyuan6.com/imgs/web3.png"},
					{id:1,title:"新品来袭",img:"http://yy.wenyuan6.com/imgs/web3.png"},
					{id:2,title:"新品来袭",img:"http://yy.wenyuan6.com/imgs/web3.png"},
				],
				itemList:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	
	.headerBox{
		border: 1px solid black;
		// height: 150rpx;
		width: 750rpx;
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
	
	.content{
		border: 1px solid black;
		height: 1000rpx;
		display: flex;
			
		.left{
			border: 1px solid black;
			width: 150rpx;
			height: 100%;
			
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
			height: 100%;
			width: 530rpx;
			margin: 0 auto;
			// flex-flow: row nowrap;
			
			
			
		}
			
	}
	

</style>
