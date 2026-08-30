import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

const SITE = 'https://wiki.combatrobots.org';
const SITE_NAME = 'Combat Robots Wiki';

/** Human-readable labels for the top-level section slugs, for breadcrumbs. */
const SECTION_LABELS: Record<string, string> = {
	fundamentals: 'Fundamentals',
	drivetrain: 'Drivetrain',
	weapons: 'Weapons',
	power: 'Power & Electronics',
	reference: 'Reference',
};

export const onRequest = defineRouteMiddleware((context) => {
	const { head, entry, id, lastUpdated } = context.locals.starlightRoute;
	const canonical = new URL(context.url.pathname, SITE).href;
	const isHome = context.url.pathname === '/' || id === '' || id === 'index';

	// --- Open Graph / Twitter image -----------------------------------------
	// Keyed by the docs collection entry id — see src/pages/og/[...slug].ts.
	const ogImage = `${SITE}/og/${entry.id || 'index'}.png`;

	// Starlight hard-codes og:type=article; the landing page is a website.
	if (isHome) {
		const ogType = head.find(
			(t) => t.tag === 'meta' && t.attrs?.property === 'og:type'
		);
		if (ogType?.attrs) ogType.attrs.content = 'website';
	}

	head.push(
		{ tag: 'meta', attrs: { property: 'og:image', content: ogImage } },
		{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
		{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
		{
			tag: 'meta',
			attrs: { property: 'og:image:alt', content: `${entry.data.title} — ${SITE_NAME}` },
		},
		{ tag: 'meta', attrs: { name: 'twitter:image', content: ogImage } },
		{ tag: 'meta', attrs: { name: 'twitter:title', content: entry.data.title } },
		...(entry.data.description
			? [
					{
						tag: 'meta' as const,
						attrs: { name: 'twitter:description', content: entry.data.description },
					},
			  ]
			: [])
	);

	// --- Structured data (JSON-LD) -----------------------------------------
	const graph: Record<string, unknown>[] = [
		{
			'@type': 'WebSite',
			'@id': `${SITE}/#website`,
			url: `${SITE}/`,
			name: SITE_NAME,
			description:
				'A technical reference wiki for combat robot builders — the engineering of drivetrains, weapons, power, electronics, structure, and rules compliance, insect classes first.',
			publisher: { '@id': `${SITE}/#org` },
			inLanguage: 'en',
		},
		{
			'@type': 'Organization',
			'@id': `${SITE}/#org`,
			name: 'Team Happy Bots',
			url: SITE,
			logo: `${SITE}/favicon.svg`,
		},
	];

	if (!isHome) {
		const section = context.url.pathname.replace(/^\/|\/$/g, '').split('/')[0];
		const crumbs: { name: string; item?: string }[] = [{ name: 'Home', item: `${SITE}/` }];
		if (section && SECTION_LABELS[section]) {
			// No section landing page exists, so this crumb is a label only.
			crumbs.push({ name: SECTION_LABELS[section] });
		}
		crumbs.push({ name: entry.data.title, item: canonical });

		const itemList = crumbs.map((crumb, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: crumb.name,
			...(crumb.item ? { item: crumb.item } : {}),
		}));

		graph.push(
			{
				'@type': 'TechArticle',
				'@id': `${canonical}#article`,
				headline: entry.data.title,
				description: entry.data.description,
				url: canonical,
				isPartOf: { '@id': `${SITE}/#website` },
				publisher: { '@id': `${SITE}/#org` },
				inLanguage: 'en',
				...(lastUpdated ? { dateModified: lastUpdated.toISOString() } : {}),
			},
			{
				'@type': 'BreadcrumbList',
				'@id': `${canonical}#breadcrumb`,
				itemListElement: itemList,
			}
		);
	}

	head.push({
		tag: 'script',
		attrs: { type: 'application/ld+json' },
		content: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
	});
});
