const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +hug @user");
    return;
  }

  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

  let user = args[0];
if (!user)
  return message.reply("Who are you hugging?");
  

 hug1 = "./Images/Hug/hug.gif", hug2 = "./Images/Hug/hug1.gif", hug3 =  "./Images/Hug/hug2.gif", hug4 =  "./Images/Hug/hug3.gif", hug5 =  "./Images/Hug/hug4.gif",
 hug6 = "./Images/Hug/hug6.gif", hug7 = "./Images/Hug/hug7.gif", hug8 = "./Images/Hug/hug8.gif", hug9 = "./Images/Hug/hug9.gif", hug10 = "./Images/Hug/hug10.gif",
 hug11 = "./Images/Hug/hug11.gif", hug12 = "./Images/Hug/hug12.gif", hug13 = "./Images/Hug/hug13.gif", hug14 = "./Images/Hug/hug14.gif", hug15 = "./Images/Hug/hug15.gif",
 hug16 = "./Images/Hug/hug16.gif", hug17 = "./Images/Hug/hug17.gif", hug18 = "./Images/Hug/hug18.gif"
 number = 18;
 var random = Math.floor (Math.random() * (number - 1 +1)) + 1; 
switch (random) {
    case 1: message.channel.send ({ files: [hug1] }) .then( message.reply(`has hugged ${user}`)); break;
    case 2: message.channel.send ({ files: [hug2] }) .then( message.reply(`has hugged  ${user}`)); break;
    case 3: message.channel.send ({ files: [hug3] }) .then( message.reply(`has hugged ${user}`)); break;
    case 4: message.channel.send ({ files: [hug4] }) .then( message.reply(`has hugged ${user}`)); break;
    case 5: message.channel.send ({ files: [hug5] }) .then( message.reply(`has hugged ${user}`)); break;
    case 6: message.channel.send ({ files: [hug6] }) .then( message.reply(`has hugged ${user}`)); break;
    case 7: message.channel.send ({ files: [hug7] }) .then( message.reply(`has hugged ${user}`)); break;
    case 8: message.channel.send ({ files: [hug8] }) .then( message.reply(`has hugged ${user}`)); break;
    case 9: message.channel.send ({ files: [hug9] }) .then( message.reply(`has hugged ${user}`)); break;
    case 10: message.channel.send ({ files: [hug10] }) .then( message.reply(`has hugged ${user}`)); break;
    case 11: message.channel.send ({ files: [hug11] }) .then( message.reply(`has hugged ${user}`)); break;
    case 12: message.channel.send ({ files: [hug12] }) .then( message.reply(`has hugged ${user}`)); break;
    case 13: message.channel.send ({ files: [hug13] }) .then( message.reply(`has hugged ${user}`)); break;
    case 14: message.channel.send ({ files: [hug14] }) .then( message.reply(`has hugged ${user}`)); break;
    case 15: message.channel.send ({ files: [hug15] }) .then( message.reply(`has hugged ${user}`)); break;
    case 16: message.channel.send ({ files: [hug16] }) .then( message.reply(`has hugged ${user}`)); break;
    case 17: message.channel.send ({ files: [hug17] }) .then( message.reply(`has hugged ${user}`)); break;
    case 18: message.channel.send ({ files: [hug18] }) .then( message.reply(`has hugged ${user}`)); break;
}
message.delete();
}

module.exports.help = {
  name: "hug"
}