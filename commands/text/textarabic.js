const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const arabic = require("../../json/tx.json")

module.exports = {
  name: 'textarabic',
  description: 'random arabic poetry',
  execute(message, args, client) {
            
      let ar = arabic.ar[Math.floor((Math.random() * arabic.ar.length))];
    
  message.reply({content: `${ar}` });

   }
};
