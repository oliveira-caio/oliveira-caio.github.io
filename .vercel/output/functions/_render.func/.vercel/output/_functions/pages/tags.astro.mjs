import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D6TuWplT.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Button } from '../chunks/Button_DIw3ceQi.mjs';
import 'clsx';
import { g as getAllPosts, b as getUniqueTagsWithCount } from '../chunks/post_Be4zEOlR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getAllPosts();
  const allTags = getUniqueTagsWithCount(allPosts);
  const meta = {
    description: "A list of all the topics I've written about in my posts",
    title: "All Tags"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "button" }, { "icon-before": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} <h1 class="mb-6 mt-5 text-2xl font-bold">Tags</h1> ${allTags.length === 0 && renderTemplate`<p>No posts yet.</p>`} ${allTags.length > 0 && renderTemplate`<ul class="flex flex-col gap-y-3"> ${allTags.map(([tag, val]) => renderTemplate`<li class="flex items-center gap-x-2 "> <a class="inline-block underline underline-offset-4 hover:text-foreground/75" data-astro-prefetch${addAttribute(`/tags/${tag}/`, "href")}${addAttribute(`View posts with the tag: ${tag}`, "title")}>
&#35;${tag} </a> <span class="inline-block">
- ${val} post${val > 1 && "s"} </span> </li>`)} </ul>`} <a href="https://github.com/srleom/astro-theme-resume.git" class="mt-16 inline-flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Get free template</p> </a> </div> ` })}`;
}, "/Users/caio/codes/website/src/pages/tags/index.astro", void 0);

const $$file = "/Users/caio/codes/website/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
