const botgram = require("botgram")
const bot = botgram(process.env['TELEGRAM_BOT_TOKEN'])
const moment = require('moment');
const lune = require('lune')
let data = lune.phase()
let fullMoon = lune.phase_hunt()
  .full_date
let newMoon = lune.phase_hunt()
  .nextnew_date
const shouts = ["Hi from the moon \u{1F31D}",
  "I'm so <strong>big</strong> and shiny ",
  'https://www.youtube.com/watch?v=FlpstXNjImY',
  'Some say I\'m made of cheese \u{1F9C0}'
]


bot.command("phase", (message, reply) =>
  reply.html("The moon phase is " + Math.floor(data.phase * 100) + "% \u{1F318}"))
bot.command("fullmoon", (message, reply) =>
  reply.html("Hello " + message.chat.firstname + ", the  full moon was " + moment(fullMoon)
    .fromNow() + " \u{1F315}"))
bot.command("newmoon", (message, reply) =>
  reply.html("The next lunar cycle starts in " + moment(newMoon)
    .fromNow() + " \u{1F311}"))
bot.command("age", (message, reply) =>
  reply.html("Thanks for asking " + message.chat.firstname + ", the moon is " + data.age.toFixed(1) + " days old \u{1F318}"))


bot.text(function(msg, reply, next) {
  let randomNumber = Math.floor(Math.random() * shouts.length);
  reply.html(shouts[randomNumber])

});