<script setup lang="ts">
const target = ref(null)
const { elementX, elementY } = useMouseInElement(target)
</script>

<template>
	<div ref="target" class="test" :style="{ '--x': `${elementX}px`, '--y': `${elementY}px` }">
		<div class="test-content">
			<img src="https://lazy.so/_next/static/media/gem.23df2cf9.png" class="w-6">
			Rediscover forgotten ideas
		</div>
	</div>
</template>

<style scoped>
.test {
    @apply w-32 h-24 bg-gray-800 relative rounded-lg;
}

.test::before {
    @apply content-default absolute inset-0;
    background: radial-gradient(20rem circle at var(--x) var(--y),hsla(0,0%,100%,.5),transparent 40%);
    border-radius: inherit;
}

.test-content {
    @apply inset-px absolute p-4 text-white flex flex-col justify-between text-xs bg-base-100;
    border-radius: inherit;
}
</style>
