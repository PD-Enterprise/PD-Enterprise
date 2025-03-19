<script lang="ts">
	import { goto } from '$app/navigation'; // Function to navigate to different routes
	import { isAuthenticated, user, auth0Client } from '$lib/stores/store';
	import auth from '$lib/utils/authService';
	import { onMount } from 'svelte';
	import type { Post } from '../types';
	import apiConfig from '$lib/utils/apiConfig';
	import Editor from '@tinymce/tinymce-svelte';
	import { TINYMCE_API_KEY, getEditorConfig } from '$lib/utils/tinymceConfig';

	let userData;
	let posts: Post[] = [];
	let activeTab = 'dashboard';
	let isLoading = true;
	let error = '';
	let showNewPostModal = false;
	let showEditModal = false;
	let selectedPost: Post | null = null;
	let newPost = {
		title: '',
		content: '',
		image: '',
		slug: ''
	};
	let editorConfig = getEditorConfig(apiConfig.apiUrl);

	user.subscribe((value) => {
		userData = value;
	});

	function logout() {
		auth.logout($auth0Client);
		goto('/');
	}

	async function getPosts() { // Fetches the list of blog posts from the API
		try {
			const response = await fetch(`${apiConfig.apiUrl}pd-enterprise/blog/posts`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});
			const result = await response.json();
			if (result.status === 200) {
				posts = result.data;
			} else {
				error = result.message;
			}
		} catch (err) {
			error = 'Failed to fetch posts';
		} finally {
			isLoading = false;
		}
	}

	async function createPost() { // Creates a new blog post using the API, restricted to admins
		const currentUser = $user; // Assuming user store contains user information
		if (!currentUser.role || currentUser.role !== 'admin') {
			alert('Only admins can create blog posts.');
			return;
		}
		try {
			const response = await fetch(`${apiConfig.apiUrl}pd-enterprise/blog/posts`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...newPost,
					authorId: userData?.sub || 'Anonymous'
				})
			});
			const result = await response.json();
			if (result.status === 200) {
				showNewPostModal = false;
				newPost = { title: '', content: '', image: '', slug: '' };
				getPosts();
			} else {
				error = result.message;
			}
		} catch (err) {
			error = 'Failed to create post';
		}
	}

	async function updatePost() { // Updates an existing blog post using the API
		if (!selectedPost) return;
		try {
			const response = await fetch(`${apiConfig.apiUrl}pd-enterprise/blog/posts/${selectedPost.slug}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(selectedPost)
			});
			const result = await response.json();
			if (result.status === 200) {
				showEditModal = false;
				selectedPost = null;
				getPosts();
			} else {
				error = result.message;
			}
		} catch (err) {
			error = 'Failed to update post';
		}
	}

	async function deletePost(slug: string) { // Deletes a blog post based on its slug
		if (!confirm('Are you sure you want to delete this post?')) return;
		try {
			const response = await fetch(`${apiConfig.apiUrl}pd-enterprise/blog/posts/${slug}`, {
				method: 'DELETE'
			});
			const result = await response.json();
			if (result.status === 200) {
				getPosts();
			} else {
				error = result.message;
			}
		} catch (err) {
			error = 'Failed to delete post';
		}
	}

	function editPost(post: Post) { // Prepares the selected post for editing
		selectedPost = { ...post };
		showEditModal = true;
	}

	onMount(() => {
		getPosts();
	});
</script>

{#if $isAuthenticated}
	<div class="min-h-screen bg-base-200">
		<!-- Sidebar -->
		<div class="drawer lg:drawer-open">
			<input id="drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col">
				<!-- Navbar -->
				<div class="navbar bg-base-100 shadow-lg">
					<div class="flex-none lg:hidden">
						<label for="drawer" class="btn btn-square btn-ghost">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</label>
					</div>
					<div class="flex-1">
						<a class="btn btn-ghost normal-case text-xl">Admin Dashboard</a>
					</div>
					<div class="flex-none">
						<div class="dropdown dropdown-end">
							<label tabindex="0" class="btn btn-ghost btn-circle avatar">
								<div class="w-10 rounded-full">
									<img src={userData?.picture} alt="Profile" />
								</div>
							</label>
							<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
								<li><a>Profile</a></li>
								<li><a>Settings</a></li>
								<li><a on:click={logout}>Logout</a></li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Main Content -->
				<div class="p-4">
					{#if activeTab === 'dashboard'}
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							<div class="card bg-base-100 shadow-xl">
								<div class="card-body">
									<h2 class="card-title">Total Posts</h2>
									<p class="text-3xl font-bold">{posts.length}</p>
								</div>
							</div>
							<div class="card bg-base-100 shadow-xl">
								<div class="card-body">
									<h2 class="card-title">Recent Posts</h2>
									<p class="text-3xl font-bold">{posts.slice(0, 5).length}</p>
								</div>
							</div>
							<div class="card bg-base-100 shadow-xl">
								<div class="card-body">
									<h2 class="card-title">Total Views</h2>
									<p class="text-3xl font-bold">0</p>
								</div>
							</div>
							<div class="card bg-base-100 shadow-xl">
								<div class="card-body">
									<h2 class="card-title">Active Users</h2>
									<p class="text-3xl font-bold">0</p>
								</div>
							</div>
						</div>
					{:else if activeTab === 'posts'}
						<div class="card bg-base-100 shadow-xl">
							<div class="card-body">
								<div class="flex justify-between items-center">
									<h2 class="card-title">Blog Posts</h2>
									<button class="btn btn-primary" on:click={() => showNewPostModal = true}>New Post</button>
								</div>
								{#if isLoading}
									<div class="flex justify-center">
										<span class="loading loading-spinner loading-lg"></span>
									</div>
								{:else if error}
									<div class="alert alert-error">
										<span>{error}</span>
									</div>
								{:else}
									<div class="overflow-x-auto">
										<table class="table">
											<thead>
												<tr>
													<th>Title</th>
													<th>Author</th>
													<th>Date</th>
													<th>Actions</th>
												</tr>
											</thead>
											<tbody>
												{#each posts as post}
													<tr>
														<td>{post.title}</td>
														<td>{post.authorId}</td>
														<td>{new Date(post.createdAt).toLocaleDateString()}</td>
														<td>
															<div class="flex gap-2">
																<button class="btn btn-sm btn-info" on:click={() => editPost(post)}>Edit</button>
																<button class="btn btn-sm btn-error" on:click={() => deletePost(post.slug)}>Delete</button>
															</div>
														</td>
													</tr>
												{/each}
											</tbody>
										</table>
									</div>
								{/if}
							</div>
						</div>
					{:else if activeTab === 'users'}
						<div class="card bg-base-100 shadow-xl">
							<div class="card-body">
								<h2 class="card-title">User Management</h2>
								<p>User management features coming soon...</p>
							</div>
						</div>
					{:else if activeTab === 'settings'}
						<div class="card bg-base-100 shadow-xl">
							<div class="card-body">
								<h2 class="card-title">Settings</h2>
								<p>Settings features coming soon...</p>
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!-- Sidebar Content -->
			<div class="drawer-side">
				<label for="drawer" class="drawer-overlay"></label>
				<ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
					<li><a class:active={activeTab === 'dashboard'} on:click={() => activeTab = 'dashboard'}>Dashboard</a></li>
					<li><a class:active={activeTab === 'posts'} on:click={() => activeTab = 'posts'}>Blog Posts</a></li>
					<li><a class:active={activeTab === 'users'} on:click={() => activeTab = 'users'}>Users</a></li>
					<li><a class:active={activeTab === 'settings'} on:click={() => activeTab = 'settings'}>Settings</a></li>
				</ul>
			</div>
		</div>
	</div>

	<!-- New Post Modal -->
	{#if showNewPostModal}
		<div class="modal modal-open">
			<div class="modal-box w-11/12 max-w-5xl">
				<h3 class="font-bold text-lg mb-4">Create New Post</h3>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Title</span>
					</label>
					<input type="text" bind:value={newPost.title} class="input input-bordered w-full" />
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Slug</span>
					</label>
					<input type="text" bind:value={newPost.slug} class="input input-bordered w-full" />
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Featured Image URL</span>
					</label>
					<input type="text" bind:value={newPost.image} class="input input-bordered w-full" />
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Content</span>
					</label>
<Editor 
    bind:value={newPost.content} 
    apiKey={TINYMCE_API_KEY} 
/>

				</div>
				<div class="modal-action">
					<button class="btn" on:click={() => showNewPostModal = false}>Cancel</button>
					<button class="btn btn-primary" on:click={createPost}>Create Post</button>
				</div>
			</div>
		</div>
	{/if}

	<!-- Edit Post Modal -->
	{#if showEditModal && selectedPost}
		<div class="modal modal-open">
			<div class="modal-box w-11/12 max-w-5xl">
				<h3 class="font-bold text-lg mb-4">Edit Post</h3>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Title</span>
					</label>
					<input type="text" bind:value={selectedPost.title} class="input input-bordered w-full" />
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Featured Image URL</span>
					</label>
					<input type="text" bind:value={selectedPost.image} class="input input-bordered w-full" />
				</div>
				<div class="form-control w-full">
					<label class="label">
						<span class="label-text">Content</span>
					</label>
<Editor 
    bind:value={selectedPost.content} 
    apiKey={TINYMCE_API_KEY} 
/>

				</div>
				<div class="modal-action">
					<button class="btn" on:click={() => showEditModal = false}>Cancel</button>
					<button class="btn btn-primary" on:click={updatePost}>Update Post</button>
				</div>
			</div>
		</div>
	{/if}
{:else}
	<div class="min-h-screen flex items-center justify-center bg-base-200">
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Access Denied</h2>
				<p>Please login to access the admin dashboard.</p>
				<div class="card-actions justify-end">
					<a href="/login" class="btn btn-primary">Login</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.active {
		background-color: hsl(var(--p));
		color: rgb(15, 3, 3);
	}
</style>
