const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: 'dance',
  description: 'fun',
  execute(message, args, client) {
    axios.get("https://nekos.best/api/v2/dance")
        .then(res => {
         var embed = new MessageEmbed()
         .setTitle("Dance Gif")
         .setImage(`${res.data.url}`)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })
      })

   }
};