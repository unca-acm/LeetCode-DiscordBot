import { Client, Message } from "discord.js";

export const commands: { [key: string]: (client: Client, message: Message) => void } = {
    "ping": pong,
    "hello": hello
}

function pong(client: Client, message: Message) {
    message.channel.send("pong!");
}

function hello(client: Client, message: Message) {
    message.channel.send("howdy!");
}