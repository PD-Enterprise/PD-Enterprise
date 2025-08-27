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

<div class="flex min-h-screen flex-col bg-gradient-to-b from-indigo-50 to-white">
	<header
		class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
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

	<main class="m-auto flex-1">
		<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
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
							<a href="/blog">
								<button
									class="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-sm font-medium ring-offset-background transition-colors hover:from-indigo-700 hover:to-purple-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								>
									Check out our blog!
								</button>
							</a>
							<a href="#products">
								<button
									class="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-indigo-600 border-input bg-background px-8 text-sm font-medium text-indigo-600 ring-offset-background transition-colors hover:bg-accent hover:bg-indigo-50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								>
									Explore Products
								</button>
							</a>
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
							width="550px"
							height="550px"
							alt="Students collaborating on a project"
							class="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full lg:order-last"
						/>
					</div>
				</div>
			</div>
		</section>

		<section id="products" class="w-full py-16 md:py-24 lg:py-32">
			<div class="container px-8 md:px-12">
				<div class="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
							Our Products
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							Tools Built for Student Success
						</h2>
						<p
							class="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Our suite of educational tools helps students excel in their academic journey.
						</p>
					</div>
				</div>

				<div class="grid gap-10 lg:grid-cols-2">
					<card
						class="overflow-hidden rounded-lg border-0 bg-card bg-gradient-to-br from-indigo-50 to-white text-card-foreground shadow-lg"
					>
						<div
							class="absolute right-0 top-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-indigo-200 opacity-20 blur-2xl"
						></div>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-indigo-100 p-3">
									<brainCircuit class="h-8 w-8 text-indigo-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-brain-circuit h-8 w-8 text-indigo-600"
											><path
												d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
											></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path
												d="M6.003 5.125A3 3 0 0 0 6.401 6.5"
											></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path
												d="M6 18a4 4 0 0 1-1.967-.516"
											></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"
											></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"
											></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"
											></circle><circle cx="20" cy="21" r=".5"></circle><circle
												cx="20"
												cy="8"
												r=".5"
											></circle></svg
										>
									</brainCircuit>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-2xl font-semibold leading-none tracking-tight"
										>Grade AI</cardTitle
									>
									<cardDescription class="text-sm text-gray-600 text-muted-foreground"
										>AI-powered learning assistant</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 p-6">
							<p class="p-6 text-gray-600">
								A specially trained AI model designed not just to answer questions, but to teach
								students every concept thoroughly. Grade AI explains complex topics in simple terms,
								provides step-by-step solutions, and adapts to your learning style.
							</p>
							<div class="p-4">
								<a href="/products/grade-ai">
									<button
										class="btn inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border-none bg-indigo-600 px-4 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-indigo-700 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									>
										Learn More
									</button>
								</a>
							</div>
						</cardContent>
					</card>

					<card
						class="overflow-hidden rounded-lg border-0 bg-card bg-gradient-to-br from-indigo-50 to-white text-card-foreground shadow-lg"
					>
						<div
							class="absolute right-0 top-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-purple-200 opacity-20 blur-2xl"
						></div>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-purple-100 p-3">
									<notebookPen class="h-8 w-8 text-purple-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-notebook-pen h-8 w-8 text-purple-600"
											><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
											></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"
											></path><path d="M2 18h4"></path><path
												d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
											></path></svg
										>
									</notebookPen>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-2xl font-semibold leading-none tracking-tight"
										>cnotes</cardTitle
									>
									<cardDescription class="text-sm text-gray-600 text-muted-foreground"
										>Collaborative note-taking platform</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 p-6">
							<p class="p-6 text-gray-600">
								A note-taking platform that makes organizing and sharing notes easier than ever.
								Create structured notes with rich formatting, collaborate with classmates in
								real-time, and access your study materials from any device.
							</p>
							<div class="p-4">
								<a href="/products/cnotes">
									<button
										class="btn inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border-none bg-indigo-600 px-4 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-indigo-700 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
										>Learn More</button
									>
								</a>
							</div>
						</cardContent>
					</card>
				</div>

				<div class="mt-16 text-center">
					<div
						class="inline-block rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3"
					>
						<p class="font-medium text-gray-700">More innovative apps launching soon!</p>
					</div>
				</div>
			</div>
		</section>

		<section
			id="about"
			class="w-full bg-gradient-to-b from-white to-indigo-50 py-16 md:py-24 lg:py-32"
		>
			<div class="container px-8 md:px-12">
				<div class="grid gap-12 lg:grid-cols-2">
					<div class="space-y-6">
						<div class="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
							Our Story
						</div>
						<h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Created by Students Who Understand Your Challenges
						</h2>
						<div class="space-y-4 text-gray-600">
							<p class="md:text-lg">
								We understand the challenges students face because we've been there ourselves.
								Founded by a student who experienced the struggles of juggling classes, studying
								effectively, and staying organized, PD Enterprise is dedicated to creating
								innovative tools that empower students to reach their full potential.
							</p>
							<div class="space-y-4 pt-4">
								<div class="rounded-xl bg-indigo-200 p-6 shadow-sm">
									<h3 class="mb-2 text-xl font-semibold text-indigo-600">Our Mission</h3>
									<p>
										We believe every student deserves access to resources that make learning
										engaging, efficient, and collaborative.
									</p>
								</div>
								<div class="rounded-xl bg-purple-200 p-6 shadow-sm">
									<h3 class="mb-2 text-xl font-semibold text-purple-600">Our Vision</h3>
									<p>
										To be the leading provider of student-focused software, transforming the way
										students learn and achieve academic success.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="relative">
						<div
							class="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-30 blur-2xl"
						></div>
						<div
							class="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-200 opacity-30 blur-2xl"
						></div>
						<img
							src={''}
							width={600}
							height={500}
							alt="PD Enterprise team"
							class="mx-auto aspect-video overflow-hidden rounded-xl bg-indigo-50 object-cover shadow-lg"
						/>
						<div class="mt-8 grid grid-cols-2 gap-6">
							<div class="rounded-xl bg-indigo-100 p-6 shadow-sm">
								<h3 class="text-2xl font-bold text-indigo-600">1+</h3>
								<p class="text-gray-600">Active Student Users</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- <section id="testimonials" class="w-full py-16 md:py-24 lg:py-32">
			<div class="container px-8 md:px-12">
				<div class="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
							Testimonials
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">What Students Say</h2>
						<p
							class="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Hear from students who have transformed their academic experience with our tools.
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
					<card
						class="bg-card text-card-foreground overflow-hidden rounded-lg border-0 bg-gradient-to-br from-indigo-50 to-white shadow-lg"
					>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-indigo-100 p-2">
									<users class="h-5 w-5 text-indigo-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-users h-5 w-5 text-indigo-600"
											><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle
												cx="9"
												cy="7"
												r="4"
											></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path
												d="M16 3.13a4 4 0 0 1 0 7.75"
											></path></svg
										>
									</users>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-lg font-semibold leading-none tracking-tight"
										>Alex Johnson</cardTitle
									>
									<cardDescription class="text-muted-foreground text-sm text-gray-600"
										>Computer Science Major</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="flex flex-col space-y-4 p-6 pt-6">
							<p class="text-gray-600">
								"Grade AI helped me understand complex algorithms that I was struggling with. It's
								like having a tutor available 24/7 who actually teaches me how to solve problems."
							</p>
						</cardContent>
					</card>
					<card
						class="bg-card text-card-foreground overflow-hidden rounded-lg border-0 bg-gradient-to-br from-indigo-50 to-white shadow-lg"
					>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-purple-100 p-2">
									<users class="h-5 w-5 text-purple-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-users h-5 w-5 text-indigo-600"
											><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle
												cx="9"
												cy="7"
												r="4"
											></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path
												d="M16 3.13a4 4 0 0 1 0 7.75"
											></path></svg
										>
									</users>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-lg font-semibold leading-none tracking-tight"
										>Mia Rodriguez</cardTitle
									>
									<cardDescription class="text-muted-foreground text-sm text-gray-600"
										>Biology Student</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="flex flex-col space-y-4 p-6 pt-6">
							<p class="text-gray-600">
								"cnotes transformed how I organize my study materials. Being able to collaborate
								with classmates and access my notes from anywhere has been a game-changer."
							</p>
						</cardContent>
					</card>
					<card
						class="bg-card text-card-foreground overflow-hidden rounded-lg border-0 bg-gradient-to-br from-indigo-50 to-white shadow-lg"
					>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-indigo-100 p-2">
									<users class="h-5 w-5 text-indigo-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-users h-5 w-5 text-indigo-600"
											><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle
												cx="9"
												cy="7"
												r="4"
											></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path
												d="M16 3.13a4 4 0 0 1 0 7.75"
											></path></svg
										>
									</users>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-lg font-semibold leading-none tracking-tight"
										>James Lee</cardTitle
									>
									<cardDescription class="text-muted-foreground text-sm text-gray-600"
										>Engineering Major</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="flex flex-col space-y-4 p-6 pt-6">
							<p class="text-gray-600">
								"The combination of Grade AI and cnotes has completely changed how I study. I'm
								understanding concepts better and my grades have improved significantly."
							</p>
						</cardContent>
					</card>
				</div>
			</div>
		</section> -->
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
