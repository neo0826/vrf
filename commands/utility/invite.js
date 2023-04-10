const { Permissions, MessageActionRow, MessageButton, Message, Client, MessageEmbed } = require("discord.js");

const { botid } = require("../../config.json");

module.exports = {
  name: 'invite',
  description: 'invite commands of bot',
  execute(message, args, client) {
 
// var helpem = new MessageEmbed()
//   .setColor('WHITE')
// const row = new MessageActionRow().addComponents(
      const row = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=8&scope=bot%20applications.commands`)
        .setLabel("Invite")
            .setStyle("LINK")
    )        

    message.channel.send({ content: `<@${message.member.user.id}> ***Enjoy adding me.***`, components: [row] })
   }
}
