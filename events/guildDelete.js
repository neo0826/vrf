const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js") 

module.exports = {
  name: 'guildDelete',
  async execute(guild, client) {

  var embed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`
guildName : ${guild.name}
guildId : ${guild.id}
members : ${guild.memberCount}
`)
client.channels.cache.get("1071140629960196227").send({embeds : [embed]})
  }}
