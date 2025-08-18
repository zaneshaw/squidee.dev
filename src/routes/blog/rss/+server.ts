import type { RequestHandler } from "./$types";
import { pb } from "$lib/db";
import { RecordModel } from "pocketbase";

export const GET: RequestHandler = async ({ setHeaders }) => {
	setHeaders({
		"Cache-Control": "max-age=0, s-max-age=600",
		"Content-Type": "application/xml"
	});

	const posts = await pb.collection("posts").getFullList({
		sort: "-created"
	});

	return new Response(render(posts));
};

const render = (posts: RecordModel[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Zane Shaw's blog</title>
		<link>https://squidee.dev/blog</link>
		<description>A blog</description>
		<language>en-au</language>
		<category>Blog</category>
		<atom:link href="https://squidee.dev/blog/rss" rel="self" type="application/rss+xml" />
		${posts.map(
			(post) => `<item>
			<title>${post.title}</title>
			<link>https://squidee.dev/blog/${post.slug}</link>
			<description>${post.blurb}</description>
			<pubDate>${new Date(post.created).toUTCString()}</pubDate>
		</item>`
		).join("\n\t\t")}
	</channel>
</rss>
`;
