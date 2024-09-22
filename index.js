const Discord = require("discord.js");
const bot = new Discord.Client({intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES] });
const token = "BotTOKEN";

bot.on("ready", () =>{
    console.log("WICHTIG!!! Der Bot ist gestartet!");
})


bot.on("message", function(message){
    if(message.content === "!help"){
       message.channel.send("Der Bot hat noch kein Help Menü! :D");
    }
})

bot.login(token);
