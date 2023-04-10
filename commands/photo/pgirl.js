const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const girl = require("../../json/ph.json")

module.exports = {
  name: 'pgirl',
  description: 'random girl photo',
  execute(message, args, client) {
            
      let gl = girl.gl[Math.floor((Math.random() * girl.gl.length))];
    
         var embed = new MessageEmbed()
         .setTitle("Girl photo")
         .setImage(gl)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })

   }
};
