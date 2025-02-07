const id = "draft-post.md";
						const collection = "post";
						const slug = "draft-post";
						const body = "\nIf this is working correctly, this post should only be accessible in a dev environment, as well as any tags that are unique to this post.\n";
						const data = {title:"A working draft title",description:"This post is for testing the draft post functionality",publishDate:new Date(1694296800000),draft:true,tags:["test"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/caio/codes/website/src/content/post/draft-post.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
