import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	ssr: {
		external: [
			'@libsql/client',
			'libsql',
			'@libsql/darwin-arm64',
			'@libsql/darwin-x64',
			'@libsql/linux-arm-gnueabihf',
			'@libsql/linux-arm-musleabihf',
			'@libsql/linux-arm64-gnu',
			'@libsql/linux-arm64-musl',
			'@libsql/linux-x64-gnu',
			'@libsql/linux-x64-musl',
			'@libsql/win32-x64-msvc'
		]
	},
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium', headless: true }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**']
				}
			},

			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
