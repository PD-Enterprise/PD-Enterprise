<script lang="ts">
	// imports
	import { onMount } from 'svelte';
	import type { Post } from '../../types';
	import formatDate from '$lib/utils/formatDate';
	import Editor from '@tinymce/tinymce-svelte';
	import { theme } from '$lib/stores/store';
	import apiConfig from '$lib/utils/apiConfig';
	import { TINYMCE_API_KEY, getEditorConfig } from '$lib/utils/tinymceConfig';

	// variables
	let slug: string = '';
	let post: Post[] = [];
	let error: string = '';
	let conf = {
		...getEditorConfig(apiConfig.apiUrl),
		height: 700,
		editable_root: false,
		readonly: true
	};
	let editorVisible = true;
	let isLoading = true;

	// function to get Post from Database
	async function getPost(slug: string) {
		try {
			const response = await fetch(`${apiConfig.apiUrl}pd-enterprise/blog/posts/${slug}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});
			const result = await response.json();
			if (result.status === 200) {
				post = result.data;
			} else {
				error = result.message;
			}
		} catch (err) {
			error = 'Failed to fetch post';
		} finally {
			isLoading = false;
		}
	}

	onMount(async () => {
		slug = window.location.href.split('/blog/')[1];
		getPost(slug);

		theme.subscribe((value) => {
			if (value) {
				conf.skin = 'oxide';
				conf.content_css = 'light';
			} else {
				conf.skin = 'oxide-dark';
				conf.content_css = 'dark';
			}
			editorVisible = false;
			setTimeout(() => {
				editorVisible = true;
			}, 0);
		});
	});
</script>

<div class="min-h-screen bg-base-200">
	{#if isLoading}
		<div class="flex justify-center items-center min-h-screen">
			<span class="loading loading-spinner loading-lg"></span>
		</div>
	{:else if error}
		<div class="container mx-auto px-4 py-8">
			<div class="alert alert-error">
				<span>{error}</span>
			</div>
		</div>
	{:else if post.length > 0}
		<article class="container mx-auto px-4 py-8">
			<!-- Featured Image -->
			{#if post[0].image}
				<div class="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
					<img
						src={post[0].image}
						alt={post[0].title}
						class="w-full h-full object-cover"
					/>
				</div>
			{/if}

			<!-- Post Header -->
			<header class="mb-8">
				<h1 class="text-4xl font-bold mb-4">{post[0].title}</h1>
				<div class="flex items-center gap-4 text-gray-600">
					<div class="flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
						</svg>
						<span>By {post[0].authorId}</span>
					</div>
					<div class="flex items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
						</svg>
						<span>{formatDate(post[0].createdAt)}</span>
					</div>
				</div>
			</header>

			<!-- Post Content -->
			<div class="prose prose-lg max-w-none">
				{#if editorVisible}
					<Editor
						bind:value={post[0].content}
						apiKey={TINYMCE_API_KEY}
						{conf}
					/>
				{/if}
			</div>

			<!-- Post Footer -->
			<footer class="mt-12 pt-8 border-t">
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-4">
						<button class="btn btn-ghost btn-circle">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
							</svg>
						</button>
						<button class="btn btn-ghost btn-circle">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
							</svg>
						</button>
					</div>
					<button class="btn btn-ghost btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
						</svg>
					</button>
				</div>
			</footer>
		</article>
	{:else}
		<div class="container mx-auto px-4 py-8">
			<div class="text-center">
				<h2 class="text-2xl font-semibold text-gray-600">Post not found</h2>
				<p class="text-gray-500 mt-2">The post you're looking for doesn't exist or has been removed.</p>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(.tox-tinymce) {
		border: none !important;
	}
	:global(.tox .tox-toolbar__group) {
		display: none !important;
	}
	:global(.tox .tox-tinymce-inline) {
		background: transparent !important;
	}
</style>
