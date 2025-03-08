<script lang="ts">
	// Imports
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import auth from '$lib/utils/authService';
	import { isAuthenticated, user, auth0Client } from '$lib/stores/store';

	// Variables
	let { children } = $props();
	let cookieValue: string;

	// Functions
	const isAdminRoute = derived(page, ($page) => {
		return $page.url.pathname.startsWith('/admin-dashboard');
	});
	onMount(async () => {
		const client = await auth.createClient();
		auth0Client.set(client);
		isAuthenticated.set(await $auth0Client.isAuthenticated());
		user.set(await $auth0Client.getUser());
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
