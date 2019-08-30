const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) =>{

  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
  return message.reply("Sorry, you don't have permissions to use this!");

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