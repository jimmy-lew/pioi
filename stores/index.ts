import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
	const elementInViewIndex = ref(0)

	return { elementInViewIndex }
})
