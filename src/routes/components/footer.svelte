<script lang="ts">
	import logo from '../images/logo.png'; //imports logo image from images
</script>

<footer class="footer bg-base-300 p-10 text-base-content">
	<aside>
		<img src={logo} alt="logo" id="footer-logo" />
		<p>
			PD Enterprise
			<br />
			Providing reliable tech tools for students since 2024
		</p>
	</aside>
	<nav>
		<!-- <h6 class="footer-title">Services</h6> -->
		<!-- <a href="https://grade-app.pages.dev" class="link-hover link">Grade App</a>
		<a href="https://cnotes.pages.dev" class="link-hover link">Cnotes</a> -->
	</nav>
	<nav>
		<h6 class="footer-title">Company</h6>
		<a href="#about-us" class="link-hover link">About us</a>
		<a href="#contact" class="link-hover link">Contact</a>
	</nav>
</footer>

<style>
	:root {
		--image-size: 70px;
	}
	#footer-logo {
		width: var(--image-size);
		border-radius: 100px;
		cursor: pointer;
		margin-bottom: 10px;
		filter: brightness(0) invert(1);
	}
</style>
