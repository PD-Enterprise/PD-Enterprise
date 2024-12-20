<script lang="ts">
	// imports
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { pushState } from '$app/navigation';
	import type { Post } from '../types';
	import formatDate from './utils';

	// variables
	let error: string = '';
	let posts: Post[] = [];

	// function to get Posts from Database
	async function getPosts() {
		const reponse = await fetch('../api/', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const result = await reponse.json();

		if (result.status === 200) {
			posts = result.data.sort(
				(a: Post, b: Post) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
			);
		} else {
			error = result.message;
		}
	}
	onMount(() => {
		getPosts();
	});
</script>

<div class="main">
	<div class="posts">
		{#if posts.length > 0}
			{#each posts as post}
				<div class="post">
					<div class="title">
						<a href="/blog/{post.slug}"
							><h1>
								{post.title}
							</h1>
						</a>
					</div>
					<div class="body">
						<b>{post.author_id}</b>
						<br />
						<p>{formatDate(post.created_at)}</p>
					</div>
				</div>
			{/each}
		{:else}
			<div class="post">
				{#if error}
					<h1>{error}</h1>
				{:else}
					<center>
						<h1>Loading posts...</h1>
					</center>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	h1 {
		font-size: 1.5em;
	}
	.post {
		background-color: #272d33;
		margin: 15px;
		padding: 10px;
		min-width: 300px;
		cursor: pointer;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
