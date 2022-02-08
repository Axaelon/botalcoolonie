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

    if(message.content === prefix + "1"){
        message.channel.send("Je paye ma tournée !!!")
    }
    
});

Client.on("guildMemberAdd", member => {
    console.log("Nouveau membre !");
    //<@>
    Client.channels.cache.get("851561546031038544").send("<@" + member.id + "> viens boire un coup ! :beers:");
    member.roles.add("834546342100467733");
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre a quitté le serveur.");
    Client.channels.cache.get("847575039029411891").send(member.displayName + " a fait un coma éthylique :sob:");
});


Client.login(process.env.token);