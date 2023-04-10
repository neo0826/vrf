const { Permissions, Message, MessageActionRow, MessageButton, Client, MessageEmbed } = require("discord.js");

const { botid } = require("../../config.json");

module.exports = {
  name: 'help',
  description: 'all commands of bot',
  execute(message, args, client) {
            
       var embed = new MessageEmbed()
         .setTitle("📎 Support Server")
         .setURL("https://discord.gg/ZKyXDWhEJx")
         .setThumbnail(client.user.avatarURL({size:512}))
         .addField("🌍 Public:", `help, ping, invite`)
         .addField("🎴  Photos:", `panimal, pboy, pgirl, pbaby, pemoji`)
         .addField("✨  Gifs:", `animal, anime, boy, girl, baby, couple, emoji, sad, smoking, neon`)
         .addField("🎗️  Texts:", `textarabic, textenglish, textkurdish, textturkish, textitalian`)
         .setColor("RANDOM");

   const row = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${botid}&permissions=8&scope=bot%20applications.commands`)
        .setLabel("Invite")
            .setStyle("LINK")
    )   

    message.reply({ embeds: [embed] , components: [row] })
   }
}
//   message.reply({ embeds: [embed] })

//    }
// };
