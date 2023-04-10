const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const emoji = require("../../json/ph.json")

module.exports = {
  name: 'pemoji',
  description: 'random emoji photo',
  execute(message, args, client) {
            
      let emo = emoji.emo[Math.floor((Math.random() * emoji.emo.length))];

         var embed = new MessageEmbed()
         .setTitle("Emoji photo")
         .setImage(emo)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
