const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");
    let modembed = new Discord.RichEmbed()
            .setDescription("Help Menu")
            .setColor("#830ff")
            .addField("Gif Commands", "bye, givepizza, handshake, highfive, hug, kiss, punch, throwpizza, welcome")
            .addField("Info Commands", "botinfo, level, serverinfo, userinfo ")

            message.channel.send(modembed);

            message.delete();
}
module.exports.help = {
    name:"help"
  }