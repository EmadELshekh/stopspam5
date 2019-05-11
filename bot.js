const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("576592073063530506")
setInterval(function() {
channel.send(`Credit Spam , Frame , Credit By 3MoOdi_YT , Farm Credit By 3MoOdi_YT, ez Farm - ???? ????? ????? ????? ??? ?? ?? ?? ??? ? [ " 11267 " ]
`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
