<template>
	<view>
		
		<view class="avator_Box">
			<view class="avator">
				<image :src="avator_src"></image>
			</view>
		</view>
		
		<button @click="setAvator">更换头像</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avator_src:""
			}
		},
		onLoad() {
			this.getAvator()
		},
		methods: {
			getAvator(){
				uni.request({
					url:"http://localhost:8088/user/getAvatorSrc",
					method:"GET",
					data:{},
					success: (res) => {
						this.avator_src=res.data
						console.log(res)
					}
				})
			},
			setAvator(){
				// uni.request({
				// 	url:"http://localhost:8088/user/updateAvatorSrc",
				// 	method:"GET",
				// 	data:{}
					
				// }),
				
				uni.chooseImage({
					count:1,
					sizeType:['original'],//上传图片 原图（不压缩）
					extension:['jpg','jpeg','png'],//限制上传图片格式
					//sourceType:[],
					success: (res) => { //选择完图片 进入上传操作
						let imageFile = res.tempFilePaths[0]
						console.log(imageFile)
						
						var uploadTask = uni.uploadFile({
							headers:{
								"Content-Type":"multipart/form-data",
								"username":"toby",
								'Authorization': 'ncn1dTVYryBsMTRN67BblF0tSgWJJu1t'
								},
							url:"https://sm.ms/api/v2/upload",
							filePath:imageFile,//要上传的图片资源路径
							name:"file",
							success: (res1) => {
								console.log(res1)
							},
							fail:(res)=>{
								console.log(res)
							},
							complete:(res)=>{
								console.log(res)
							}
						})
					
					}
					
				})
				
			},
		}
	}
</script>

<style lang="scss">
	.avator_Box{
		border: 1px solid black;
		width: 750rpx;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		
		.avator{
			border: 1px solid black;
			// margin: 0 atuo;
			border-radius: 50%;
			width: 200rpx;
			height: 200rpx;
			
			image{
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
			}
			
		}
		
	}

</style>
