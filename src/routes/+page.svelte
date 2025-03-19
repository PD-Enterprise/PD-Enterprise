<script lang="ts">
	import aboutUsImage from './images/students-studying-image.jpg';
</script>

<div class="main">
	<div class="hero-section">
		<div class="hero min-h-screen">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div id="home">
					<h8 id="grade-app" class="font-bold"> PD Enterprise </h8>
					<p class="pb-4 pt-2" id="homep">Empowering Students. Simplifying Learning.</p>
					<div class="subheadline">
						<p>
							We create innovative student-focused software tools to help you learn smarter, not
							harder. From AI-powered study companions to collaborative note-taking, PD Enterprise
							equips you for success.
						</p>
					</div>
					<div class="buttons">
						<a class="explore btn btn-primary" href="/projects">Explore Our Applications</a>
						<a class="blog btn btn-primary" href="/blog">Check out our Blog</a>

					</div>
				</div>
			</div>
		</div>
	</div>
	<hr />
	<div class="about-us" id="about-us">
		<div class="title">
			<p>About Us</p>
			<h7 id="about-us">
				<b>Built by Students, For Students</b>
			</h7>
		</div>
		<div class="body">
			<div class="about-content">
				<div class="text-content">
					<p>
						We understand the challenges students face because we've been there ourselves. Founded
						by a student who experienced the struggles of juggling classes, studying effectively,
						and staying organized, PD Enterprise is dedicated to creating innovative tools that
						empower students to reach their full potential.
					</p>
					<div class="cards">
						<div class="card">
							<div class="card-content">
								<h3>Our Mission</h3>
								<p>
									We believe every student deserves access to resources that make learning engaging,
									efficient, and collaborative.
								</p>
							</div>
						</div>
						<div class="card">
							<div class="card-content">
								<h3>Our Vision</h3>
								<p>
									To be the leading provider of student-focused software, transforming the way
									students learn and achieve academic success.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="about-us-image">
					<img src={aboutUsImage} alt="About Us" />
				</div>
			</div>
		</div>
	</div>
	<hr />
	<div class="applications" id="products"></div>
	<hr />
	<div class="contact" id="contact-us">
		<div class="title">
			<p>Contact Us</p>
			<h7 id="contact-us">Have questions or feedback? We'd love to hear from you! </h7>
		</div>
		<div class="body">
			<div class="contact-info">
				<div class="email-container">
					<span class="email-icon"
						><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
							><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
								d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
							/></svg
						></span
					>
					<div class="email-text">
						<p>
							Email Address: <br />
							<a href="mailto:pdenterprise@gmail.com">pdenterprise314@gmail.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<hr />
</div>

<style>
	.title {
		max-width: 50%;
	}
	.about-content {
		display: flex;
		gap: 10rem;
		align-items: flex-start;
		width: 97vw;
	}
	.text-content {
		flex: 1;
		max-width: 50%;
	}
	.about-us-image {
		flex: 1;
		max-width: 500px;
		width: 100%;
		border-radius: 10px;
		overflow: hidden;
		background-color: rgba(247, 224, 224, 0.726);
	}
	.about-us-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition-timing-function: ease-in;
		transition: 0.5s;
	}
	.about-us-image img:hover {
		transform: scale(1.05);
		transition-timing-function: ease-out;
		transition: transform 0.5s;
	}
	.email-container {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.email-icon svg {
		width: 25px;
		height: 25px;
		fill: currentColor; /* This will make the SVG inherit the text color */
	}
	.email-text {
		font-size: 0.7em;
		margin: 0;
	}
	.cards {
		display: flex;
		gap: 1rem;
	}
	.card {
		flex: 1;
		min-width: 350px;
		max-width: 400px;
		margin: 0;
		overflow: hidden;
	}
	.card-content h3 {
		font-size: 0.8em;
		margin-bottom: 6px;
		font-weight: bold;
	}
	.card-content p {
		color: #818080;
		font-size: 1.5em;
		line-height: 1.2;
		padding-bottom: 20px;
	}
	.subheadline p {
		width: 55%;
	}
	.title p {
		font-size: 0.8em;
	}
	.buttons {
		height: 60px;
		margin-top: 40px;
		margin-bottom: 10px;
	}
	h7 {
		display: block;
	}
	.title {
		width: 60%;
	}
	.body {
		width: 60%;
	}
	.body svg {
		width: 25px;
		height: 25px;
	}
	.body p {
		font-size: 0.7em;
	}
	.about-us,
	.contact {
		padding-bottom: 45px;
	}
	#homep {
		font-size: 1.7em;
		font-weight: 600;
	}
	.about-us,
	.contact {
		margin-left: 10px;
	}
	#about-us,
	#contact-us {
		margin-top: 15px;
		margin-bottom: 20px;
		font-size: 1.7em;
	}
	.hero p {
		font-size: 1.4em;
	}
	h8 {
		font-size: 5em;
	}
	@media (max-width: 768px) {
		.about-content {
			flex-direction: column;
		}

		.about-us-image {
			width: 100%;
			max-width: 100%;
		}
		.cards {
			flex-direction: column;
			gap: 1.5rem;
		}

		.card {
			max-width: 100%;
		}
	}
	@media (max-width: 1024px) {
		.about-content {
			flex-direction: column;
		}

		.about-us-image {
			width: 100%;
			max-width: 100%;
		}
	}
</style>
