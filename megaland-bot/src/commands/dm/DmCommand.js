const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class DmCommand extends BaseCommand {
  constructor() {
    super('dm', []);
  }

  async run(client, message, args) {
    const permEmbed = new Discord.MessageEmbed()
      .setTitle(`Nemáš povolenie používať tento príkaz!`)
      .setFooter(`MegaLand - 2021`)
      .setColor("FF0000")
      .setTimestamp();
    const permsEmbed = new Discord.MessageEmbed()
      .setTitle(`Zadal si nesprávne MENO alebo ID!`)
      .setFooter(`MegaLand - 2021`)
      .setColor("FF0000")
      .setTimestamp();
    const permaEmbed = new Discord.MessageEmbed()
      .setTitle(`Nezadal si správu!`)
      .setFooter(`MegaLand - 2021`)
      .setColor("FF0000")
      .setTimestamp();  
    const doneEmbed = new Discord.MessageEmbed()
      .setTitle(`Správa bola odoslaná použivateľovi ${message.author.tag}!`)
      .setFooter(`MegaLand - 2021`)
      .setColor("#3AFF00")
      .setTimestamp();    
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(permEmbed)
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.channel.send(permsEmbed)
    if(!args.slice(1).join(' ')) return message.channel.send(permaEmbed)
    member.user.send(args.slice(1).join(' ')).then(() => message.channel.send(doneEmbed))
}
}
