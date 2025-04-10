const fs = require("fs");
const {Client, Events} = require("discord.js")

const client = new Client({intents: []});

client.once("ready", Events.ClientReady, readyClient => {

});
