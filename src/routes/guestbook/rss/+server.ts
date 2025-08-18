import type { RequestHandler } from "./$types";
import { pb } from "$lib/db";
import { RecordModel } from "pocketbase";

export const GET: RequestHandler = async ({ fetch, setHeaders }) => {
	setHeaders({
		"Cache-Control": "max-age=0, s-max-age=600",
		"Content-Type": "application/xml"
	});

	const messages = await pb.collection("guestbook").getFullList({
		sort: "-created"
	});

	return new Response(render(messages));
};

const render = (messages: RecordModel[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Zane Shaw's guestbook</title>
		<link>https://squidee.dev/guestbook</link>
		<description>A guestbook</description>
		<language>en-au</language>
		<category>Guestbook</category>
		<atom:link href="https://squidee.dev/guestbook/rss.xml" rel="self" type="application/rss+xml" />
		${messages.map(
			(message) => `<item>
			<title>${message.message}</title>${message.link ? `\n\t\t\t<link>${message.link}</link>` : ""}
			<author>${message.author}</author>
			<pubDate>${new Date(message.created).toUTCString()}</pubDate>
		</item>`
		)}
	</channel>
</rss>
`;
