// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	// Update this to your real domain once deployed. Needed for correct
	// absolute URLs in sitemap, llms.txt, and Open Graph tags.
	site: 'https://combatrobots.wiki',
	integrations: [
		starlight({
			title: 'Combat Robots Wiki',
			description:
				'An open, community-maintained knowledge base for combat robotics — building, competing, rules, and resources.',
			plugins: [
				starlightLlmsTxt({
					projectName: 'Combat Robots Wiki',
					description:
						'An open, community-maintained knowledge base for combat robotics — building, competing, rules, and resources.',
				}),
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/teamhappybots/wiki',
				},
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Introduction', slug: 'start-here/introduction' },
						{ label: 'Contributing', slug: 'start-here/contributing' },
					],
				},
				{
					label: 'Building',
					items: [{ autogenerate: { directory: 'building' } }],
				},
				{
					label: 'Competing',
					items: [{ autogenerate: { directory: 'competing' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
