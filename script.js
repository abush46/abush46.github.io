import * as Telegraf from 'https://esm.run/telegraf';
const token = "7242228033:AAGeQDRDv5Texj6aLM586TMbdiZcZy2gd_8"; // Replace with your own bot token

const bot = new Telegraf(token);
//bot.telegram.setWebhook("https://my-bot-beryl-iota.vercel.app/index.js");
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();
