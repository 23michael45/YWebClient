<template>
	<view class="content">
		<scroll-view class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==top.TabCur?'text-orange cur':''" v-for="(item,index) in top.item"
				 :key="index" @tap="tabSelect" :data-id="index">
					{{top.item[index]}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		props: {
			top: {
				type: Object
			}
		},
		data() {
			return {

			}
		},
		methods: {
			tabSelect(e) {
				//使用this.$parent调用父组件的属性值
				this.$parent.top.TabCur = e.currentTarget.dataset.id;
				this.$parent.top.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		},

	}
</script>
<style>
	@import url(../../colorui/main);
	@import url(../../colorui/icon);
</style>
