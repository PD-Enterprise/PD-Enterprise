<script lang="ts">
	import logo from '../../images/cnotes-logo.png';
	import cnotesScreenshot from '../../images/modern-note-taking-app-interface-with-organized-no.png';
	import './styles.css';
</script>

<div class="flex min-h-screen flex-col">
	<header
		class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
			<div class="flex items-center gap-2 text-xl font-bold">
				<img src={logo} alt="logo" class="h-6 w-6" />
				<span class="text-primary">cnotes</span>
			</div>
			<div class="flex flex-1 items-center justify-end space-x-4">
				<nav class="flex items-center space-x-1">
					<a
						href="#features"
						class="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
					>
						Features
					</a>
					<a
						href="#testimonials"
						class="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
					>
						Reviews
					</a>
					<a
						href="#pricing"
						class="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
					>
						Pricing
					</a>
				</nav>
			</div>
		</div>
	</header>

	<main class="flex-1">
		<section
			class="w-full bg-gradient-to-b from-card to-background py-12 md:py-24 lg:py-32 xl:py-48"
		>
			<div class="container px-8 md:px-12">
				<div class="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div class="flex flex-col justify-center space-y-6">
						<div class="space-y-4">
							<div
								class="mb-2 inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
							>
								Smart Note-Taking Platform
							</div>
							<h1
								class="text-balance text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
							>
								Organize Your Notes.
								<span class="text-accent">Amplify Your Productivity.</span>
							</h1>
							<p class="max-w-[600px] text-balance text-muted md:text-xl">
								Transform the way you organize, share and collaborate on notes. cnotes helps
								students, turn scattered notes into structured knowledge.
							</p>
						</div>
						<div class="flex flex-col gap-3 min-[400px]:flex-row">
							<a href="https://cnotes.pages.dev">
								<button
									class="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-8 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
								>
									Start Taking Notes
									<arrowRight class="ml-2 h-4 w-4">
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
											class="lucide lucide-arrow-right ml-2 h-4 w-4"
											><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg
										>
									</arrowRight>
								</button>
							</a>
							<a href="#features">
								<button
									class="h-11 rounded-md border border-accent bg-transparent px-8 text-accent hover:bg-accent/10 hover:text-accent-foreground"
								>
									See Features
								</button>
							</a>
						</div>
					</div>
					<div class="relative">
						<img
							src="cnotesScreenshot"
							width={550}
							height={550}
							alt="cnotes app interface showing organized notes and collaboration features"
							class="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full lg:order-last"
						/>
					</div>
				</div>
			</div>
		</section>

		<section id="features" class="w-full py-16 md:py-24 lg:py-32">
			<div class="container px-8 md:px-12">
				<div class="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div
							class="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
						>
							Core Features
						</div>
						<h2 class="text-balance text-3xl font-bold tracking-tighter sm:text-5xl">
							Everything You Need to Stay Organized
						</h2>
						<p
							class="max-w-[900px] text-balance text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Powerful features designed to enhance your note-taking experience and boost
							productivity.
						</p>
					</div>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-accent/10 p-3">
									<fileText class="h-6 w-6 text-accent">
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
											class="lucide lucide-file-text"
											><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
											></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"
											></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg
										>
									</fileText>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Smart Organization</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Automatic categorization</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Intelligent tagging and folder systems that automatically organize your notes based
								on content, making it easy to find what you need when you need it.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-3">
									<search class="h-6 w-6 text-primary">
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
											class="lucide lucide-search"
											><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg
										>
									</search>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Powerful Search</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Find anything instantly</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Advanced search capabilities that scan through all your notes, to help you locate
								information in seconds.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-3">
									<brainCircuit class="h-6 w-6 text-accent">
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
											class="lucide lucide-brain-circuit"
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
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>AI Powered Summary</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Instantly understand your notes</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Let our AI automatically generate concise summaries of your notes, so you can
								quickly grasp the key points and main ideas without reading everything. Perfect for
								fast revision and efficient studying.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-3">
									<notebookPen class="h-6 w-6 text-primary">
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
											class="lucide lucide-notebook-pen-icon lucide-notebook-pen"
											><path
												d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
											/><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path
												d="M2 18h4"
											/><path
												d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
											/></svg
										>
									</notebookPen>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Powerful Text Editor</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Customize your notes your way</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Format your notes using a variety of tools to organize with our powerful text editor
								to personalize every note, making your study materials as unique as you are.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-3">
									<waypoints class="h-6 w-6 text-accent">
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
											class="lucide lucide-waypoints-icon lucide-waypoints"
											><circle cx="12" cy="4.5" r="2.5" /><path d="m10.2 6.3-3.9 3.9" /><circle
												cx="4.5"
												cy="12"
												r="2.5"
											/><path d="M7 12h10" /><circle cx="19.5" cy="12" r="2.5" /><path
												d="m13.8 17.7 3.9-3.9"
											/><circle cx="12" cy="19.5" r="2.5" /></svg
										>
									</waypoints>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Instant Note Sharing</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Share your notes with a simple link</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Instantly generate a shareable link for any note and send it to classmates, study
								groups, or anyone you choose.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-3">
									<bookmarked class="h-6 w-6 text-primary">
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
											class="lucide lucide-book-marked-icon lucide-book-marked"
											><path d="M10 2v8l3-3 3 3V2" /><path
												d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
											/></svg
										>
									</bookmarked>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Save Shared Notes</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Save notes shared with you</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Build your own library from notes shared by classmates, friends, or collaborators by
								saving them to your account.
							</p>
						</cardContent>
					</card>
				</div>
			</div>
		</section>

		<!-- <section id="testimonials" class="w-full py-16 md:py-24 lg:py-32 bg-card">
          <div class="container px-8 md:px-12">
            <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-medium">
                  User Reviews
                </div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-balance">
                  Loved by Students and Professionals
                </h2>
                <p class="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                  See how cnotes is transforming the way people organize their thoughts and collaborate.
                </p>
              </div>
            </div>
            <div class="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
              <Card class="border-0 shadow-lg bg-background">
                <CardHeader>
                  <div class="flex items-center gap-4">
                    <div class="rounded-full bg-accent/10 p-2">
                      <Star class="h-5 w-5 text-accent fill-current" />
                    </div>
                    <div>
                      <CardTitle class="text-lg">Sarah Chen</CardTitle>
                      <CardDescription>Computer Science Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p class="text-muted">
                    "cnotes completely changed how I study. The search feature is incredible - I can find any concept
                    from my lectures in seconds. My grades have improved significantly!"
                  </p>
                </CardContent>
              </Card>

              <Card class="border-0 shadow-lg bg-background">
                <CardHeader>
                  <div class="flex items-center gap-4">
                    <div class="rounded-full bg-primary/10 p-2">
                      <Star class="h-5 w-5 text-primary fill-current" />
                    </div>
                    <div>
                      <CardTitle class="text-lg">Marcus Rodriguez</CardTitle>
                      <CardDescription>Product Manager</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p class="text-muted">
                    "Our team uses cnotes for all our brainstorming sessions. The collaboration features are seamless,
                    and we can track the evolution of our ideas effortlessly."
                  </p>
                </CardContent>
              </Card>

              <Card class="border-0 shadow-lg bg-background">
                <CardHeader>
                  <div class="flex items-center gap-4">
                    <div class="rounded-full bg-secondary/10 p-2">
                      <Star class="h-5 w-5 text-secondary fill-current" />
                    </div>
                    <div>
                      <CardTitle class="text-lg">Dr. Emily Watson</CardTitle>
                      <CardDescription>Research Professor</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p class="text-muted">
                    "As a researcher, I need to organize vast amounts of information. cnotes' smart categorization has
                    made my research process so much more efficient."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> -->
	</main>

	<footer class="w-full border-t bg-background">
		<div class="container flex flex-col gap-8 px-8 py-12 md:flex-row md:py-16">
			<div class="flex flex-col gap-3 md:w-1/3">
				<div class="flex items-center gap-2 text-xl font-bold">
					<img src={logo} alt="logo" class="h-6 w-6" />
					<span class="text-primary">cnotes</span>
				</div>
				<p class="text-muted">
					The smart note-taking platform designed for modern productivity. Organize, search, and
					collaborate like never before.
				</p>
			</div>
			<div class="grid grid-cols-2 gap-12 sm:grid-cols-3 md:flex-1">
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Product</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-muted hover:text-primary"> Features </a>
						<a href="#" class="text-muted hover:text-primary"> Pricing </a>
						<a href="#" class="text-muted hover:text-primary"> Security </a>
					</nav>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Resources</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-muted hover:text-primary"> Documentation </a>
						<a href="#" class="text-muted hover:text-primary"> Help Center </a>
						<a href="#" class="text-muted hover:text-primary"> Blog </a>
					</nav>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Company</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-muted hover:text-primary"> About </a>
						<a href="#" class="text-muted hover:text-primary"> Contact </a>
						<a href="#" class="text-muted hover:text-primary"> Privacy </a>
					</nav>
				</div>
			</div>
		</div>
		<div
			class="container flex flex-col gap-4 border-t px-8 py-6 md:flex-row md:items-center md:justify-between"
		>
			<p class="text-gray text-sm">
				&copy; {new Date().getFullYear()} cnotes. All rights reserved.
			</p>
			<div class="flex gap-6">
				<a href="#" class="text-gray hover:text-primary">
					<span class="sr-only">GitHub</span>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</footer>
</div>
