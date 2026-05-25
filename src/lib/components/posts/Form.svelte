<script lang="ts">
	import { resolve } from '$app/paths';

	let { avatarUrl }: { avatarUrl: string } = $props();
</script>

<div class="flex gap-4">
	<img class="size-10 shrink-0 rounded-full bg-white/10" src={avatarUrl} alt="" />
	<div class="min-w-0 flex-1">
		<form method="POST" action={resolve('/posts')}>
			<input type="hidden" name="authorAvatarUrl" value={avatarUrl} />
			<label class="sr-only" for="content">Post content</label>
			<textarea
				id="content"
				name="content"
				class="min-h-24 w-full resize-none bg-transparent text-lg leading-7 text-white placeholder:text-white/45 focus:outline-none"
				placeholder="What are you thinking?"
				required
				maxlength="500"
			></textarea>
			<div class="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
				<p class="text-sm text-white/35">Start a post with a thought, link, or quote.</p>
				<button
					type="submit"
					class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/85"
				>
					Post
				</button>
			</div>
		</form>
	</div>
</div>
