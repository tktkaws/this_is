// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Takayuki Takahashi',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			sidebar: [
				{
					label: '自己紹介',
					autogenerate: { directory: 'introduction' },
				},
				{
					label: '技術スタック',
					autogenerate: { directory: 'skills' },
				},
				{
					label: '職歴・経歴',
					autogenerate: { directory: 'career' },
				},
				{
					label: 'プロジェクト実績',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'ブログ',
					autogenerate: { directory: 'blog' },
				},
				{
					label: '連絡先',
					autogenerate: { directory: 'contact' },
				},
			],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
		}),
	],
});
