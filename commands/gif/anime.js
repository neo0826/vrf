const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: 'anime',
  description: 'random anime gifs',
  execute(message, args, client) {
            
       axios.get("https://api.roxza.me/v1/random?type=anime")
       .then(res => {
         var embed = new MessageEmbed()
         .setTitle("Anime Gif")
         .setImage(res.data.url)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })
    })

   }
};
