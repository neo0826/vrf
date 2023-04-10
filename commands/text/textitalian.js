const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const italy = require("../../json/tx.json")

module.exports = {
  name: 'textitalian',
  description: 'random italian poetry',
  execute(message, args, client) {
            
      let it = italy.it[Math.floor((Math.random() * italy.it.length))];
    
  message.reply({content:`${it}`});

   }
};
