<template>
	<view class="content">
		<view class="bgcBox">
			<image src="https://www.mxbc.com/media/upload/banner/2-3.jpg"></image>
		</view>
			<view class="userInfoBox">
				<view class="userInfoBox_up">
					<view class="uibu_left" @click="toInformation()">
						<view class="avator">
							<image src="https://avatars.githubusercontent.com/u/16291550?v=4"></image>
						</view>
						<view class="membership_level">
							铜牌会员
						</view>
					</view>
					<view class="uibu_right">
						<view class="uibu_right_up">
							大包子
						</view>
						<view class="uibu_right_down">
							进度条44/144
						</view>
					</view>
				</view>
				<view class="userInfoBox_down">
					<view class="uibd">
						<view class="uibd_title">0</view>
						<view class="uibd_subtitle">优惠券</view>
					</view>
					<view class="uibd">
						<view class="uibd_title">0</view>
						<view class="uibd_subtitle">储值金(元)</view>
					</view>
					<view class="uibd">
						<view class="uibd_title">44</view>
						<view class="uibd_subtitle">积分</view>
					</view>
				</view>
			</view>	
			<view class="function">
				<view class="function_title">我的功能</view>
				<view class="functionBox">
					
					<view class="functionBoxChoose" @click="toLevel()">
						<view class="functionBox_icon">
							<span class="iconfont icon-dengji-copy "></span>
						</view>
						<view class="functionBox_title">
							会员等级
						</view>
					</view>
					
					<view class="functionBoxChoose" @click="toCode()">
						<view class="functionBox_icon">
							<span class="iconfont icon-31erweima"></span>
						</view>
						<view class="functionBox_title">
							会员码
						</view>
					</view>
					
					<view class="functionBoxChoose" @click="toPointsStore()">
						<view class="functionBox_icon">
							<span class="iconfont icon-xiangqingyeshangpu"></span>
						</view>
						<view class="functionBox_title">
							积分商城
						</view>
					</view>
					
					<view class="functionBoxChoose" @click="toOrder()">
						<view class="functionBox_icon">
							<span class="iconfont icon-dingdan"></span>
						</view>
						<view class="functionBox_title">
							我的订单
						</view>
					</view>
					
					<view class="functionBoxChoose" @click="toAddress()">
						<view class="functionBox_icon">
							<span class="iconfont icon-shouhuodizhi"></span>
						</view>
						<view class="functionBox_title">
							收货地址
						</view>
					</view>
					
					<view class="functionBoxChoose" @click="toRedeem()">
						<view class="functionBox_icon">
							<span class="iconfont icon-saoma"></span>
						</view>
						<view class="functionBox_title">
							兑换码
						</view>
					</view>
					
					<view class="functionBoxChoose" @click="toInvite()">
						<view class="functionBox_icon">
							<span class="iconfont icon-yaoqinghaoyou"></span>
						</view>
						<view class="functionBox_title">
							邀请有礼
						</view>
					</view>
					
					<view class="functionBoxChoose" @click="toPrivacy()">
						<view class="functionBox_icon">
							<span class="iconfont icon-dingdanyichenggong"></span>
						</view>
						<view class="functionBox_title">
							平台须知
						</view>
					</view>
					
				</view>
			</view>
			
			<view class="verizon">
				当前版本&nbsp;1.0
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toInformation(){
				uni.navigateTo({
					url:"../information/information"
				})
			},
			toLevel(){
				uni.navigateTo({
					url:"../level/level"
				})
			},
			toCode(){
				uni.navigateTo({
					url:"../code/code"
				})
			},
			toPointsStore(){
				uni.navigateTo({
					url:"../pointsstore/pointsstore"
				})
			},
			toOrder(){
				uni.switchTab({
					url:"../order/order"
				})
			},
			toAddress(){
				uni.navigateTo({
					url:"../address/address"
				})
			},
			toReedem(){
				uni.navigateTo({
					url:"../redeem/redeem"
				})
			},
			toInvite(){
				uni.navigateTo({
					url:"../invite/invite"
				})
			},
			toPrivacy(){
				uni.navigateTo({
					url:"../privacy/privacy"
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		
		background-color: #F2F2F2;
		padding-bottom: 60rpx;
		z-index: -2;
		
		.bgcBox{
			// border: 1px solid black;
			width: 750rpx;
			height: 500rpx;
			z-index: -1;
			
			image{
				width: 750rpx;
				height: 500rpx;
				// z-index: ;
			}
		}

			
		.userInfoBox{
			background-color: white;
			position: relative;
			// left: 25rpx;
			// border: 1px solid black;
			width: 700rpx;
			height: 400rpx;
			margin: 0 auto;
			margin-top: -80rpx;
			z-index: 2;
			background-color: #FFFFFF;
			border-radius: 5%;
			display: flex;
			flex-flow: column nowrap;
			
			.userInfoBox_up,.userInfoBox_down{
				// border: 1px solid black;
				width: 700rpx;
				height: 200rpx;
				border-radius: 5%;
				display: flex;
				flex-flow: row nowrap;
				// padding-left: 30rpx;
				
				.uibu_left{
					// border: 1px solid black;
					width: 200rpx;
					height: 200rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
					margin-left: 20rpx;
					
					.avator{
						border: 4px solid #FFFFFF;
						width: 180rpx;
						height: 180rpx;
						border-radius: 50%;
						position: absolute;
						top: -40rpx;
						background-color: black;
						z-index: 2;
						
						image{
							width: 180rpx;
							height: 180rpx;
							border-radius: 50%;
						}
						
					}
					.membership_level{
						// border: 1px solid black;
						width: 150rpx;
						height: 40rpx;
						position: absolute;
						top: 130rpx;
						z-index: 3;
						background-color: #FFF9E0;
						text-align: center;
						color: #9F500A;
			
					}
					
					
				}
				.uibu_right{
					// border: 1px solid black;
					width: 460rpx;
					height: 200rpx;
					display: flex;
					flex-flow: column nowrap; 
					justify-content: center;
					// align-items: center;
					margin-left: 20rpx;
					
					.uibu_right_up{
						// border: 1px solid black;
						margin-bottom: 10rpx;
					}
					.uibu_right_down{
						// border: 1px solid black;
					}
					
					
				}
				
				
				.uibd{
					// border: 1px solid black;
					width: 233.3rpx;
					height: 200rpx;
					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					align-items: center;
					
					
					.uibd_title{
						// border: 1px solid black;
						font-size: 40rpx;
						color: #FB003B;
					}
					
					.uibd_subtitle{
						// border: 1px solid black;
						font-size: 30rpx;
						color: #333333;
					}
					
				}
				
				
				
			}
			
			
			
		}
			
		.function{
			background-color: white;
			// border: 1px solid black;
			width: 700rpx;
			height: 400rpx;
			border-radius: 5%;
			margin: 40rpx auto;
			
			.function_title{
				// border: 1px solid black;
				padding-left: 20rpx;
				height: 80rpx;
				font-size: 35rpx;
				// vertical-align: middle;
				line-height: 80rpx;
			}
			
			.functionBox{
				// border: 1px solid black;
				width: 700rpx;
				height: 300rpx;
				display: flex;
				flex-flow: row wrap;
				
				.functionBoxChoose{
					// border: 1px solid black;
					width: 170rpx;
					height: 150rpx;
					
					display: flex;
					flex-flow: column nowrap; 
					justify-content: center;
					align-items: center;
					
					.functionBox_icon{
						color: #FC3B6D;
						span{
							font-size: 60rpx;
							font-weight: bold;
						}
					}
					.functionBox_title{
						margin-top: 10rpx;
						font-size: 25rpx;
					}
					
				}
			}
			
			
			
		}
			
			.verizon{
				// border: 1px solid black;
				text-align: center;
				font-size: 30rpx;
				color: #A0A0A0;
			}
		
		
	}
	
</style>
