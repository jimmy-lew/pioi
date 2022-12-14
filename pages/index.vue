<script setup lang="ts">
const goToWorkshopRegistration = () => {
	navigateTo('https://forms.office.com/r/rfr8st7m0X', {
		external: true,
	})
}

onKeyStroke('w', (e) => {
	goToWorkshopRegistration()
})
</script>

<template>
	<div class="relative m-auto">
		<!-- <TheHeroCircle /> -->
		<!-- <div class="pt-16 sm:pt-32" /> -->
		<Header />
		<div id="hero" class="grid h-screen">
			<div class="my-auto">
				<h1 class="relative text-center text-2xl sm:text-6xl text-white font-bold">
					Welcome to PIOI
				</h1>
				<h2 class="mt-4 text-center text-[#8a8c93] italic">
					<span class="font-bold">The</span> informatics olympiad for polytechnic and ITE students
				</h2>
				<div class="relative mx-auto max-w-4xl">
					<TheJoinCard />
				</div>
			</div>
		</div>
		<div class="mx-auto max-w-7xl p-8 flex flex-col items-center">
			<Section>
				<div class="rounded-lg w-[640px] h-[480px] bg-cover bg-[url(https://support.hackerrank.com/hc/article_attachments/1500013934961/Task_Description.JPG)]" />
				<div class="ml-8 flex flex-col">
					<h2 class="text-xl text-center">
						Contest Platform <br> & Languages
					</h2>
					<div class="grid grid-cols-2 w-fit gap-4 mt-auto">
						<NuxtLink to="https://www.python.org/">
							<Card class="h-24 w-32">
								<div class="p-4 h-full flex items-center justify-center text-sm font-bold gap-4">
									<Icon size="20" name="fa6-brands:python" />
									Python
								</div>
							</Card>
						</NuxtLink>
						<NuxtLink to="https://docs.oracle.com/en/java/">
							<Card class="h-24 w-32">
								<div class="p-4 h-full flex items-center justify-center text-sm font-bold gap-4">
									<Icon size="24" name="la:java" />
									Java
								</div>
							</Card>
						</NuxtLink>
						<NuxtLink to="https://en.cppreference.com/w/">
							<Card class="h-24 w-32">
								<div class="p-4 h-full flex items-center justify-center text-sm font-bold gap-4">
									<Icon size="20" name="file-icons:c" />
									C++
								</div>
							</Card>
						</NuxtLink>
						<NuxtLink to="https://go.dev/">
							<Card class="h-24 w-32">
								<div class="p-4 h-full flex items-center justify-center text-sm font-bold gap-4">
									<Icon size="24" name="file-icons:go" />
									GoLang
								</div>
							</Card>
						</NuxtLink>
					</div>
				</div>
			</Section>
			<Section>
				<div class="flex flex-col gap-8 mx-auto">
					<h2 class="text-xl text-center">
						Introductory Workshops
						<p class="text-sm text-center text-[#8a8c93]">
							We know that this may be the first time you have participated in an informatics Olympiad.
							<br>
							So, to help ease you into the competition, we have prepared some workshops so
							<br>
							that you can learn the basics of competitive programming!
						</p>
					</h2>
					<div class="grid grid-cols-2 w-fit gap-4 mx-auto">
						<Card class="w-72">
							<div class="p-4 flex flex-col justify-center gap-2">
								<div class="flex items-center gap-2 text-sm font-bold">
									<Icon size="20" name="file-icons:c" />
									Basics of C++
								</div>
								<Chip>
									<Icon name="line-md:calendar" class="text-[#8c8c93]" />
									6 Mar 2023, 2pm - 5pm
								</Chip>
								<p>
									As some of you may not have much knowledge about C++, this workshop will introduce you to the programming language and prepare you for the challenges!
								</p>
							</div>
						</Card>
						<Card class="w-72">
							<div class="p-4 flex flex-col justify-center gap-2">
								<div class="flex items-center gap-2 text-sm font-bold">
									<Icon size="20" name="heroicons:square-3-stack-3d-20-solid" />
									Introduction to Data Structures
								</div>
								<Chip>
									<Icon name="line-md:calendar" class="text-[#8c8c93]" />
									7 Mar 2023, 2pm - 5pm
								</Chip>
								<p>
									Effective use of data structures complement good algorithms. But what are data structures and how can we use them? In this workshop, we will introduce common data structures, how they work under the hood and how they can be applied.
								</p>
							</div>
						</Card>
						<Card class="w-72">
							<div class="p-4 flex flex-col justify-center gap-2">
								<div class="flex items-center gap-2 text-sm font-bold">
									<Icon size="20" name="bx:network-chart" />
									Introduction to Algorithms
								</div>
								<Chip>
									<Icon name="line-md:calendar" class="text-[#8c8c93]" />
									8 Mar 2023, 2pm - 5pm
								</Chip>
								<p>
									Algorithms make the difference between executing your program in the next day or the next year. This workshop will give you a rough footing on the fundamentals of algorithms, so, if you don???t have much prior knowledge on algorithms, this is the workshop for you!
								</p>
							</div>
						</Card>
						<Card class="w-72">
							<div class="p-4 flex flex-col justify-center gap-2">
								<div class="flex items-center gap-2 text-sm font-bold">
									<Icon size="20" name="fluent:book-question-mark-24-filled" />
									Practical Use of Algorithms
								</div>
								<Chip>
									<Icon name="line-md:calendar" class="text-[#8c8c93]" />
									9 Mar 2023, 2pm - 5pm
								</Chip>
								<p>
									What's the point of theory if we do not know how to apply it? In this workshop, we will go through the thought process and dive into how the algorithms taught in previous workshops can be applied in real-world scenarios and practical programming questions!
								</p>
							</div>
						</Card>
					</div>
					<div class="inline-flex justify-end">
						<Button class="text-white/70" @click="goToWorkshopRegistration">
							Join <span class="rounded w-4 h-4 bg-white text-black font-semibold text-center">W</span>
						</Button>
					</div>
				</div>
			</Section>
		</div>
		<Footer />
	</div>
</template>

<style scoped>
	#hero {
		background: radial-gradient(ellipse 80% 50% at 50% -20%,rgba(200, 200, 200, 0.3), rgba(0, 0, 0, 0));
	}
</style>
