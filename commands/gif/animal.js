const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const animal = require("../../json/gf.json")

module.exports = {
  name: 'animal',
  description: 'random animal gifs',
  execute(message, args, client) {
            
      let an = animal.an[Math.floor((Math.random() * animal.an.length))];
    
         var embed = new MessageEmbed()
         .setTitle("animal Gif")
         .setImage(an)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
