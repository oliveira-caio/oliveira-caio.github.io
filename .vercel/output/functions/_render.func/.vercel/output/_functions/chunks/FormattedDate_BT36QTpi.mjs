import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes } from './astro/server_D6TuWplT.mjs';
import 'clsx';
import { s as siteConfig } from './_astro_content_DpeLT_2O.mjs';

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...siteConfig.date.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

const $$Astro = createAstro("https://oliveira-caio.github.io");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, dateTimeOptions, ...attrs } = Astro2.props;
  const postDate = getFormattedDate(date, dateTimeOptions);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${spreadAttributes(attrs)}> ${postDate} </time>`;
}, "/Users/caio/codes/website/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
