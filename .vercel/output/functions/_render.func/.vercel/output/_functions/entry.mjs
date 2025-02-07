import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BfQ_6vaa.mjs';
import { manifest } from './manifest_GVtZW7Dt.mjs';

const _page0 = () => import('./pages/_astro/ec.cr7zp.css.astro.mjs');
const _page1 = () => import('./pages/_astro/ec.dy9ns.js.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const _page3 = () => import('./pages/404.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog/_---page_.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page8 = () => import('./pages/tags.astro.mjs');
const _page9 = () => import('./pages/tools.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro-expressive-code/routes/styles.ts", _page0],
    ["node_modules/astro-expressive-code/routes/scripts.ts", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/[...page].astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/tags/[tag]/[...page].astro", _page7],
    ["src/pages/tags/index.astro", _page8],
    ["src/pages/tools/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "74b3c346-8852-4e70-9498-c6b86f710a18",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
