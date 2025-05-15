// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Mod_getConfig } from './pages/[mod]';
// prettier-ignore
import type { getConfig as Root_getConfig } from './pages/_root';
// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as RaiPal_getConfig } from './pages/rai-pal';

// prettier-ignore
type Page =
| ({ path: '/[mod]' } & GetConfigResponse<typeof Mod_getConfig>)
| ({ path: '/_root' } & GetConfigResponse<typeof Root_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/rai-pal' } & GetConfigResponse<typeof RaiPal_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  