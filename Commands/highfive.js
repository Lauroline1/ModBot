const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +highfive @user");
    return;
  }

  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

  let user = args[0];
if (!user)
  return message.reply("Who are you highfiving?");
  

 highfive1 = "./Images/highfive/highfive.gif", highfive2 = "./Images/highfive/highfive1.gif", highfive3 =  "./Images/highfive/highfive2.gif", highfive4 =  "./Images/highfive/highfive3.gif", highfive5 =  "./Images/highfive/highfive4.gif",
 
 number = 5;
 var random = Math.floor (Math.random() * (number - 1 +1)) + 1; 
switch (random) {
    case 1: message.channel.send ({ files: [highfive1] }) .then( message.reply(`has high fived ${user}`)); break;
    case 2: message.channel.send ({ files: [highfive2] }) .then( message.reply(`has high fived  ${user}`)); break;
    case 3: message.channel.send ({ files: [highfive3] }) .then( message.reply(`has high fived ${user}`)); break;
    case 4: message.channel.send ({ files: [highfive4] }) .then( message.reply(`has high fived ${user}`)); break;
    case 5: message.channel.send ({ files: [highfive5] }) .then( message.reply(`has high fived ${user}`)); break;
}
message.delete();
}

module.exports.help = {
  name: "highfive"
}