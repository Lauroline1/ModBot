const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +bye @user");
    return;
  }

  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

  let user = args[0];
if (!user)
  return message.reply("Who are you saying bye to?");
  if (message.mentions.users.first().id === message.author.id) {
    return message.channel.send(`No lol.`)
  }
  

 bye1 = "./Images/bye/bye.gif", bye2 = "./Images/bye/bye1.gif", bye3 =  "./Images/bye/bye2.gif", bye4 =  "./Images/bye/bye3.gif", bye5 =  "./Images/bye/bye4.gif",
 
 number = 5;
 var random = Math.floor (Math.random() * (number - 1 +1)) + 1; 
switch (random) {
    case 1: message.channel.send ({ files: [bye1] }) .then( message.reply(`has said bye to ${user}`)); break;
    case 2: message.channel.send ({ files: [bye2] }) .then( message.reply(`has said bye to  ${user}`)); break;
    case 3: message.channel.send ({ files: [bye3] }) .then( message.reply(`has said bye to ${user}`)); break;
    case 4: message.channel.send ({ files: [bye4] }) .then( message.reply(`has said bye to ${user}`)); break;
    case 5: message.channel.send ({ files: [bye5] }) .then( message.reply(`has said bye to ${user}`)); break;
}
message.delete();
}

module.exports.help = {
  name: "bye"
}