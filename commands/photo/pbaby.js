const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const baby = require("../../json/ph.json")

module.exports = {
  name: 'pbaby',
  description: 'random baby photo',
  execute(message, args, client) {
            
      let bb = baby.bb[Math.floor((Math.random() * baby.bb.length))];
    
         var embed = new MessageEmbed()
         .setTitle("baby photo")
         .setImage(bb)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
