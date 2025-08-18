import type { RequestHandler } from "./$types";
import { pb } from "$lib/db";
import { RecordModel } from "pocketbase";

export const GET: RequestHandler = async ({ setHeaders }) => {
	setHeaders({
		"Cache-Control": "max-age=0, s-maxage=600",
		"Content-Type": "application/xml"
	});

	const messages = await pb.collection("guestbook").getFullList({
		sort: "-created"
	});

	return new Response(render(messages));
};

const render = (messages: RecordModel[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
	<channel>
		<title>Zane Shaw's guestbook</title>
		<link>https://squidee.dev/guestbook</link>
		<description>A guestbook</description>
		<language>en-au</language>
		<category>Guestbook</category>
		<atom:link href="https://squidee.dev/feeds/guestbook" rel="self" type="application/rss+xml" />
		${messages.map(
			(message) => `<item>
			<title>${message.message}</title>${message.link ? `\n\t\t\t<link>${message.link}</link>` : ""}
			<dc:creator>${message.author}</dc:creator>
			<pubDate>${new Date(message.created).toUTCString()}</pubDate>
			<guid isPermaLink="false">${message.id}</guid>
		</item>`
		).join("\n\t\t")}
	</channel>
</rss>
`;
