<template>
	<view class="content">

		<view class="carousel_img">
			<swiper circular="true" autoplay="true">
				<swiper-item v-for="(img,i) in carouselList" :key="i">
					<image :src="img.url"></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="orderBox" @click="toFood()">
			<view class="orderBox_left">
				<view class="orderBox_left_words01">到店自取</view>
				<view class="orderBox_left_words02">快速下单，免排队</view>
			</view>
			<view class="orderBox_right">
				<image src="../../static/pic/orderBox_logo.png"></image>
			</view>
		</view>

		<view class="chooseBox">
			<view class="prd_Content">
				<view class="prd" @click="toPointsStore()">
					<!-- points redeem discount -->
					<view class="prdBox">
						<view class="prdBox_title">
							积分商城
						</view>
						<view class="prdBox_subtitle">
							积分兑好礼
						</view>
						<view class="prdBox_icon">
							<span class="iconfont icon-dianpu" style="font-size: 70rpx;"></span>
						</view>
					</view>
				</view>
				<view class="prd" @click="toRedeem()">
					<view class="prdBox">
						<view class="prdBox_title">
							兑换码
						</view>
						<view class="prdBox_subtitle">
							点击兑好券
						</view>
						<view class="prdBox_icon">
							<span class="iconfont icon-erweima"></span>
						</view>
					</view>
				</view>
				<view class="prd" @click="toDiscount()">
					<view class="prdBox">
						<view class="prdBox_title">
							优惠券
						</view>
						<view class="prdBox_subtitle">
							用券更划算
						</view>
						<view class="prdBox_icon">
							<span class="iconfont icon-youhuiquan"></span>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="myPoints" @click="toPointsStore()">
			<view class="myPointsBox">
				<view class="myPointsBox_left">
					<view class="myPointsBox_title">
						我的积分 <text class="myPointsBox_title_num">44</text>
					</view>
					<view class="myPointsBox_subtitle">
						可前往积分商城兑换商品
					</view>
				</view>
				<view class="myPointsBox_right">
					<view class="myPoints_icon">
						<view class="myPointsBox_icon">
							<span class="iconfont icon-jifen"></span>
						</view>
					</view>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				carouselList: [{
						url: "https://www.mxbc.com/media/upload/index/%E4%B8%BB%E9%A1%B5banner1920x900--2_1.jpg"
					},
					{
						url: "https://www.mxbc.com/media/upload/index/%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8Ebanner1920x900.jpg"
					},
					{
						url: "https://www.mxbc.com/media/upload/index/%E4%B8%BB%E9%A1%B5banner1920x900--2_1.jpg"
					},
					{
						url: "https://www.mxbc.com/media/upload/index/%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8Ebanner1920x900.jpg"
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			toFood() {
				uni.switchTab({
					url: "../food/food"
				})
			},
			toPointsStore() {
				uni.navigateTo({
					url: "../pointsstore/pointsstore"
				})
			},
			toRedeem() {
				uni.navigateTo({
					url: "../redeem/redeem"
				})
			},
			toDiscount() {
				uni.navigateTo({
					url: "../discount/discount"
				})
			},
			async getAllCarousels() {
				// const res = await this $myRequest({

				// })
			}

		}
	}
</script>

<style lang="scss">
	.content {
		margin-bottom: 30rpx;

		.carousel_img {

			// border: 1px solid black;
			// height: 500rpx;
			// background-color: orange;
			swiper {
				width: 750rpx;
				height: 500rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.orderBox {
			box-shadow: 0 6px 9px 3px #DFDFDF;
			margin: -40rpx auto;
			// border: 1px solid black;
			width: 700rpx;
			height: 400rpx;
			border-radius: 5%;
			background-color: #FFFFFF;
			position: relative;
			// z-index: 1;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;

			.orderBox_left {
				// border: 1px solid black;
				height: 400rpx;
				width: 350rpx;
				font-size: 40rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-flow: column nowrap;
				border-right: 1px solid #ECECEC;

				.orderBox_left_words01 {
					color: #2C2C2C;
					font-weight: bold;
					font-size: 50rpx;
				}

				.orderBox_left_words02 {
					color: #B5B5B5;
					font-size: 26rpx;
				}

			}

			.orderBox_right {
				// border: 1px solid black;
				height: 400rpx;
				width: 350rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					height: 350rpx;
					width: 350rpx;
				}
			}

		}

		.chooseBox {
			// margin-top:40rpx ;
			margin-top: 80rpx;
			// border: 1px solid black;
			width: 750rpx;
			// height: 800rpx;
			display: flex;
			flex-flow: row nowrap;

			.prd_Content {
				// border: 1px solid black;
				margin: 0 auto;
				width: 700rpx;
				display: flex;
				flex-flow: row nowrap;


				.prd {
					margin: 0 auto;
					box-shadow: 0 0 9px 3px #DFDFDF;
					// border: 1px solid black;
					width: 220rpx;
					height: 300rpx;
					// margin-left: 20rpx;
					border-radius: 5%;
					display: flex;
					justify-content: center;
					align-items: center;

					.prdBox {
						// border: 1px solid black;
						width: 200rpx;
						height: 200rpx;
						display: flex;
						flex-flow: column nowrap;
						justify-content: center;
						align-items: center;

						.prdBox_title {
							// border: 1px solid black;
							width: 200rpx;
							height: 60rpx;
							text-align: center;
							font-weight: bold;
							font-size: 36rpx;
						}

						.prdBox_subtitle {
							// border: 1px solid black;
							width: 200rpx;
							height: 40rpx;
							text-align: center;
							font-size: 20rpx;
							color: #9F9F9F;

						}

						.prdBox_icon {
							// border: 1px solid black;
							width: 200rpx;
							height: 100rpx;
							display: flex;
							justify-content: center;
							align-items: center;

							span {
								font-size: 50rpx;
								font-weight: bold;
							}
						}

					}

				}

			}



		}

		.myPoints {
			// border: 1px solid black;
			width: 750rpx;
			height: 300rpx;
			margin-top: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.myPointsBox {
				box-shadow: 0 0 9px 3px #DFDFDF; //#EFEFEF
				// border: 1px solid black;
				width: 700rpx;
				height: 300rpx;
				border-radius: 5%;
				display: flex;
				flex-flow: row nowrap;

				.myPointsBox_left {
					// border: 1px solid black;
					width: 470rpx; //500rpx
					height: 300rpx;
					border-radius: 5%;
					margin-left: 30rpx;

					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					// align-items: center;

					.myPointsBox_title {
						// border: 1px solid black;
						color: #262626;


						.myPointsBox_title_num {
							color: red;
							font-size: 50rpx;
							margin-left: 10rpx;
						}

					}

					.myPointsBox_subtitle {
						// border: 1px solid black;
						color: #878787;
					}

				}

				.myPointsBox_right {
					// border: 1px solid black;
					width: 200rpx;
					height: 300rpx;
					border-radius: 5%;
					display: flex;
					justify-content: center;
					align-items: center;

					span {
						font-size: 100rpx;
						font-weight: bold;
					}

				}


			}

		}

	}
</style>
