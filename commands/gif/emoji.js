const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const emoji = require("../../json/gf.json")

module.exports = {
  name: 'emoji',
  description: 'random emoji gifs',
  execute(message, args, client) {
            
      let em = emoji.em[Math.floor((Math.random() * emoji.em.length))];
    
         var embed = new MessageEmbed()
         .setTitle("emoji Gif")
         .setImage(em)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
