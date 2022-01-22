const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "?";

Client.on("ready", () => {
    console.log("Bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "ping"){
        message.channel.send("pong")
    }
    
});

Client.on("guildMemberAdd", member => {
    console.log("Nouveau membre !");
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre a quitté le serveur.");
});


Client.login(process.env.token);