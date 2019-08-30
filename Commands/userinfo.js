const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");
  
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    var userinf = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(0x00FF00)
        .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Created At:", message.author.createdAt)

        message.channel.send(userinf);
  }
  message.delete();
}

module.exports.help = {
    name: "userinfo"
}