<script lang="ts">
	// Imports
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { renewSession } from '$lib/utils/renewSession';

	// Variables
	let { children } = $props();
	let cookieValue: string;

	// Functions
	const isAdminRoute = derived(page, ($page) => {
		return $page.url.pathname.startsWith('/admin-dashboard');
	});
	onMount(async () => {
		const response = await fetch('/api/cookie', {
			method: 'GET',
			credentials: 'include'
		});
		if (response.ok) {
			const result = await response.json();
			cookieValue = result.cookieValue;
			if (cookieValue) {
				renewSession(cookieValue);
			}
		}
	});
</script>

<div class="main">
	<div class="navbar p-0" style:display={$isAdminRoute ? 'none' : 'block'}>
		<Navbar />
	</div>
	{@render children()}
	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.navbar {
		margin-bottom: 40px;
	}
	.footer {
		margin-top: auto;
	}
</style>
