const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const animal = require("../../json/ph.json")

module.exports = {
  name: 'panimal',
  description: 'random animal photo',
  execute(message, args, client) {
            
      let an = animal.an[Math.floor((Math.random() * animal.an.length))];
    
         var embed = new MessageEmbed()
         .setTitle("animal photo")
         .setImage(an)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
