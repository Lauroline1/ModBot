const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
if (!message.member.roles.some(r => ["Staff"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");
    let modembed = new Discord.RichEmbed()
            .setDescription("Mod Help Menu")
            .setColor("#830ff")
            .addField("Staff Commands", "ban, kick, purge, tempmute, prefix")

            message.channel.send(modembed);

            message.delete();
}
module.exports.help = {
    name:"admin"
  }