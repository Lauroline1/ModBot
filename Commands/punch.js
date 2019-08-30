const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +punch @user");
    return;
  }
  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

  let user = args[0];
if (!user)
  return message.reply("Who are you punching?");
  

 punch1 = "./Images/punch/punch.gif", punch2 = "./Images/punch/punch1.gif", punch3 =  "./Images/punch/punch2.gif", punch4 =  "./Images/punch/punch3.gif", punch5 =  "./Images/punch/punch4.gif",
 
 number = 5;
 var random = Math.floor (Math.random() * (number - 1 +1)) + 1; 
switch (random) {
    case 1: message.channel.send ({ files: [punch1] }) .then( message.reply(`has punched ${user}`)); break;
    case 2: message.channel.send ({ files: [punch2] }) .then( message.reply(`has punched  ${user}`)); break;
    case 3: message.channel.send ({ files: [punch3] }) .then( message.reply(`has punched ${user}`)); break;
    case 4: message.channel.send ({ files: [punch4] }) .then( message.reply(`has punched ${user}`)); break;
    case 5: message.channel.send ({ files: [punch5] }) .then( message.reply(`has punched ${user}`)); break;
}
message.delete();
}

module.exports.help = {
  name: "punch"
}