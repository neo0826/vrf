const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const baby = require("../../json/gf.json")

module.exports = {
  name: 'baby',
  description: 'random baby gifs',
  execute(message, args, client) {
            
      let by = baby.by[Math.floor((Math.random() * baby.by.length))];
    
         var embed = new MessageEmbed()
         .setTitle("baby Gif")
         .setImage(by)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
