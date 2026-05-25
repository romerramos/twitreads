<script lang="ts">
	import { Heart, House, Search, SquarePen, User } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import AppNav, { type NavItem } from '$lib/components/app/Nav.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	const navItems = [
		{ href: '/', label: 'Home', icon: House },
		{ href: '/search', label: 'Search', icon: Search },
		{ href: '/create', label: 'Create', icon: SquarePen },
		{ href: '/likes', label: 'Likes', icon: Heart },
		{ href: '/profile', label: 'Profile', icon: User }
	] satisfies readonly NavItem[];

	const pathname = $derived(page.url.pathname);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-dvh bg-[#050505] text-white">
	<aside
		class="fixed top-0 left-0 z-20 hidden h-dvh w-24 border-r border-white/10 bg-[#050505]/95 px-4 py-6 backdrop-blur md:flex md:flex-col md:items-center"
	>
		<a
			href={resolve('/')}
			class="mb-10 grid size-12 place-items-center rounded-full border border-white/10 text-xl font-black tracking-tight transition hover:bg-white/10"
			aria-label="Twitreads home"
		>
			@
		</a>

		<AppNav items={navItems} {pathname} variant="sidebar" />
	</aside>

	<div class="md:pl-24">
		<main class="mx-auto min-h-dvh w-full max-w-2xl border-x border-white/10 pb-28 md:pb-0">
			{@render children()}
		</main>
	</div>

	<AppNav items={navItems} {pathname} variant="bottom" />
</div>
