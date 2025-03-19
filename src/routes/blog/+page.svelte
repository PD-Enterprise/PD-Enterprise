<script lang="ts">
	// imports
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { pushState } from '$app/navigation';
	import type { Post } from '../types';
	import formatDate from '$lib/utils/formatDate';
	import apiConfig from '$lib/utils/apiConfig';

	// variables
	let error: string = '';
	let posts: Post[] = [];
	let isLoading = true;
	let isLoaded = false;

	// function to get Posts from Database
	async function getPosts() {
		try {
		const response = await fetch(`${apiConfig.apiUrl}pd-enterprise/blog/posts`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const result = await response.json();
		if (result.status === 200) {
			posts = result.data.sort(
				(a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
			);
				setTimeout(() => {
					isLoaded = true;
				}, 100);
		} else {
				error = result.message || 'Failed to fetch posts';
			}
		} catch (err) {
			error = 'Failed to connect to the server';
		} finally {
			isLoading = false;
		}
	}

	onMount(() => {
		getPosts();
	});
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
	<div class="posts" class:fade-in={isLoaded}>
		{#if isLoading}
			<div class="flex justify-center items-center min-h-[400px]">
				<span class="loading loading-spinner loading-lg"></span>
			</div>
		{:else if error}
			<div class="alert alert-error">
				<span>{error}</span>
			</div>
		{:else if posts.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each posts as post}
					<a class="post card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300" href="/blog/{post.slug}">
						{#if post.image}
							<figure>
								<img
									src={post.image}
									alt={post.title}
									class="w-full h-48 object-cover"
									loading="lazy"
								/>
							</figure>
						{/if}
						<div class="card-body">
							<div class="title">
								<h2 class="card-title text-xl">{post.title}</h2>
							</div>
							<div class="flex flex-col gap-2 mt-4">
								<div class="text-sm text-gray-500">
									By <span class="font-semibold">{post.authorId}</span>
								</div>
								<div class="text-sm text-gray-500">
									{formatDate(post.createdAt)}
								</div>
							</div>
							<div class="card-actions justify-end mt-4">
								<button class="btn btn-primary btn-sm">Read More</button>
							</div>
						</div>
					</a>
			{/each}
			</div>
		{:else}
			<div class="text-center py-12">
				<h2 class="text-2xl font-semibold text-gray-600">No posts found</h2>
				<p class="text-gray-500 mt-2">Check back later for new content!</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.posts {
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}
	.posts.fade-in {
		opacity: 1;
	}
	.post {
		transition: all 0.3s ease-in-out;
	}
	.post:hover {
		transform: translateY(-5px);
	}
</style>
