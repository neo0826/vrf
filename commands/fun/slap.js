const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const slap = require("../../json/gf.json")

module.exports = {
  name: 'slap',
  description: 'fun cmd',
  execute(message, args, client) {
            
      let sl = slap.sl[Math.floor((Math.random() * slap.sl.length))];
    
         var embed = new MessageEmbed()
         .setTitle("Slap Gif")
         .setImage(sl)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
