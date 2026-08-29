// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

const DESCRIPTION =
	'A technical reference wiki for combat robot builders — the engineering of drivetrains, weapons, power, electronics, structure, and rules compliance, insect classes first.';

// https://astro.build/config
export default defineConfig({
	// Custom domain (configured in Vercel + Namecheap DNS). Used for absolute
	// URLs in the sitemap, llms.txt, and Open Graph tags.
	site: 'https://wiki.combatrobots.org',
	integrations: [
		starlight({
			title: 'Combat Robots Wiki',
			description: DESCRIPTION,
			plugins: [
				starlightLlmsTxt({
					projectName: 'Combat Robots Wiki',
					description: DESCRIPTION,
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
					label: 'Fundamentals',
					items: [
						{ label: 'Overview', slug: 'fundamentals/overview' },
						{ label: 'Weight budgeting', slug: 'fundamentals/weight-budgeting' },
						{ label: 'Power, torque & gearing', slug: 'fundamentals/power-torque-gearing' },
						{ label: 'Traction & pushing force', slug: 'fundamentals/traction' },
						{ label: 'Weapon energy & gyro effects', slug: 'fundamentals/weapon-energy' },
					],
				},
				{
					label: 'Drivetrain',
					items: [
						{ label: 'Drive motors', slug: 'drivetrain/motors' },
						{ label: 'Gearing & wheels', slug: 'drivetrain/gearing-wheels' },
						{ label: 'Drivetrain layouts', slug: 'drivetrain/layouts' },
						{ label: 'Drive ESCs', slug: 'drivetrain/escs' },
					],
				},
				{
					label: 'Weapons',
					items: [
						{ label: 'Spinner types', slug: 'weapons/spinner-types' },
						{ label: 'Weapon geometry & bite', slug: 'weapons/geometry-bite' },
						{ label: 'Weapon motors & ESCs', slug: 'weapons/motors-escs' },
						{ label: 'Shafts, bearings & mounting', slug: 'weapons/shafts-bearings' },
						{ label: 'Flippers & lifters', slug: 'weapons/flippers-lifters' },
						{ label: 'Control bots & wedges', slug: 'weapons/control-wedges' },
					],
				},
				{
					label: 'Power & Electronics',
					items: [
						{ label: 'LiPo batteries', slug: 'power/lipo-batteries' },
						{ label: 'Battery safety & charging', slug: 'power/battery-safety' },
						{ label: 'Wiring & current capacity', slug: 'power/wiring' },
						{ label: 'Connectors', slug: 'power/connectors' },
						{ label: 'Power switches & removable links', slug: 'power/switches-links' },
						{ label: 'Radio systems & failsafe', slug: 'power/radio' },
						{ label: 'Brushless ESC firmware', slug: 'power/esc-firmware' },
						{ label: 'Bench testing & the test box', slug: 'power/bench-testing' },
					],
				},
				// TODO: re-enable these sections as their content pages are added.
				// {
				// 	label: 'Structure & Materials',
				// 	items: [
				// 		{ label: 'Frame construction', slug: 'structure/frame-construction' },
				// 		{ label: 'Material properties', slug: 'structure/material-properties' },
				// 		{ label: '3D printing for combat', slug: 'structure/3d-printing' },
				// 		{ label: 'Fasteners & threads', slug: 'structure/fasteners' },
				// 		{ label: 'Armor design', slug: 'structure/armor' },
				// 		{ label: 'Self-righting', slug: 'structure/self-righting' },
				// 	],
				// },
				// {
				// 	label: 'Rules & Compliance',
				// 	items: [
				// 		{ label: 'SPARC construction specs', slug: 'rules/sparc-construction' },
				// 		{ label: 'Weight classes', slug: 'rules/weight-classes' },
				// 		{ label: 'Required safety systems', slug: 'rules/safety-systems' },
				// 		{ label: 'Prohibited systems', slug: 'rules/prohibited' },
				// 		{ label: 'Tech inspection checklist', slug: 'rules/tech-inspection' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	items: [
				// 		{ label: 'Glossary', slug: 'reference/glossary' },
				// 		{ label: 'Material data', slug: 'reference/material-data' },
				// 		{ label: 'Fastener data', slug: 'reference/fastener-data' },
				// 		{ label: 'Supplier directory', slug: 'reference/suppliers' },
				// 		{ label: 'Open designs directory', slug: 'reference/open-designs' },
				// 		{ label: 'Communities', slug: 'reference/communities' },
				// 		{ label: 'External resources', slug: 'reference/external-resources' },
				// 		{ label: 'Software & tools', slug: 'reference/software' },
				// 		{ label: 'Contributing', slug: 'reference/contributing' },
				// 	],
				// },
			],
		}),
	],
});
