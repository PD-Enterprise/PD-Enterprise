<script lang="ts">
	import Navbar from './components/navbar.svelte';
	import Footer from './components/footer.svelte';

	import '../app.css';
	let { children } = $props();
</script>

<div class="main">
	<div class="navbar">
		<Navbar />
	</div>
	{@render children()}
	<div class="footer">
		<Footer />
	</div>
</div>
