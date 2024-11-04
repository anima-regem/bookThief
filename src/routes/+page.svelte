<script>
	import { fade } from 'svelte/transition';
	import BookCard from '../lib/components/BookCard.svelte';

	let inputValue = '';
	let isTyping = false;
	let showPlaceholder = true;
	let isLoading = false;
	let books = [];
	let prompt = '';

	function handleFocus() {
		isTyping = true;
		showPlaceholder = false;
	}

	function handleBlur() {
		isTyping = false;
		showPlaceholder = !inputValue;
	}

	async function handleSubmit() {
		if (inputValue.trim() == '') {
			inputValue = 'I am Saruman, the White Wizard';
		}

		isLoading = true;
		try {
			const res = await fetch('/api/generate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ text: inputValue })
			});
			books = await res.json();
		} catch (error) {
			console.error('Error:', error);
		} finally {
			isLoading = false;
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="bookThief" />
</svelte:head>

<main class="main-container">
	<section class="search-container">
		<div class="content-wrapper">
			<div class="search-box">
				{#if showPlaceholder}
					<span class="placeholder" transition:fade>
						Describe yourself in a few words... eg. I am Sauron, the Dark Lord
					</span>
				{/if}

				<textarea
					bind:value={inputValue}
					on:focus={handleFocus}
					on:blur={handleBlur}
					class:typing={isTyping}
					rows="4"
				></textarea>

				<div class="button-container">
					<button on:click={handleSubmit} class:active={inputValue.length > 0} disabled={isLoading}>
						{#if isLoading}
							<span class="loading"></span>
							Generating...
						{:else}
							Generate
						{/if}
					</button>
				</div>

				{#if books.length > 0 && !isLoading}
					<div class="results-container" transition:fade>
						<h2>Recommended Books</h2>
						<div class="flex flex-wrap justify-center gap-6">
							{#each books as book}
								<BookCard
									name={book.title}
									author={book.author}
									reason={book.reason}
									image={book.imgURL}
									year={book.year}
								/>
							{/each}
						</div>
					</div>
				{/if}

				{#if isLoading}
					<div class="results-container" transition:fade>
						<h2>Finding your books...</h2>
						<div class="flex flex-wrap justify-center gap-6">
							{#each Array(6) as _}
								<div class="w-80 rounded-lg skeleton-item" style="padding-top: calc(320px * 0.5625)"></div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>
</main>

<style>
	.main-container {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-container {
		width: 100%;
		margin: 0 2rem;
		padding: 2rem;
		background: rgba(45, 45, 45, 0.5);
		border-radius: 16px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}

	.search-box {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.placeholder {
		position: absolute;
		left: 1rem;
		top: 1.5rem;
		color: #888;
		pointer-events: none;
		transition: all 0.3s ease;
		font-size: 1rem;
	}

	textarea {
		width: 100%;
		min-height: 150px;
		padding: 1.25rem;
		font-size: 1.1rem;
		color: #fff;
		background-color: rgba(25, 25, 25, 0.8);
		border: 2px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		transition: all 0.3s ease;
		resize: vertical;
		line-height: 1.6;
		font-family: inherit;
	}

	textarea:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
		background-color: rgba(35, 35, 35, 0.9);
	}

	textarea.typing {
		background-color: rgba(35, 35, 35, 0.9);
	}

	.button-container {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	button {
		padding: 1rem 2.5rem;
		font-size: 1.1rem;
		color: #fff;
		background: linear-gradient(135deg, #4a4a4a, #3d3d3d);
		border: 2px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		cursor: pointer;
		transition: all 0.3s ease;
		width: auto;
		min-width: 200px;
		font-weight: 500;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}

	button:hover {
		background: linear-gradient(135deg, #5a5a5a, #4a4a4a);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	button:active {
		transform: translateY(1px);
	}

	button.active {
		background: linear-gradient(135deg, #6a6a6a, #5a5a5a);
		border-color: rgba(255, 255, 255, 0.2);
	}

	button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	/* Loading animation */
	.loading {
		display: inline-block;
		width: 16px;
		height: 16px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		border-top-color: #fff;
		animation: spin 1s ease-in-out infinite;
		margin-right: 0.5rem;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	/* Results section */
	.results-container {
		margin-top: 2rem;
		width: 100%;
	}

	h2 {
		color: #fff;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 1.5rem 0;
		text-align: center;
	}

	/* Loading skeleton */
	.skeleton-item {
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.1) 25%,
			rgba(255, 255, 255, 0.2) 50%,
			rgba(255, 255, 255, 0.1) 75%
		);
		background-size: 200% 100%;
		animation: loading 1.5s infinite;
	}

	@keyframes loading {
		0% { background-position: 200% 0; }
		100% { background-position: -200% 0; }
	}

	/* Custom scrollbar */
	textarea::-webkit-scrollbar {
		width: 8px;
	}

	textarea::-webkit-scrollbar-track {
		background: rgba(45, 45, 45, 0.5);
		border-radius: 4px;
	}

	textarea::-webkit-scrollbar-thumb {
		background: rgba(100, 100, 100, 0.5);
		border-radius: 4px;
	}

	textarea::-webkit-scrollbar-thumb:hover {
		background: rgba(120, 120, 120, 0.5);
	}

	/* Responsive design */
	@media (max-width: 640px) {
		.search-container {
			margin: 1rem;
			padding: 1.5rem;
		}

		textarea {
			font-size: 1rem;
			padding: 1rem;
		}

		button {
			padding: 0.875rem 2rem;
			font-size: 1rem;
		}
	}
</style>