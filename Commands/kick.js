const Discord = require("discord.js");
const errors = require("../utils/errors.js");
yeet = "./Images/Yeet/yeet.gif"
module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +kick @user");
    return;
  }  

  
  if (!message.member.roles.some(r => ["Staff"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if (!member)
  return message.reply("Please mention a valid member of this server");
if (!member.kickable)
  return message.reply("I cannot yeet this user! Do they have a higher role? Do I have kick permissions?");

let reason = args.slice(1).join(' ');
if (!reason) reason = "No reason provided";

await member.kick(reason)
  .catch(error => message.reply(`Sorry ${message.author} I couldn't yeet them because of : ${error}`));
message.reply(`${member.user.tag} has been yeeted by ${message.author.tag} because: ${reason}`).then(message.channel.send({ files: [yeet]}));

message.delete();
}

module.exports.help = {
  name:"kick"
}