const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
const prefix = '.';
const botconfig = require("./botconfig.json");
const ColorEmbed = botconfig.color;
 exports.run =  (bot, message, args) => {
    let msg = message.content.toUpperCase();
    let user = message.author || message.mentions.users.first() ;
    let gems =  db.get(`gems_${user.id}`)
    if (gems === null) gems = 0;
    let embed = new Discord.RichEmbed()
        .setTitle('Gems')
        .addField('User', user)
        .setColor(ColorEmbed)
        .setThumbnail('https://66.media.tumblr.com/eb622eb223a8b84212bf7736671b07f2/https://d2jcw5q7j4vmo4.cloudfront.net/WGFyx2PNQkEYFxGtSodPpifBpFIu7nqlikBIXjHdrh9XZfUge35q5lwZAD7mx07NXvpv=w300.')
        .setThumbnail('')
        .addField('Your Gems', gems + '<:Gems:584947389459333142>');
    message.channel.send(embed);
    
}
