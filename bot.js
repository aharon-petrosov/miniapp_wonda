const TelegramBot = require('node-telegram-bot-api');

// Replace with your own token from BotFather
const token = '7366510852:AAHWnWMZsHZLMwOVgJLuE_eMIl9uiVwvAEw';

// Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/start" message
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const message = `Hello, ${msg.from.first_name}! Welcome to the miniapp bot. Type /launch to start the miniapp.`;

    // Send a welcome message
    bot.sendMessage(chatId, message);
});

// Matches "/launch" message
bot.onText(/\/launch/, (msg) => {
    const chatId = msg.chat.id;
    const message = "Launching the miniapp! Visit: https://your-github-username.github.io/miniapp/";

    // Send a message with the miniapp link
    bot.sendMessage(chatId, message);
});

// Handle any other messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'I can only understand /start and /launch commands for now.');
});
