const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +throw @user");
    return;
  }

  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

  let user = args[0];
if (!user)
  return message.reply("Who are you throwing pizza at?");
  

 throw1 = "./Images/throw/throw.gif", throw2 = "./Images/throw/throw1.gif", throw3 =  "./Images/throw/throw2.gif", throw4 =  "./Images/throw/throw3.gif", throw5 =  "./Images/throw/throw4.gif",
 
 number = 5;
 var random = Math.floor (Math.random() * (number - 1 +1)) + 1; 
switch (random) {
    case 1: message.channel.send ({ files: [throw1] }) .then( message.reply(`has thrown pizza at ${user}`)); break;
    case 2: message.channel.send ({ files: [throw2] }) .then( message.reply(`has thrown pizza at ${user}`)); break;
    case 3: message.channel.send ({ files: [throw3] }) .then( message.reply(`has thrown pizza at ${user}`)); break;
    case 4: message.channel.send ({ files: [throw4] }) .then( message.reply(`has thrown pizza at ${user}`)); break;
    case 5: message.channel.send ({ files: [throw5] }) .then( message.reply(`has thrown pizza at ${user}`)); break;
}
message.delete();
}

module.exports.help = {
  name: "throwpizza"
}