import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const entries = await getCollection('docs');

// Map each docs page to the data the OG image needs, keyed by its route slug.
const pages = Object.fromEntries(
	entries.map((entry) => [entry.id, { data: entry.data }])
);

export const { getStaticPaths, GET } = await OGImageRoute({
	param: 'slug',
	pages,
	getImageOptions: (_path, page: (typeof pages)[string]) => ({
		title: page.data.title,
		description: page.data.description ?? 'Combat Robots Wiki',
		logo: {
			path: './src/assets/og-logo.png',
			size: [72],
		},
		bgGradient: [
			[13, 17, 23],
			[22, 27, 34],
		],
		border: { color: [124, 58, 237], width: 12, side: 'inline-start' },
		padding: 72,
		font: {
			title: {
				color: [255, 255, 255],
				size: 64,
				weight: 'Bold',
				lineHeight: 1.1,
			},
			description: {
				color: [173, 186, 199],
				size: 30,
				lineHeight: 1.4,
			},
		},
		fonts: ['./src/assets/fonts/inter-700.ttf', './src/assets/fonts/inter-400.ttf'],
	}),
});
