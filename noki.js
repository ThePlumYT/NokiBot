const Discord = require('discord.js');
const noki = new Discord.Client();
const config = require("./no.json");


noki.login(config.BOT_TOKEN).catch(console.error);
noki.on('ready', () => {
  console.log('NokiBot Online');
});


noki.on('message', message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
	message.reply('พิมคำหยาบไม่ดีน่ะ "โนกิ " ลบให้แล้วน่ะ')
  }})
