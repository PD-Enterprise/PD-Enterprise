<script lang="ts">
	import logo from '../images/logo.png';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let isDropdownOpen: boolean = false;

	onMount(() => {
		theme.subscribe((value) => {
			const logo = document.getElementById('navbar-logo');
			if (logo != null) {
				if (value) {
					logo.classList.remove('filter');
					logo.classList.add('no-filter');
				} else {
					logo.classList.remove('no-filter');
					logo.classList.add('filter');
				}
			}
		});
	});
</script>

<div class="navbar bg-base-300">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 rounded-box bg-base-100 p-2 shadow">
				<li><a href="#home">Home</a></li>
				<li>
					<a href="#about-us">About Us</a>
				</li>
				<li>
					<a href="#contact-us">Contact</a>
				</li>
			</ul>
		</div>
		<img src={logo} alt="logo" id="navbar-logo" class="filter" />
		<a href="/" class="btn btn-ghost text-2xl"> PD Enterprise </a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal text-xl">
			<li><a href="#home">Home</a></li>
			<li>
				<a href="#about-us">About Us</a>
			</li>
			<li>
				<a href="#contact-us">Contact Us</a>
			</li>
		</ul>
	</div>
	<label class="flex cursor-pointer gap-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="12" cy="12" r="5" />
			<path
				d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
			/>
		</svg>
		<input type="checkbox" value="light" class="theme-controller toggle" bind:checked={$theme} />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		</svg>
	</label>
</div>

<style>
	:root {
		--image-size: 70px;
	}
	#navbar-logo {
		width: var(--image-size);
		border-radius: 100px;
		cursor: pointer;
		margin-bottom: 10px;
	}
	.filter {
		filter: brightness(0) invert(1);
	}
	.no-filter {
		filter: none;
	}
	.navbar {
		cursor: default;
		position: fixed;
		z-index: 1000;
		background-color: var(--base-300);
		backdrop-filter: blur(30px);
	}
</style>
