<script setup lang="ts">
const target = ref(null)
const { elementX, elementY } = useMouseInElement(target)
</script>

<template>
	<div ref="target" class="button cursor-pointer flex relative rounded-md bg-[#444]" :style="{ '--x': `${elementX}px`, '--y': `${elementY}px` }">
		<div class="content">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.button::before {
    @apply content-default absolute inset-0;
    background: radial-gradient(6rem circle at var(--x) var(--y),hsla(0,0%,100%,.5),transparent 40%);
    border-radius: inherit;
}

.content {
    @apply m-px py-2 px-4 text-white flex justify-between items-center gap-2 text-xs bg-base-100;
    border-radius: inherit;
    z-index: 1000;
}
</style>
