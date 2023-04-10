const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const girl = require("../../json/bn.json")

module.exports = {
  name: 'girlbanner',
  description: 'random girls banner',
  execute(message, args, client) {
            
      let gb = girl.gb[Math.floor((Math.random() * girl.gb.length))];
    
         var embed = new MessageEmbed()
         .setTitle("Random Girls Banner")
         .setImage(gb)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
