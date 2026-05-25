<script lang="ts">
	import PostsForm from '$lib/components/posts/Form.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Home | Twitreads</title>
</svelte:head>

<section
	class="sticky top-0 z-10 border-b border-white/10 bg-[#050505]/85 px-5 py-4 backdrop-blur-xl"
>
	<p class="text-sm font-semibold text-white/45">Twitreads</p>
	<h1 class="text-xl font-bold tracking-tight">Home</h1>
</section>

<section class="border-b border-white/10 px-5 py-5">
	<PostsForm avatarUrl={data.avatarUrl} />
</section>

<section aria-label="Recent posts">
	{#each data.posts as post (post.id)}
		<article class="border-b border-white/10 px-5 py-5 transition hover:bg-white/[0.03]">
			<div class="flex gap-4">
				<img class="size-10 shrink-0 rounded-full bg-white/10" src={post.authorAvatarUrl} alt="" />
				<div class="min-w-0 flex-1">
					<div class="flex items-baseline gap-2">
						<h2 class="truncate font-semibold">{post.authorName}</h2>
						<p class="truncate text-sm text-white/40">@{post.authorHandle}</p>
					</div>
					<p class="mt-2 leading-7 text-white/85">{post.content}</p>
					<p class="mt-4 text-sm text-white/40">
						{post.replyCount} replies · {post.repostCount} reposts · {post.likeCount} likes
					</p>
				</div>
			</div>
		</article>
	{:else}
		<p class="px-5 py-10 text-center text-white/40">No posts yet.</p>
	{/each}
</section>
