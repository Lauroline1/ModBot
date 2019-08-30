const botconfig = require("./Commands/botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const dl = require('discord-leveling');
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("+help", {type: "PLAYING"});

bot.on("guildMemberAdd", member => {


})});

bot.on("message", async message => {

  if(message.author.bot) return;
  if (message.channel.type == 'dm') {
    console.log(message.author.tag)
    message.author.send('Hi!')
    .catch(console.error)
  }

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

 
  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
 
});

bot.login(tokenfile.token);