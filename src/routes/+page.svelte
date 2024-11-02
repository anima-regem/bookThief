<script>
	import { fade } from 'svelte/transition';
	
	let inputValue = '';
	let isTyping = false;
	let showPlaceholder = true;
	
	function handleFocus() {
	  isTyping = true;
	  showPlaceholder = false;
	}
	
	function handleBlur() {
	  isTyping = false;
	  showPlaceholder = !inputValue;
	}
	
	function handleSubmit() {
	  console.log('Submitted:', inputValue);
	  // Handle your submit logic here
	}
  </script>
  
  <svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
  </svelte:head>
  
  <main class="main-container">
	<section class="search-container">
	  <div class="content-wrapper">
		<div class="search-box">
		  {#if showPlaceholder}
			<span 
			  class="placeholder" 
			  transition:fade
			>
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
			<button 
			  on:click={handleSubmit}
			  class:active={inputValue.length > 0}
			>
			  Generate
			</button>
		  </div>
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
	  /* max-width: 800px; */
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
  
	h1 {
	  color: #ffffff;
	  font-size: 2rem;
	  font-weight: 600;
	  text-align: center;
	  margin: 0;
	  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
  
	  h1 {
		font-size: 1.5rem;
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