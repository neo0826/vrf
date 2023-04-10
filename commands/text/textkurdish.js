const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const kurd = require("../../json/tx.json")

module.exports = {
  name: 'textkurdish',
  description: 'random kurdish poetry',
  execute(message, args, client) {
            
      let kr = kurd.kr[Math.floor((Math.random() * kurd.kr.length))];
    
  message.reply({content:`${kr}`});

   }
};
