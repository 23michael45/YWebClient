<view class="login" :style="{height: height + 'px'}">
		<cu-custom class="seat" bgColor="bg-black" :isBack="false"><block slot="backText">返回</block><block slot="content">羽迹试试管理后台</block></cu-custom>
		<image src="../../static/img/login.jpg" mode="aspectFill"></image>
		<view class="btn-box">
			<button class="cu-btn round lines-white lg" @tap="showLogin">账号登录</button>
			<button class="cu-btn round lines-white lg" @tap="toRegiste">账号注册</button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	@import url('./phoneLogin.less');
</style>
