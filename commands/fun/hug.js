const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const hug = require("../../json/gf.json")

module.exports = {
  name: 'hug',
  description: 'fun cmd',
  execute(message, args, client) {
            
      let hg = hug.hg[Math.floor((Math.random() * hug.hg.length))];
    
         var embed = new MessageEmbed()
         .setTitle("Hug Gif")
         .setImage(hg)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
