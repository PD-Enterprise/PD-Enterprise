<script lang="ts">
	// Imports
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import logo from './images/logo.png';
	import studentsStudying from './images/students-studying-image.webp';

	// Functions
	const isAdminRoute = derived(page, ($page) => {
		return $page.url.pathname.startsWith('/admin-dashboard');
	});
</script>

<div class="flex min-h-screen flex-col">
	<header
		class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur"
		style:display={$isAdminRoute ? 'none' : 'block'}
	>
		<div class="container m-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
			<div class="flex items-center gap-2 text-xl font-bold">
				<img src={logo} alt="logo" id="logo" class="filter" />
				<span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
					PD Enterprise
				</span>
			</div>
			<div class="flex flex-1 items-center justify-end space-x-4">
				<nav class="flex items-center space-x-1">
					<a
						href="#products"
						class="px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-600"
					>
						Products
					</a>
					<a
						href="#about"
						class="px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-600"
					>
						About
					</a>
					<a
						href="/blog"
						class="px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-600"
					>
						Blog
					</a>
				</nav>
			</div>
		</div>
	</header>
	<main class="m-auto flex flex-1">
		<section
			class="w-full bg-gradient-to-b from-indigo-50 to-white py-12 md:py-24 lg:py-32 xl:py-48"
		>
			<div class="container px-8 md:px-12">
				<div class="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div class="flex flex-col justify-center space-y-6">
						<div class="space-y-4">
							<div
								class="mb-2 inline-block rounded-lg bg-indigo-200 px-3 py-1 text-sm text-indigo-800"
							>
								Built by students, for students
							</div>
							<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Empowering Students.{' '}
								<span
									class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
								>
									Simplifying Learning.
								</span>
							</h1>
							<p class="max-w-[600px] text-gray-600 md:text-xl">
								We create innovative student-focused software tools to help you learn smarter, not
								harder. From AI-powered study companions to collaborative note-taking, PD Enterprise
								equips you for success.
							</p>
						</div>
						<div class="flex flex-col gap-3 min-[400px]:flex-row">
							<button
								class="ring-offset-background focus-visible:ring-ring inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-sm font-medium transition-colors hover:from-indigo-700 hover:to-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							>
								<a href="#contact">Check out our blog!</a>
							</button>
							<button
								class="border-input bg-background hover:text-accent-foreground ring-offset-background focus-visible:ring-ring hover:bg-gray-00 inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-indigo-600 px-8 text-sm font-medium text-indigo-600 transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							>
								<a href="#products">Explore Products</a>
							</button>
						</div>
					</div>
					<div class="relative">
						<div
							class="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-purple-200 opacity-60 blur-xl"
						></div>
						<div
							class="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-indigo-200 opacity-60 blur-xl"
						></div>
						<img
							src={studentsStudying}
							width={550}
							height={550}
							alt="Students collaborating on a project"
							class="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full lg:order-last"
						/>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer class="w-full border-t">
		<div class="container m-auto flex flex-col gap-8 px-8 py-12 md:flex-row md:py-16">
			<div class="flex flex-col gap-3 md:w-1/3">
				<div class="flex items-center gap-2 text-xl font-bold">
					<img src={logo} alt="logo" id="logo" class="filter" />
					<span
						class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
					>
						PD Enterprise
					</span>
				</div>
				<p class="text-gray-600">
					Built by students, for students. Educational software solutions designed to enhance
					learning experiences.
				</p>
			</div>
			<div class="grid grid-cols-2 gap-12 sm:grid-cols-3 md:flex-1">
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Products</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Grade AI </a>
						<a href="#" class="text-gray-600 hover:text-indigo-600"> cnotes </a>
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Coming Soon </a>
					</nav>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Resources</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Documentation </a>
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Tutorials </a>
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Blog </a>
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Support </a>
					</nav>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Company</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-gray-600 hover:text-indigo-600"> About </a>
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Careers </a>
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Contact </a>
						<a href="#" class="text-gray-600 hover:text-indigo-600"> Privacy Policy </a>
					</nav>
				</div>
			</div>
		</div>
		<div
			class="container m-auto flex flex-col gap-4 border-t px-8 py-6 md:flex-row md:items-center md:justify-between"
		>
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} PD Enterprise. All rights reserved.
			</p>
			<div class="flex gap-6">
				<a href="#" class="text-gray-500 hover:text-indigo-600">
					<span class="sr-only">GitHub</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						></path>
						<path d="M9 18c-4.51 2-5-2-7-2"></path>
					</svg>
				</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:root {
		--image-size: 70px;
	}
	#logo {
		width: var(--image-size);
		border-radius: 100px;
		cursor: pointer;
		margin-bottom: 10px;
	}
</style>
