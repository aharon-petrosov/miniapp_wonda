const TelegramBot = require('node-telegram-bot-api');

// Replace with your own token from BotFather
const token = '7366510852:AAHWnWMZsHZLMwOVgJLuE_eMIl9uiVwvAEw';

// Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const message = `Hello, ${msg.from.first_name}! Welcome to our miniapp. Click the button below to open the app.`;

    // Send message with inline keyboard button
    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open MiniApp',
                        url: 'https://aharon-petrosov.github.io/miniapp_wonda/'
                    }
                ]
            ]
        }
    });
});

// Handle other messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'I only understand the /start command. Please use /start to see the options.');
});
