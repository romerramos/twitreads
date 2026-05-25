<script lang="ts">
	import PostsForm from '$lib/components/posts/Form.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Create | Twitreads</title>
</svelte:head>

<section class="border-b border-white/10 px-5 py-4">
	<p class="text-sm font-semibold text-white/45">New thread</p>
	<h1 class="text-xl font-bold tracking-tight">Create</h1>
</section>

<section class="px-5 py-6">
	<PostsForm avatarUrl={data.avatarUrl} />
</section>
