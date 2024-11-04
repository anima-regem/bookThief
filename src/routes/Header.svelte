<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	let isScrolled = false;
	let menuOpen = false;

	// Handle scroll effect
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			isScrolled = window.scrollY > 20;
		});
	}
</script>

<header 
	class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
	class:scrolled={isScrolled}
>
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<!-- Logo/Brand -->
			<div class="flex items-center space-x-4">
				<a href="/" class="flex items-center space-x-2">
					<svg 
						class="w-8 h-8 text-white" 
						viewBox="0 0 24 24" 
						fill="none" 
						stroke="currentColor" 
						stroke-width="2"
					>
						<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
						<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
					</svg>
					<span class="text-white font-semibold text-lg">BookThief</span>
				</a>
			</div>

			<!-- Navigation -->
			<nav class="hidden md:flex items-center space-x-6">
				<a 
					href="/" 
					class="text-gray-300 hover:text-white transition-colors"
					class:active={$page.url.pathname === '/'}
				>
					Home
				</a>
				<a 
					href="/about" 
					class="text-gray-300 hover:text-white transition-colors"
					class:active={$page.url.pathname === '/about'}
				>
					About
				</a>
				<a 
					href="https://github.com/anima-regem/bookThief" 
					target="_blank" 
					rel="noopener noreferrer" 
					class="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
				>
					<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"/>
					</svg>
					<span>GitHub</span>
				</a>
			</nav>

			<!-- Mobile Menu Button -->
			<button 
				class="md:hidden text-gray-300 hover:text-white focus:outline-none"
				on:click={() => menuOpen = !menuOpen}
			>
				<svg 
					class="w-6 h-6" 
					fill="none" 
					stroke="currentColor" 
					viewBox="0 0 24 24"
				>
					{#if !menuOpen}
						<path 
							stroke-linecap="round" 
							stroke-linejoin="round" 
							stroke-width="2" 
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{:else}
						<path 
							stroke-linecap="round" 
							stroke-linejoin="round" 
							stroke-width="2" 
							d="M6 18L18 6M6 6l12 12"
						/>
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile Menu -->
		{#if menuOpen}
			<div 
				class="md:hidden py-4"
				transition:fade={{ duration: 200 }}
			>
				<div class="flex flex-col space-y-3">
					<a 
						href="/" 
						class="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
						class:active={$page.url.pathname === '/'}
						on:click={() => menuOpen = false}
					>
						Home
					</a>
					<a 
						href="/about" 
						class="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
						class:active={$page.url.pathname === '/about'}
						on:click={() => menuOpen = false}
					>
						About
					</a>
					<a 
						href="https://github.com/anima-regem/bookThief" 
						target="_blank" 
						rel="noopener noreferrer" 
						class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
						on:click={() => menuOpen = false}
					>
						<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"/>
						</svg>
						<span>GitHub</span>
					</a>
				</div>
			</div>
		{/if}
	</div>
</header>

<style>
	header {
		letter-spacing: -0.025em;
	}

	header.scrolled {
		background-color: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(16px);
	}

	.active {
		color: white;
	}
</style>