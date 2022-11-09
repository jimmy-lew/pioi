<script setup lang="ts">

</script>

<template>
	<div class="relative m-auto">
		<div id="#circle" class="absolute translate-x-1/2 right-1/2 content-default rounded-full bg-[#111] w-4/5 -top-[15%] aspect-square" />
		<!-- <div class="card w-fit mx-auto">
			<div class="card-body">
				Test
			</div>
		</div> -->
		<div class="hero min-h-screen">
			<div class="hero-content text-center">
				<div class="flex flex-col items-center max-w-md">
					<h1 class="flex items-center gap-2 text-5xl font-bold">
						Welcome to PIOI
					<!-- <Icon size="48" name="ic:round-terminal" class="mt-1"/>	 -->
					</h1>
					<div class="relative flex flex-col justify-center items-center overflow-hidden w-96 join-card my-8 rounded-lg px-4">
						<div class="w-full join-card-content rounded-lg flex flex-col mt-4 min-h-[6rem]" />
						<div class="join-card-footer">
							<div class="div absolute -left-4 border-t-[0.5px] border-white/20" />
							<div class="w-1/2" />
							<div class="w-1/2 flex justify-end" />
						</div>
					</div>
					<Button />
				<!-- <div class="flex flex-col items-center justify-center gap-4">
					<div class="flex items-center justify-center gap-2">
						<Icon size="32" name="ci:location" />
						Ngee Ann Polytechnic
					</div>
					<div class="flex items-center justify-center gap-2">
						<Icon size="30" name="bi:calendar-week-fill" />
						Saturday, 21 Jan 2023 <br>
						12:30pm - 6:45pm
					</div>
				</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
		.join-card {
			box-shadow: 0 -2px 6px hsl(0deg 0% 100% / 17%), 0 5px 18px rgb(0 0 0 / 40%), 0 4px 40px 8px rgb(0 0 0 / 40%), 0 1px 4px -1px rgb(0 0 0 / 30%), inset 0 0 0 0.3px hsl(0deg 0% 100% / 30%), 0 0 0 0.5px hsl(0deg 0% 100% / 40%);
			background: linear-gradient(177.75deg,rgba(26,27,30,.9) 1.89%,rgba(12,13,17,.5) 98.11%);
			z-index: 5001;
		}

		.join-card-content {
			box-shadow: 0 2px 2px rgb(4 4 7 / 45%), 0 8px 24px rgb(4 4 7 / 60%);
			border: .5px solid transparent;
			background: linear-gradient(138.16deg,#313135 -14.83%,#1f2024 92.59%) padding-box,linear-gradient(94.85deg,#8c8c93 .63%,#3f3f43) border-box;
		}

		.join-card-footer {
			@apply rounded-b-lg pt-2 w-full text-white flex items-end justify-between mb-2 relative
		}

		.join-card-footer::after {
			@apply content-default absolute -inset-y-4 -bottom-2;
			background-color: rgba(26,27,31,.98);
			height: 75px;
		}

		.div {
			width: calc(100% + 32px);
		}
</style>
