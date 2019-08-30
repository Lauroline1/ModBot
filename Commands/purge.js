const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  
  if (!message.member.roles.some(r => ["Staff"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");
    const deleteCount = parseInt(args[0], 10);

if (args[0] == "help") {
  message.reply ("Usage: +purge (ammount)");
  return;
}

    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
 
      message.delete();
    }

  module.exports.help = {
    name:"purge"
  }