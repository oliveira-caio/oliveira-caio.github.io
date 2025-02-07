import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D6TuWplT.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Example Cover Image","description":"This post is an example of how to add a cover/hero image","publishDate":"04 July 2023","updatedDate":"14 August 2023","coverImage":{"src":"./cover.png","alt":"Astro build wallpaper"},"tags":["test","image"],"minutesRead":"0 min read"};
				const file = "/Users/caio/codes/website/src/content/post/cover-image/index.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
