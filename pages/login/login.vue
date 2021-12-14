<template>
	<view class="content">
		
		<view class="loginBox">
			<h1>欢迎使用智慧订餐系统</h1>
			
			<h2 class="phoneNum">中国移动一键登录</h2>
			<h2 class="phoneNum2">188****1234</h2>
			<button class="toLoginButton" @click="toIndex">一键登录/注册</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toIndex(){
				uni.switchTab({
					url:"../index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		// border: 1px solid black;
		width: 750rpx;
		height: 1000rpx;
		
		.loginBox{
			width: 700rpx;
			height: 600rpx;
			border: 1px solid black;
			margin: 150rpx auto;
			display: flex;
			flex-flow: column nowrap; 
			justify-content: center;
			align-items: center;
			
			.phoneNum2{
				border-bottom: 1px solid black;
			}
			
			.toLoginButton{
				margin: 40rpx;
				margin-top: 160rpx;
			}
			
		}
		
		
	}

</style>
