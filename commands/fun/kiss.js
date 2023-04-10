const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const kiss = require("../../json/gf.json")

module.exports = {
  name: 'kiss',
  description: 'fun cmd',
  execute(message, args, client) {
            
      let ks = kiss.ks[Math.floor((Math.random() * kiss.ks.length))];
    
         var embed = new MessageEmbed()
         .setTitle("Kiss Gif")
         .setImage(ks)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
