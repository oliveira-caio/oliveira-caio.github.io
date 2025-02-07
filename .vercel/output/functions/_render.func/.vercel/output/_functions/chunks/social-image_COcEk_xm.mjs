import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D6TuWplT.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"adding-your-own-social-image-to-a-post\">Adding your own social image to a post</h2>\n<p>This post is an example of how to add a custom <a href=\"https://ogp.me/\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">open graph</a> social image, also known as an OG image, to a blog post.\nBy adding the optional ogImage property to the frontmatter of a post, you opt out of <a href=\"https://github.com/vercel/satori\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">satori</a> automatically generating an image for this page.</p>\n<p>If you open this markdown file <code>src/content/post/social-image.md</code> you’ll see the ogImage property set to an image which lives in the public folder<sup><a href=\"#user-content-fn-1\" id=\"user-content-fnref-1\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">1</a></sup>.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.cr7zp.css\"><script type=\"module\" src=\"/_astro/ec.dy9ns.js\"></script><figure class=\"frame\"><figcaption class=\"header\"></figcaption><pre tabindex=\"0\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#800000;--1:#569CD6\">ogImage</span><span style=\"--0:#000000;--1:#D4D4D4\">: </span><span style=\"--0:#A31515;--1:#CE9178\">\"/social-card.png\"</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"ogImage: &#x22;/social-card.png&#x22;\"><div></div></button></div></figure></div>\n<p>You can view the one set for this template page <a href=\"https://astro-cactus.chriswilliams.dev/social-card.png\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">here</a>.</p>\n<section data-footnotes=\"\" class=\"footnotes\"><h2 class=\"\" id=\"footnote-label\">Footnotes</h2>\n<ol>\n<li id=\"user-content-fn-1\">\n<p>The image itself can be located anywhere you like. <a href=\"#user-content-fnref-1\" data-footnote-backref=\"\" aria-label=\"Back to reference 1\" class=\"data-footnote-backref\">↩</a></p>\n</li>\n</ol>\n</section>";

				const frontmatter = {"title":"Example OG Social Image","publishDate":"27 January 2023","description":"An example post for Astro Cactus, detailing how to add a custom social image card in the frontmatter","tags":["example","blog","image"],"ogImage":"/social-card.png","minutesRead":"1 min read"};
				const file = "/Users/caio/codes/website/src/content/post/social-image.md";
				const url = undefined;
				function rawContent() {
					return "\n## Adding your own social image to a post\n\nThis post is an example of how to add a custom [open graph](https://ogp.me/) social image, also known as an OG image, to a blog post.\nBy adding the optional ogImage property to the frontmatter of a post, you opt out of [satori](https://github.com/vercel/satori) automatically generating an image for this page.\n\nIf you open this markdown file `src/content/post/social-image.md` you'll see the ogImage property set to an image which lives in the public folder[^1].\n\n```yaml\nogImage: \"/social-card.png\"\n```\n\nYou can view the one set for this template page [here](https://astro-cactus.chriswilliams.dev/social-card.png).\n\n[^1]: The image itself can be located anywhere you like.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"adding-your-own-social-image-to-a-post","text":"Adding your own social image to a post"},{"depth":2,"slug":"footnote-label","text":"Footnotes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
