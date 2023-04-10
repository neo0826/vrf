const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const persian = require("../../json/tx.json")

module.exports = {
  name: 'textpersian',
  description: 'random perisan poetry',
  execute(message, args, client) {
            
      let pr = persian.pr[Math.floor((Math.random() * persian.pr.length))];
    
  message.reply({content:`${pr}`});

   }
};
