<script lang="ts">
	import { goto } from '$app/navigation';
	import { isAuthenticated, user, auth0Client } from '$lib/stores/store';
	import auth from '$lib/utils/authService';

	let userData;
	user.subscribe((value) => {
		userData = value;
	});
	function logout() {
		auth.logout($auth0Client);
		goto('/');
	}
</script>

{#if $isAuthenticated}
	<center>
		{#if userData}
			<img src={userData.picture} alt="user-profile" class="h-20 w-20 rounded-full" />
			<p class="text-xl font-bold">Welcome {userData.name}</p>
			<p class="text-ml">User role - <b>{localStorage.getItem('role')}</b></p>
			<button class="btn btn-error mt-5 w-auto" on:click={logout}>Logout</button>
		{:else}
			<p>Loading...</p>
		{/if}
	</center>
{:else}
	<p>You are not logged in</p>
	<p>
		Please
		<a href="/login">Login</a> to access the admin dashboard.
	</p>
{/if}
