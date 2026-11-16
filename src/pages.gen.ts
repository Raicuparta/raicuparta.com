// deno-fmt-ignore-file
// biome-ignore-all format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse, SearchCodecsForPages } from 'waku/router';

// prettier-ignore
import type { getConfig as File_Mod_getConfig } from './pages/[mod]';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_RaiPalDocsDiscordPrivacy_getConfig } from './pages/rai-pal-docs/discord-privacy';
// prettier-ignore
import type { getConfig as File_RaiPalDocsDiscordTerms_getConfig } from './pages/rai-pal-docs/discord-terms';
// prettier-ignore
import type { getConfig as File_RaiPal_getConfig } from './pages/rai-pal';
// prettier-ignore
import type { getConfig as File_Layout_getConfig } from './pages/_layout';

// prettier-ignore
type Page =
| ({ path: '/[mod]' } & GetConfigResponse<typeof File_Mod_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/rai-pal-docs/discord-privacy' } & GetConfigResponse<typeof File_RaiPalDocsDiscordPrivacy_getConfig>)
| ({ path: '/rai-pal-docs/discord-terms' } & GetConfigResponse<typeof File_RaiPalDocsDiscordTerms_getConfig>)
| ({ path: '/rai-pal' } & GetConfigResponse<typeof File_RaiPal_getConfig>);

// prettier-ignore
type Layout =
| ({ path: '/' } & Awaited<ReturnType<typeof File_Layout_getConfig>>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
    layouts: Layout;
  }
  interface SearchCodecsConfig extends SearchCodecsForPages<Page> {}
}
