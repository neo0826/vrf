const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const baka = require("../../json/gf.json")

module.exports = {
  name: 'baka',
  description: 'fun cmd',
  execute(message, args, client) {
            
      let bk = baka.bk[Math.floor((Math.random() * baka.bk.length))];
    
         var embed = new MessageEmbed()
         .setTitle("Baka Gif")
         .setImage(bk)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
