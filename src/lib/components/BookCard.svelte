<script>
	import { fade } from 'svelte/transition';

	export let name;
	export let author;
	export let reason;
	export let image;
	export let year;

	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			showModal = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Card -->
<div
	class="w-56 group relative overflow-hidden rounded-lg border border-gray-800/30 transition-all duration-300 hover:border-gray-700/50 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 cursor-pointer"
	on:click={toggleModal}
>
	<!-- Image Container - 16:9 aspect ratio -->
	<div class="relative w-full h-80 pt-[56.25%] overflow-hidden rounded-t-lg">
		<img
			src={image}
			alt={name}
			class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
	</div>

	<!-- Content -->
	<div class="p-4 space-y-2">
		<!-- Title -->
		<h3
			class="font-semibold text-white text-sm leading-tight line-clamp-1 group-hover:text-gray-100"
		>
			{name}
		</h3>

		<!-- Author and Year -->
		<div class="flex items-center justify-between text-xs text-gray-400">
			<div class="flex items-center">
				<svg
					class="mr-1 h-3 w-3"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
					<circle cx="12" cy="7" r="4"></circle>
				</svg>
				<span class="truncate max-w-[120px]">{author}</span>
			</div>
			<div class="flex items-center">
				<svg
					class="mr-1 h-3 w-3"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
					<line x1="16" y1="2" x2="16" y2="6"></line>
					<line x1="8" y1="2" x2="8" y2="6"></line>
					<line x1="3" y1="10" x2="21" y2="10"></line>
				</svg>
				<span>{year}</span>
			</div>
		</div>

		<!-- Description -->
		<p class="text-gray-400 text-xs leading-relaxed line-clamp-2">
			{reason}
		</p>
	</div>
</div>

<!-- Modal -->
{#if showModal}
	<div
		class="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
		on:click={toggleModal}
		transition:fade={{ duration: 200 }}
	>
		<!-- Modal Content -->
		<div
			class="bg-[#1e1e1e] border border-gray-800 rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl"
			on:click|stopPropagation
		>
			<div class="flex flex-col md:flex-row">
				<!-- Image Section -->
				<div class="md:w-1/2 relative">
					<img src={image} alt={name} class="w-full h-full object-cover" />
					<button
						class="absolute top-4 right-4 md:hidden bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
						on:click={toggleModal}
					>
						<svg
							class="w-6 h-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>

				<!-- Content Section -->
				<div class="p-6 md:w-1/2 relative">
					<!-- Close button for larger screens -->
					<button
						class="hidden md:block absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
						on:click={toggleModal}
					>
						<svg
							class="w-6 h-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>

					<!-- Title -->
					<h2 class="text-xl font-semibold text-white mb-2">{name}</h2>

					<!-- Author -->
					<div class="flex items-center text-gray-400 mb-4">
						<svg
							class="mr-2 h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
						<span class="text-sm">{author}</span>
					</div>

					<!-- Year -->
					<div class="flex items-center text-gray-400 mb-6">
						<svg
							class="mr-2 h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
							<line x1="16" y1="2" x2="16" y2="6"></line>
							<line x1="8" y1="2" x2="8" y2="6"></line>
							<line x1="3" y1="10" x2="21" y2="10"></line>
						</svg>
						<span class="text-sm">Published in {year}</span>
					</div>

					<!-- Full Description -->
					<div class="space-y-4">
						<h3 class="text-sm font-semibold text-gray-300">Why this book?</h3>
						<p class="text-gray-400 text-sm leading-relaxed">
							{reason}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Add any additional styles here if needed */
</style>
