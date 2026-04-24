const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.TALDAUBOT);

const WEBAPP_URL = process.env.TALDAU_WEBAPP_URL || 'https://taldau-group.vercel.app/office';

bot.start((ctx) => {
  return ctx.reply(
    'Taldau Office — ваш бэк-офис.\n\nЮрист, финансист, консультант и ресёрчер готовы к работе.',
    Markup.inlineKeyboard([
      [Markup.button.webApp('Открыть офис', WEBAPP_URL)]
    ])
  );
});

bot.command('office', (ctx) => {
  return ctx.reply(
    'Открыть бэк-офис:',
    Markup.inlineKeyboard([
      [Markup.button.webApp('Taldau Office', WEBAPP_URL)]
    ])
  );
});

bot.launch();
console.log('Taldau bot started');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
