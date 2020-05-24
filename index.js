import { Client } from 'discord.js';
const client = new Client();

client.once('ready', () => {
	console.log('Ready!');
})

client.login('NzE0MDA1NDAwNTc5NjA0NTUw.Xsof-g.hdfqe9sS2U_5_j40WqsLcNuOCfM');

client.on('message', message => {
	const commandRegex = /\-\-cump\s(\w+)/;
	const gifPrefex = "https://tenor.com/view/letter-gif-90637";
	const gifL = "https://tenor.com/view/red-alphabet-letter-dancing-letter-l-cartoons-gif-12084376";
	if (commandRegex.test(message.content)) {
		let flag = message.content.match(commandRegex)[1].toLowerCase();
		for (let i = 0; i < flag.length; i++) {
			let gifSuffix = flag.charCodeAt(i) - 52
			if (flag.charAt(i) != 'l') {
				message.channel.send(gifPrefex + gifSuffix)
					.then(console.log("success"))
					.catch(console.error);

			} else {
				message.channel.send(gifL)
					.then(console.log("success"))
					.catch(console.error);
			}
		}
	}
})