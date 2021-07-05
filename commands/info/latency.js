const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'lateny',
	category: 'Info',
	description: 'Returns the bot\'s latency and API ping.',
	aliases: ['latency'],
	usage: 'latency',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		message.channel.send('🏓 checking latency....').then((msg) => {
			const pEmbed = new MessageEmbed()
				.setTitle('🏓 sapphire is dummy!')
				.setColor('BLUE')
				.setDescription(
					`Latency: ${Math.floor(
						msg.createdTimestamp - message.createdTimestamp,
					)}ms\nAPI Latency: ${client.ws.ping}ms`,
				);
			msg.edit(pEmbed);
		});
	},
};
