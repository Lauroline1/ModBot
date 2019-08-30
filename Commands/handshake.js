const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +handshake @user");
    return;
  }

  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

  let user = args[0];
if (!user)
  return message.reply("Who are you saying handshake to?");
  if (message.mentions.users.first().id === message.author.id) {
    return message.channel.send(`No lol.`)
  }
  

 handshake1 = "./Images/handshake/handshake.gif", handshake2 = "./Images/handshake/handshake1.gif", handshake3 =  "./Images/handshake/handshake2.gif", handshake4 =  "./Images/handshake/handshake3.gif", handshake5 =  "./Images/handshake/handshake4.gif",
 
 number = 5;
 var random = Math.floor (Math.random() * (number - 1 +1)) + 1; 
switch (random) {
    case 1: message.channel.send ({ files: [handshake1] }) .then( message.reply(`has shook hands with ${user}`)); break;
    case 2: message.channel.send ({ files: [handshake2] }) .then( message.reply(`has shook hands with  ${user}`)); break;
    case 3: message.channel.send ({ files: [handshake3] }) .then( message.reply(`has shook hands with ${user}`)); break;
    case 4: message.channel.send ({ files: [handshake4] }) .then( message.reply(`has shook hands with ${user}`)); break;
    case 5: message.channel.send ({ files: [handshake5] }) .then( message.reply(`has shook hands with ${user}`)); break;
}
message.delete();
}

module.exports.help = {
  name: "handshake"
}