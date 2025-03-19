<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

	const projects = [
		{
			title: 'Cnotes',
			description: 'Your personal notes, organized and accessible anywhere. Features include secure cloud storage, smart organization, collaborative sharing, and rich text formatting.',
			image: '/images/cnotes-preview.png',
			link: 'https://cnotes.pages.dev/',
			github: 'https://github.com/PD-Enterprise/cnotes',
			tags: ['Notes', 'Cloud Storage', 'Collaboration']
		},
		{
			title: 'Grade-AI',
			description: 'An AI-powered grading assistant for educators and students. Streamline the grading process with intelligent assessment tools.',
			image: '/images/grade-ai-preview.png',
			link: 'https://grade-ai.pages.dev/',
			github: 'https://github.com/PD-Enterprise/Grade-AI',
			tags: ['AI', 'Education', 'Grading']
		}
	];
</script>

<div class="min-h-screen bg-base-200 py-12 px-4">
	{#if isVisible}
		<div class="max-w-7xl mx-auto" in:fade={{ duration: 1000 }}>
			<div class="text-center mb-16" in:fly={{ y: 50, duration: 1000 }}>
				<h1 class="text-5xl font-bold mb-4 gradient-text">Our Applications</h1>
				<p class="text-lg opacity-80 max-w-2xl mx-auto">
					Explore our innovative solutions designed to enhance learning and productivity
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				{#each projects as project, i}
					<div 
						class="card bg-base-100 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
						in:fly={{ x: i % 2 === 0 ? -50 : 50, duration: 1000, delay: i * 200 }}
					>
						{#if project.image}
							<figure class="relative overflow-hidden group">
								<img 
									src={project.image} 
									alt={project.title} 
									class="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" 
								/>
								<div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div class="text-white text-xl font-bold">View Project</div>
								</div>
							</figure>
						{/if}
						<div class="card-body">
							<h2 class="card-title text-2xl mb-2">{project.title}</h2>
							<div class="flex flex-wrap gap-2 mb-4">
								{#each project.tags as tag}
									<span class="badge badge-primary badge-outline">{tag}</span>
								{/each}
							</div>
							<p class="py-4 text-base-content/80">{project.description}</p>
							<div class="card-actions flex-col gap-3 mt-4">
								<a 
									href={project.link} 
									target="_blank" 
									rel="noopener noreferrer" 
									class="btn btn-primary w-full group relative overflow-hidden"
								>
									<span class="relative z-10">Explore Application</span>
									<div class="absolute inset-0 bg-primary-focus transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
								</a>
								<a 
									href={project.github} 
									target="_blank" 
									rel="noopener noreferrer" 
									class="btn btn-outline btn-secondary w-full group relative overflow-hidden"
								>
									<span class="relative z-10 flex items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
										View Repository
									</span>
									<div class="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center" in:fade={{ delay: 1000, duration: 1000 }}>
				<a 
					href="/" 
					class="btn btn-outline btn-lg hover:scale-105 transform transition-transform duration-300"
				>
					Back to Home
				</a>
			</div>
		</div>
	{/if}
</div>

<style>
	.gradient-text {
		background: linear-gradient(135deg, hsl(var(--p)) 0%, hsl(var(--s)) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.shadow-3xl {
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	:global(.dark) .gradient-text {
		background: linear-gradient(135deg, hsl(var(--p)) 0%, hsl(var(--s)) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style> 