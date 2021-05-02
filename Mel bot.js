// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-brown; icon-glyph: magic;

const Discord = require('discord.js');

const bot = new Discord.Client();

const { token } = require('./config.json');

bot.on('ready', () => {
    console.log('Bot is ready!');
})


bot.login(token);
