<script>
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>About - BookThief</title>
  <meta name="description" content="About BookThief - AI-powered book recommendations" />
</svelte:head>

<div class="min-h-screen pt-24 px-4" in:fade={{ duration: 300, delay: 150 }}>
  <div class="max-w-3xl mx-auto">
    <section class="space-y-8">
      <!-- Hero Section -->
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold text-white">About BookThief</h1>
        <p class="text-xl text-gray-400">Discover books that match your personality.</p>
      </div>

      <!-- Main Content -->
      <div class="prose prose-invert max-w-none">
        <div class=" backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">How it Works</h2>
          <p class="text-gray-300 leading-relaxed">
            BookThief uses advanced AI to analyze your self-description and match you with books that resonate with your 
            personality, interests, and character traits. Whether you're a dark lord seeking power or a wandering wizard 
            looking for adventure, we've got the perfect reads for you.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class=" backdrop-blur-sm border border-gray-800/30 rounded-xl p-6">
            <div class="flex items-start space-x-4">
              <div class=" rounded-lg p-2">
                <svg class="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                  <path d="M13 2v7h7"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">Personalized Recommendations</h3>
                <p class="text-gray-400">Get book suggestions tailored to your unique character description.</p>
              </div>
            </div>
          </div>

          <div class=" backdrop-blur-sm border border-gray-800/30 rounded-xl p-6">
            <div class="flex items-start space-x-4">
              <div class=" rounded-lg p-2">
                <svg class="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  <path d="M12 8v4M12 16h.01"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">AI-Powered Analysis</h3>
                <p class="text-gray-400">Our AI understands context and nuance to find the perfect book matches.</p>
              </div>
            </div>
          </div>

          <div class=" backdrop-blur-sm border border-gray-800/30 rounded-xl p-6">
            <div class="flex items-start space-x-4">
              <div class=" rounded-lg p-2">
                <svg class="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">Detailed Insights</h3>
                <p class="text-gray-400">Understand why each book was chosen for you with personalized explanations.</p>
              </div>
            </div>
          </div>

          <div class=" backdrop-blur-sm border border-gray-800/30 rounded-xl p-6">
            <div class="flex items-start space-x-4">
              <div class=" rounded-lg p-2">
                <svg class="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 7h-9M20 11h-9M20 15h-9M3 7h2M3 11h2M3 15h2"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">Diverse Library</h3>
                <p class="text-gray-400">Access recommendations from a vast collection of books across all genres.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mt-12  backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
          <h2 class="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-white mb-2">How accurate are the recommendations?</h3>
              <p class="text-gray-400">Our AI model has been trained on a vast library of books and character analyses, allowing it to make highly relevant recommendations based on your description.</p>
            </div>
            <div>
              <h3 class="text-lg font-medium text-white mb-2">Can I get recommendations for specific genres?</h3>
              <p class="text-gray-400">Yes! Simply include genre preferences in your description, and our AI will take that into account when making recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>