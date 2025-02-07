import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from './astro/server_D6TuWplT.mjs';
import 'kleur/colors';
import { $ as $$FormattedDate } from './FormattedDate_BT36QTpi.mjs';

const $$Astro = createAstro("https://oliveira-caio.github.io");
const $$PostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { as: Tag = "div", post, withDesc = false } = Astro2.props;
  const postDate = post.data.updatedDate ?? post.data.publishDate;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col gap-2 sm:flex-row sm:gap-x-4 [&_q]:basis-full"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "min-w-[120px]", "date": postDate })} ${renderComponent($$result, "Tag", Tag, {}, { "default": ($$result2) => renderTemplate`${post.data.draft && renderTemplate`<span class="text-red-500">(Draft) </span>`}<a data-astro-prefetch${addAttribute(`/blog/${post.slug}/`, "href")} class="transition-all hover:text-muted-foreground"> ${post.data.title} </a> ${withDesc && renderTemplate`<p class="line-clamp-3 block text-sm italic text-muted-foreground"> ${post.data.description} </p>`}` })} </li>`;
}, "/Users/caio/codes/website/src/components/blog/PostPreview.astro", void 0);

export { $$PostPreview as $ };
