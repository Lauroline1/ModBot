const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt);

  message.channel.send(botembed);

  message.delete();  

}

module.exports.help = {
  name: "botinfo"
}