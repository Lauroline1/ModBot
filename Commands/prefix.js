const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
const config = require('./botconfig.json');

module.exports.run = async (bot, message, args) => {

  if (!message.member.roles.some(r =>["Staff"].includes(r.name)))
  return message.reply("Sorry, you don't have permissions to use this!");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: +prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

  message.delete();
}

module.exports.help = {
  name: "prefix"
}