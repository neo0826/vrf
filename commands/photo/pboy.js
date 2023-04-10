const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const boy = require("../../json/ph.json")

module.exports = {
  name: 'pboy',
  description: 'random boy photo',
  execute(message, args, client) {
            
      let bo = boy.bo[Math.floor((Math.random() * boy.bo.length))];
    
         var embed = new MessageEmbed()
         .setTitle("boy photo")
         .setImage(bo)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
