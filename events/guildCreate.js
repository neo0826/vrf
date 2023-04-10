const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js") 

module.exports = {
  name: 'guildCreate',
  async execute(guild, client) {

  var embed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`
guildName : **${guild.name}**
guildId : ${guild.id}
members : ${guild.memberCount}
`)
client.channels.cache.get("1071140605507416174").send({embeds : [embed]})
  }}
