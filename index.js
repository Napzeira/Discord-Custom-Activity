const keepAlive = require("./keep_alive")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Counter-Strike 2", {type: "PLAYING", url: ""}) // put a twitch url if you selected STREAMING as your activity
   console.log(`Log in account name: ${client.user.username}`)
})

keepAlive()
client.login(TOKEN);
