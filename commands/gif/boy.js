const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: 'boy',
  description: 'random boy gifs',
  execute(message, args, client) {
            
       axios.get("https://api.roxza.me/v1/random?type=man")
       .then(res => {
         var embed = new MessageEmbed()
         .setTitle("Boy/man Gif")
         .setImage(res.data.url)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })
    })

   }
};
