const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Phoenix Roleplay Sohbet ve Müzik BOT sunucunuza eklendi!**',
  '**Phoenix Roleplay Sohbet ve Müzik BOT** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Quadria tarafından geliştirilmektedir',
  'Botumuzun özelliklerini öğrenmek için !yardım komutunu kullanabilirsin.',
  '',
  `**Phoenix Roleplay Sohbet ve Müzik BOT Resmî Discord Sunucusu**`,
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı , Phoenix Roleplay resmi botudur.');
})