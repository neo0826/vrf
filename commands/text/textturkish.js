const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const turk = require("../../json/tx.json")

module.exports = {
  name: 'textturkish',
  description: 'random turkish poetry',
  execute(message, args, client) {
            
      let tr = turk.tr[Math.floor((Math.random() * turk.tr.length))];
    
  message.reply({content:`${tr}`});

   }
};
