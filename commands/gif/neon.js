const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const neon = require("../../json/gf.json")

module.exports = {
  name: 'neon',
  description: 'random neon gifs',
  execute(message, args, client) {
            
      let ne = neon.ne[Math.floor((Math.random() * neon.ne.length))];
    
         var embed = new MessageEmbed()
         .setTitle("neon Gif")
         .setImage(ne)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
