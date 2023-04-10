const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const smoking = require("../../json/gf.json")

module.exports = {
  name: 'smoking',
  description: 'random smoking gifs',
  execute(message, args, client) {
            
      let sm = smoking.sm[Math.floor((Math.random() * smoking.sm.length))];
    
         var embed = new MessageEmbed()
         .setTitle("smoking Gif")
         .setImage(sm)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
