const { BOT_TOKEN } = process.env;

module.exports = {
	name: 'reload',
	category: 'Owner',
	description: 'Restarts the bot.',
	aliases: ['reload'],
	usage: 'reload',
	userperms: ['BOT_OWNER'],
	botperms: ['USE_EXTERNAL_EMOJIS'],
	run: async (client, message, args) => {
		try {
			message.channel.send('⚙ Restarting...').then(msg => msg.delete({ timeout: 300 }))
				.then(() => client.destroy())
				.then(() => client.login(BOT_TOKEN))
				.then(() => message.channel.send('R.I.P sapphire pc restarted'));
		}
		catch (e) {
			return message.channel.send(
				'An error occurred, please try again!',
			);
		}
	},
};
