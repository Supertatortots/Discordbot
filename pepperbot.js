const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();

client.on("ready", () => {
  //lets you know if the bot is active in the console
  console.log("Pepperbot activated");
});

//template for message creation, to be improved later
client.on("message", (message) => {
  if (message.content.startsWith("pepper rose")) {
    message.channel.send("i just wanted to say whatever your choice is, I understand it. I love you either way and I just hope you've had as of a amazing time as I have.");
  }
});




//goes to the dotenv file and checks for the API_KEY to send commands to the bot
client.login(process.env.API_KEY);