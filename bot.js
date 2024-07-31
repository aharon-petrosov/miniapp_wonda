const TelegramBot = require('node-telegram-bot-api');

const token = '7366510852:AAHWnWMZsHZLMwOVgJLuE_eMIl9uiVwvAEw';

const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;

    const message = `Hello, ${firstName}! Welcome to our miniapp. Click the button below to open the app.`;

    bot.sendMessage(chatId, message, {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: 'Open MiniApp',
                        web_app: {
                            url: 'https://aharon-petrosov.github.io/miniapp_wonda',
                        }
                    }
                ]
            ],
            resize_keyboard: true
        }
    });
});

bot.on('web_app_data', (msg) => {
    const userId = msg.from.id;
    const webAppData = msg.web_app_data.data;
    console.log(`User ${userId} sent web app data: ${webAppData}`);
});
