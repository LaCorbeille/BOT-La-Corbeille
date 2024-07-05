// TODO : Info command to display information about the bot (version, author, website, etc.)

const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: "info",
    description: "Affiche les informations relatives à LaCorbeille.",
    permission: "Aucune",
    dm: true,
    category: "Information",

    async run(bot, message, args) {
        const version = fs.readFileSync("./VERSION", "utf-8").trim();

        let Embed = new Discord.EmbedBuilder()
        .setColor(bot.color)
        .setTitle(`Informations sur LaCorbeille ✨`)
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
        .setDescription(`## Hallo :D\n` +
                        `### Version : ${version}\n` +
                        `### Auteur : [Noa Second](https://gravatar.com/noasecond)\n` +
                        `### Site : [LaCorbeille STUDIO](https://lacorbeille.studio)\n` +
                        `### GitHub : [LaCorbeille - BOT](https://github.com/LaCorbeille/BOT-La-Corbeille)\n` +
                        `### Discord : [LaCorbeille](https://discord.gg/hmPzS4k)`)
        .setTimestamp()
        .setFooter({text: "Informations sur LaCorbeille"});

        await message.reply({embeds: [Embed]});
    }
}