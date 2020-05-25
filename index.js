const Discord = require("discord.js");
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
})

client.login('--your token here--');
	.catch(console.error);

client.on('message', message => {
	const commandRegex = /\-\-wordbot\s([\w\s]+)/;
	const gifPrefex = "https://tenor.com/view/letter-gif-90637";
	const gifL = "https://tenor.com/view/red-alphabet-letter-dancing-letter-l-cartoons-gif-12084376";
	if (commandRegex.test(message.content)) {
		let flag = message.content.match(commandRegex)[1].toLowerCase();
		if (flag.length > 10) {
			console.log(`User ${message.author.username} submitted a message over 10 characters`);
			return;
		}
		for (let i = 0; i < flag.length; i++) {
			switch (flag.charAt(i)) {
				case ' ':
					continue;
				case 'l':
					message.channel.send(gifL)
						.then(console.log("success"))
						.catch(console.error);
					break;
				default:
					let gifSuffix = flag.charCodeAt(i) - 52;
					message.channel.send(gifPrefex + gifSuffix)
					.then(console.log("success"))
					.catch(console.error);

			}
		}
	}
})
