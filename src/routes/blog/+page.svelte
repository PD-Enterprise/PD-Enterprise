<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageProps } from '../$types';
	import type { Post } from '../types';

	let {
		data
	}: {
		status: number;
		message: string;
		data: any;
		error: string;
	} = $props();
	// console.log(data.data);

	let posts: Post[] = data.data;
</script>

{#each posts as post}
	{post.title}
{/each}
