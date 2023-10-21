const highlighted = ['npm', 'cd', 'echo', 'git', 'npx'];

const operations = ['&&'];

const subcommands = ['init', 'add', 'commit', 'vercel'];

export default function (text: any) {
	let result = text;

	const replace = (original: string, replacement: string) => {
		result = result.replaceAll(new RegExp(`\\b${original}\\b`, 'g'), replacement);
	};

	highlighted.forEach((cmd) => {
		replace(cmd, `<b>${cmd}</b>`);
	});

	operations.forEach((op) => {
		replace(op, `<i>${op}</i>`);
	});

	subcommands.forEach((cmd) => {
		replace(cmd, `<i>${cmd}</i>`);
	});

	return result;
}
