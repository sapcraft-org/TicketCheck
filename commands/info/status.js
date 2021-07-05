const { MessageEmbed } = require('discord.js');
const { parseDur } = require('../../functions');

module.exports = {
	name: 'status',
	description: 'Check how long has the sapphire been online.',
	category: 'Info',
	aliases: [ 'status' ],
	usage: 'status',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		const duration = parseDur(client.uptime);
		message.channel.send('⌛ hacking sapphire pc').then((msg) => {
			const pEmbed = new MessageEmbed()
				.setTitle(':inbox_tray: Online for')
				.setColor('BLUE')
				.setDescription(
					`**${duration}**`,
				);
			msg.edit(pEmbed);
		});
	},
};
