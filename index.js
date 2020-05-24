const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
})

client.login('NzE0MDA1NDAwNTc5NjA0NTUw.Xsof-g.hdfqe9sS2U_5_j40WqsLcNuOCfM');

client.on('message', message => {
	const commandRegex = /\-\-cump\s(\w+)/;
	const gifPrefex = "https://tenor.com/view/letter-gif-9063"
	if (commandRegex.test(message.content)) {
		let flag = message.content.match(commandRegex)[1];
		
	}

	console.log(message);
})