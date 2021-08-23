const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
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

    if(message.content === prefix + "étaton") {
        message.channel.send("**Serveur on, connecter vous !!!** \n||@everyone||")
    }
    
});


Client.login(process.env.token);