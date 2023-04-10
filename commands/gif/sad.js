const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const sad = require("../../json/gf.json")

module.exports = {
  name: 'sad',
  description: 'random sad gifs',
  execute(message, args, client) {
            
      let sa = sad.sa[Math.floor((Math.random() * sad.sa.length))];
    
         var embed = new MessageEmbed()
         .setTitle("sad Gif")
         .setImage(sa)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
