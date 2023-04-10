const { Permissions, Message, Client, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: 'girl',
  description: 'random woman/girl gifs',
  execute(message, args, client) {
            
       axios.get("https://api.roxza.me/v1/random?type=woman")
       .then(res => {
         var embed = new MessageEmbed()
         .setTitle("Girl/woman Gif")
         .setImage(res.data.url)
         .setFooter(message.author.tag)
         .setColor("#303136");
  message.reply({ embeds: [embed] })
    })

   }
};
