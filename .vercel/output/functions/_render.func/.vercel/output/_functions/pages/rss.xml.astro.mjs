import rss from '@astrojs/rss';
import { s as siteConfig } from '../chunks/_astro_content_DpeLT_2O.mjs';
import 'clsx';
import { g as getAllPosts } from '../chunks/post_Be4zEOlR.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const posts = await getAllPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://oliveira-caio.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}`
    }))
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
