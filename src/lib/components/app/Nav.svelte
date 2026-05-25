<script module lang="ts">
	import type { RouteId } from '$app/types';
	import type { Component } from 'svelte';

	export type NavItem = {
		href: RouteId;
		label: string;
		icon: Component;
	};
</script>

<script lang="ts">
	import { resolve } from '$app/paths';
	type Variant = 'sidebar' | 'bottom';

	let {
		items,
		pathname,
		variant
	}: { items: readonly NavItem[]; pathname: string; variant: Variant } = $props();

	function isActive(href: RouteId) {
		return href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

{#if variant === 'sidebar'}
	<nav class="flex h-full items-center" aria-label="Primary navigation">
		<div class="flex flex-1 flex-col items-center gap-3">
			{#each items as item (item.href)}
				{@const Icon = item.icon}
				{@const active = isActive(item.href)}
				<a
					href={resolve(item.href)}
					aria-label={item.label}
					aria-current={active ? 'page' : undefined}
					class={[
						'group grid size-14 place-items-center rounded-full transition duration-150',
						active ? 'bg-white text-black' : 'text-white/70 hover:bg-white/10 hover:text-white'
					]}
				>
					<Icon size={26} strokeWidth={active ? 2.75 : 2.25} aria-hidden="true" />
				</a>
			{/each}
		</div>
	</nav>
{:else}
	<nav
		class="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#050505]/90 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden"
		aria-label="Primary navigation"
	>
		<div class="mx-auto grid max-w-2xl grid-cols-5 gap-1">
			{#each items as item (item.href)}
				{@const Icon = item.icon}
				{@const active = isActive(item.href)}
				<a
					href={resolve(item.href)}
					aria-label={item.label}
					aria-current={active ? 'page' : undefined}
					class={[
						'flex h-14 items-center justify-center rounded-full transition duration-150',
						active ? 'bg-white text-black' : 'text-white/70 active:bg-white/10 active:text-white'
					]}
				>
					<Icon size={25} strokeWidth={active ? 2.75 : 2.25} aria-hidden="true" />
					<span class="sr-only">{item.label}</span>
				</a>
			{/each}
		</div>
	</nav>
{/if}
