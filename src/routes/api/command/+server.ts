import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
	const { command, secrets } = await request.json();

	switch (command) {
		case "help":
			return json({ status: "OK", action: null, messages: ["what? what do you want?!", "btw, there are secrets (type `help secrets`)"] });
		case "help secrets":
			let secretsFound = 0;
			const saved = secrets;
			if (saved != null) secretsFound = JSON.parse(saved).length;

			return json({
				status: "OK",
				action: null,
				messages: [
					`(${secretsFound}/5 secrets)`,
					"you can find secrets both on this website and my other projects in the folio tab.",
					"all secrets can be found in plain text without digging into the code.",
					"when you find a secret, type it in the console. here, try this one:",
					"2ae40f"
				]
			});
		case "2ae40f":
			return trySecret(command, secrets, ['congrats! you "found" a code. (this one does nothing :D)']);
		case "74d1f5":
			return trySecret(command, secrets, ["congrats! you found a code."]);
		default:
			return json({ status: "ERROR", action: null, messages: ["unknown command!!"] });
	}
};

const trySecret = (secret: string, secrets: string, successMessages: string[]) => {
	let parsedSecrets: string[];
	try {
		parsedSecrets = JSON.parse(secrets) ?? [];
	} catch {
		return json({ status: "ERROR", action: null, messages: ["unknown error!!"] });
	}

	const index = parsedSecrets.indexOf(secret);
	if (index > -1) {
		return json({ status: "OK", action: "secret_repeat", messages: ["you already found this code :/"] });
	} else {
		return json({ status: "OK", action: "secret_new", messages: successMessages });
	}
};
