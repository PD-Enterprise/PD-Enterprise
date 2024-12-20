<script lang="ts">
	import logo from '../images/logo.png'; //imports logo image from images

	let isDropdownOpen: boolean = false;
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
		<img src={logo} alt="logo" id="navbar-logo" />
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
</div>

<style>
	:root {
		--image-size: 70px;
	}
	.navbar {
		cursor: default;
		position: fixed;
		z-index: 1000;
		background-color: var(--base-300);
		backdrop-filter: blur(30px);
	}
	#navbar-logo {
		width: var(--image-size);
		border-radius: 100px;
		cursor: pointer;
		margin-bottom: 10px;
		filter: brightness(0) invert(1);
	}
	/* .dropdown-container {
		position: absolute;
		top: 50%;
	}
	.dropdown-content {
		background-color: white;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		z-index: 1;
	}
	.dropdown-content[aria-expanded='true'] {
		display: block;
	} */
</style>
