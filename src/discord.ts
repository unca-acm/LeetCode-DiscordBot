import { Client, Events, GatewayIntentBits, Message } from "discord.js";
import "dotenv/config"
import * as commands from "./commands.js"

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
});

client.on(Events.ClientReady, () => console.log("Ready!"));

client.on(Events.MessageCreate, (message: Message) => {
    if (message.author.bot) { return }
    if (message.content in commands.commands) {
        commands.commands[message.content](client, message);
    }
});

client.login(process.env.DISCORD_KEY)