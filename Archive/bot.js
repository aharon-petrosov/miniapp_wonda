const TelegramBot = require('node-telegram-bot-api');

// Replace with your own token from BotFather
const token = '7366510852:AAHWnWMZsHZLMwOVgJLuE_eMIl9uiVwvAEw';

// Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;

    const message = `Hello, ${firstName}! Welcome to our miniapp. Click the button below to open the app.`;

    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open MiniApp',
                        web_app: {
                            url: 'https://aharon-petrosov.github.io/miniapp_wonda' // The URL where your miniapp is hosted
                        }
                    }
                ]
            ]
        }
    });
});
