const discord = require('discord.js'); 
const dl = require('discord-leveling');
const eco = require('discordenvo')


module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author
 
  var output = await dl.Fetch(user.id)
  message.channel.send(`Hey ${user.tag}! You have ${output.level} level(s)! and ${output.xp} xp!`);
}

module.exports.help = {
  name: "level"
}