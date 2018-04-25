const Discord = require("discord.js");
const settings = require ('./settings.json');
const prefix = "!"

//Console Message when bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Ping test message
client.on('message', msg => {
  if (msg.reply === prefix + 'ping') {
    msg.reply('pong!');
  };
});

//Auto-add role when a new member join 
client.on('guildMemberAdd', user => {
  console.log('User' + member.user.username + 'join the server!')
  var role = member.guild.roles.find ('name' 'Non-Guild Members');
  member.addRole (role)
});


client.login(settings.token);
