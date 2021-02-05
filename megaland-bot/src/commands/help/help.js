const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class DmEmbed extends BaseCommand {
  constructor() {
    super('help', []);
  }

  async run(client, message, args) {
    const permaEmbed = new Discord.MessageEmbed()
      .setTitle(`Nemáš povolenie používať tento príkaz!`)
      .setFooter(`MegaLand - 2021`)
      .setColor("FF0000")
      .setTimestamp();
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(permaEmbed)
    const permEmbed = new Discord.MessageEmbed()
      .setTitle(`MegaLand™ by cryBy`)
      .addFields(
		{ name: 'Say Command', value: '`-say @message`', inline: true },
        { name: 'Normal DM', value: '`-dm @user @message`', inline: true },
        { name: 'Custom DM', value: '`-cdm @user @message`', inline: true },
        )
      .setFooter(`MegaLand - 2021`)
      .setColor("00FFFF")
      .setThumbnail('https://i.imgur.com/l9BXd9e.png')
      .setTimestamp();
    message.author.send(permEmbed)

}
}