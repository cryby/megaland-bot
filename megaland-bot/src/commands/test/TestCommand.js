const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('say', []);
  }

  async run(client, message, args) {
    const permEmbed = new Discord.MessageEmbed()
      .setTitle(`Nemáš povolenie používať tento príkaz`)
      .setFooter(`MegaLand - 2021`)
      .setColor("FF0000")
      .setTimestamp();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(permEmbed);
    const messageToSay = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(`Oznámenie:`)
      .setDescription(messageToSay)
      .setFooter(message.author.tag ,message.author.displayAvatarURL())
      .setColor("#3AFF00")
      .setTimestamp();
    try {
      await message.channel.send(sayEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send('Správa obsahuje nepovolené znaky!');
    }
  }
}