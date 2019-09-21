const botgram = require("botgram"),
  bot = botgram(process.env["TELEGRAM_BOT_TOKEN"]),
  lune = require("lune"),
  moment = require("moment");

let shouts = [
  "Hi from the moon \u{1F31D}",
  "https://www.youtube.com/watch?v=FlpstXNjImY",
  "Some say I'm made of cheese \u{1F9C0}",
  "The dark side of the moon is a myth. \u{1F31A} \u{E107}"
];

/******* THE COMMANDS***** */
bot.command("fullmoon", (message, reply) => {
  let fullMoon = lune.phase_hunt(message.date)
    .full_date;
  let prefix = lune.phase(message.date)
    .phase > 0.5 ? "was" : "will be";
  reply.html(
    `Hello ${message.from.firstname}, the full moon ${prefix}  ${moment(
      fullMoon
    ).fromNow()} \u{1F315}`
  );
});

bot.command("newmoon", (message, reply) => {
  let newMoon = lune.phase_hunt(message.date)
    .nextnew_date;
  reply.html(
    `The next lunar cycle starts in ${moment(newMoon).fromNow()} \u{1F311}`
  );
});

bot.command("phase", (message, reply) => {
  reply.html(
    `The moon phase is at ${Math.floor(
      lune.phase(message.date).phase * 100
    )} % \u{1F318}`
  ); //@TODO: % to moon phase names
});

bot.command("age", (message, reply) =>
  reply.html(
    `Thanks for asking ${message.from.firstname} , I'm ${lune
      .phase(message.date)
      .age.toFixed(1)} days old \u{1F318}`
  )
);

/******* THE MESSAGES***** */
bot.text(function(msg, reply, next) {
  let randomNumber = Math.floor(Math.random() * shouts.length);
  reply.html(shouts[randomNumber]);
});