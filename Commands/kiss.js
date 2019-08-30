const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +kiss @user");
    return;
  }

  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

  let user = args[0];
if (!user)
  return message.reply("Who are you kissing?");
  if (message.mentions.users.first().id === message.author.id) {
    return message.channel.send(`That's just sad!`)
  }

 kiss1 = "./Images/kiss/kiss.gif", kiss2 = "./Images/kiss/kiss1.gif", kiss3 =  "./Images/kiss/kiss2.gif", kiss4 =  "./Images/kiss/kiss3.gif"
 
 number = 4;
 var random = Math.floor (Math.random() * (number - 1 +1)) + 1; 
switch (random) {
    case 1: message.channel.send ({ files: [kiss1] }) .then( message.reply(`has kissed ${user}`)); break;
    case 2: message.channel.send ({ files: [kiss2] }) .then( message.reply(`has kissed  ${user}`)); break;
    case 3: message.channel.send ({ files: [kiss3] }) .then( message.reply(`has kissed ${user}`)); break;
    case 4: message.channel.send ({ files: [kiss4] }) .then( message.reply(`has kissed ${user}`)); break;
}
message.delete();
}

module.exports.help = {
  name: "kiss"
}