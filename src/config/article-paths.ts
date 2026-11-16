export const ARTICLE_PATHS: Record<string, string> = {
  'guides/beginner-guide': 'beginner-guide',
  'guides/co-op': 'co-op',
  'guides/evac-corridor': 'evac-corridor',
  'guides/units-tier-list': 'units-tier-list',
  'guides/boston': 'maps/boston',
  'guides/miami': 'maps/miami',
  'guides/safe-zones': 'safe-zones',
  'guides/defense-strategy': 'defense-strategy',
  'guides/upgrades': 'upgrades',
  'guides/custom-maps': 'custom-maps',
};

export function articlePath(category: string, slug: string): string {
  return ARTICLE_PATHS[`${category}/${slug}`] ?? `${category}/${slug}`;
}
