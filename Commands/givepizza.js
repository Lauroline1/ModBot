const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot,message,args) => {
    
    if (args[0] == "help") {
        message.reply ("Usage: +givepizza @user");
        return;
      }

      if (!message.member.roles.some(r => ["HUMAN"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

      pizza1 = "./Images/pizza/pizza.gif"
      let user = args[0];
    if (!user)
      return message.reply("Who are you giving a pizza?");
    
      message.channel.send({ files: [pizza1] }).then(message.reply(`gave ${user} a pizza`));
message.delete();
}
module.exports.help = {
  name:"givepizza"
}