const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const english = require("../../json/tx.json")

module.exports = {
  name: 'textenglish',
  description: 'random english poetry',
  execute(message, args, client) {
            
      let en = english.en[Math.floor((Math.random() * english.en.length))];
    
  message.reply({content: `${en}`});

   }
};
