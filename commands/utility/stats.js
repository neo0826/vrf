const { Permissions, Message, MessageActionRow, MessageButton, Client, MessageEmbed } = require("discord.js");
const { botid } = require("../../config.json");

module.exports = {
  name: 'botinfo',
  description: 'bot informations',
  execute(message, args, client) {
            
       var embed = new MessageEmbed()
         .setTitle("<:emoji_1:1070597168781594684>  Support Server")
         .setURL("https://discord.gg/ZKyXDWhEJx")
         .setThumbnail(client.user.avatarURL({size:512}))
         .setColor("RANDOM")
         .addField('Ping:', `${client.ws.ping}ms`, true)
         .addField('Memory:', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
         .addField('Guilds:', `${client.guilds.cache.size} guilds`, true)
         .addField(`Users:`, `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}, users`, true)
         .addField('Owner:', `Slòth#0826`, true) 
        .setTimestamp()
        .setFooter({ text: "Thanks For Choosing Me!" })

   const row = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.com/users/729019851049402498`)
        .setLabel("Slòth#0826")
            .setStyle("LINK")
    )   

    message.reply({ embeds: [embed] , components: [row] })
   }
}
