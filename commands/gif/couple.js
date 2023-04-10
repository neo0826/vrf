const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const couple = require("../../json/gf.json")

module.exports = {
  name: 'couple',
  description: 'random couple gifs',
  execute(message, args, client) {
            
      let cp = couple.cp[Math.floor((Math.random() * couple.cp.length))];
    
         var embed = new MessageEmbed()
         .setTitle("couple Gif")
         .setImage(cp)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
