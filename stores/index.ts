import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
	const elementInView = ref(0)
	function setElementInView(index: number) {
		elementInView.value = index
	}

	return { elementInView, setElementInView }
})
