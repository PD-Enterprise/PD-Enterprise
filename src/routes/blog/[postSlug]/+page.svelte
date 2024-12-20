<script lang="ts">
	// imports
	import { onMount } from 'svelte';
	import type { Post } from '../../types';
	import formatDate from '../utils';

	// variables
	let slug: string = '';
	let post: Post[] = [];
	let error: string = '';

	// function to get Post from Database
	async function getPost(slug: string) {
		const response = await fetch('../../api', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ slug: slug })
		});
		const result = await response.json();

		if (result.status === 200) {
			post = result.data;
		} else {
			error = result.message;
		}
	}

	onMount(() => {
		slug = window.location.href.split('/blog/')[1];
		getPost(slug);
	});
</script>

<div class="main">
	<div class="post">
		{#if post.length > 0}
			<h1>{post[0].title}</h1>
			<h2>{post[0].author_id}</h2>
			<p>{formatDate(post[0].created_at)}</p>
			<p>{@html post[0].content}</p>
		{:else}
			<div class="post">
				{#if error}
					<h1>{error}</h1>
				{:else}
					<center>
						<h1>Loading Post...</h1>
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
	}
</style>
