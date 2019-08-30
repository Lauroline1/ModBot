const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == "help") {
    message.reply ("Usage: +welcome @user");
    return;
  }

  if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

  let user = args[0];
if (!user)
  return message.reply("Who are you saying welcome to?");
  if (message.mentions.users.first().id === message.author.id) {
    return message.channel.send(`No lol.`)
  }
  

 welcome1 = "./Images/welcome/welcome.gif", welcome2 = "./Images/welcome/welcome1.gif", welcome3 =  "./Images/welcome/welcome2.gif", welcome4 =  "./Images/welcome/welcome3.gif", welcome5 =  "./Images/welcome/welcome4.gif",
 
 number = 5;
 var random = Math.floor (Math.random() * (number - 1 +1)) + 1; 
switch (random) {
    case 1: message.channel.send ({ files: [welcome1] }) .then( message.reply(`welcomed ${user}`)); break;
    case 2: message.channel.send ({ files: [welcome2] }) .then( message.reply(`welcomed  ${user}`)); break;
    case 3: message.channel.send ({ files: [welcome3] }) .then( message.reply(`welcomed ${user}`)); break;
    case 4: message.channel.send ({ files: [welcome4] }) .then( message.reply(`welcomed ${user}`)); break;
    case 5: message.channel.send ({ files: [welcome5] }) .then( message.reply(`welcomed ${user}`)); break;
}
message.delete();
}

module.exports.help = {
  name: "welcome"
}