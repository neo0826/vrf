const { Permissions, Message, MessageActionRow, MessageButton, Client, MessageEmbed } = require("discord.js");
const { botid } = require("../../config.json");

module.exports = {
  name: 'avatar',
  description: 'avatar: /yours/user',
  execute(message, args, client) {
    
    let user = message.mentions.users.first() || message.author;
    let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${user.username}'s Avatar`)
      .setDescription(
        `[Avatar Link](${user.displayAvatarURL({
          size: 2048,
          dynamic: true,
          format: "png",
        })})`
      )
      .setImage(user.avatarURL({ size: 2048, dynamic: true, format: "png" }));

    message.channel.send({ embeds: [embed] });
    message.delete();
  }
}
