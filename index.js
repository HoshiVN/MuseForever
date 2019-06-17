const token = 'NTg4MzA5MzkyMDQzMTQ3Mjc2.XQDR-A.ECAE6VNSTiUp9GlGMVheKq6BcKs';
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const ms = require('parse-ms');
const prefix = '.';
const db = require('quick.db');


bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message => {

    let user = message.mentions.users.first() || message.author;
    let msg = message.content.toUpperCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let ColorEmbed = '0xDF30D7';
    
    if (message.author.bot) return;
    if (!msg.startsWith(prefix)) return;

    try {
        let commandFile = require(`./Command/${cmd}.js`);
        commandFile.run(bot, message, args);
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} ran the command ${cmd}`)
    }
    let xp = db.fetch(`xp_${user.id}`);
    let level = db.fetch(`level_${user.id}`)
    let nxtR = db.fetch(`nxtR_${user.id}`);

    if (!xp) {
        xp = {
            xp: 0,
            level: 1
        }
    }
    if (!gemsreward) gemsreward = 5;
    let nxtLvl = level * 200;
    let gemsreward = db.fetch(`gemsreward_${user.id}`);
    let curxp = xp;
    let curlvl = level;
    
    
    if (nxtLvl <= xp){
        level = db.add(`level_${user.id}`, curlvl + 1);
        console.log(`${user} Level is ${level} and xp is ${xp}`);
        let lvlup = new Discord.RichEmbed()
        .setTitle("Level Up!")
        .setColor(ColorEmbed)
        .addField("New Level", curlvl + 1)
        .setFooter("You get " + gemsreward + " as reward!")
        .setTimestamp();
        message.channel.send(lvlup)
        db.add(`gems_${user.id}`, gemsreward)
        db.add(`gemsreward_${user.id}`, 5)
    }
    
    
    
    
    
   
        
})
bot.login(token);