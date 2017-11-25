const Eris = require("eris");
const config = require("../config/config.json");

var bot = new Eris(config.token);

var counter = 0;
var lastCountUser = 0;

bot.on("ready", () => {
    console.log("Ready to moderate counting!");
    console.log("Logged in as " + bot.user.username + "#" + bot.user.discriminator + ".");

    bot.editStatus("online", { name: "counting~!", type: 0 });
});

bot.on("messageCreate", (msg) => {

    // ping command ---
    if (msg.content === ((config.prefix) + "ping")) {
        bot.createMessage(msg.channel.id, 'Pinging...').then(sent => {
			    sent.edit(`**Pong!** \nMy latency is \`${sent.timestamp - msg.timestamp}ms\`.`);
		    })
    }; // End of ping commands

    // main module ---
    if(msg.channel.id != (config.channel)) {
        return;

    } else {
      var newCount = (counter + 1);

      if (msg.content < newCount || msg.content > newCount || msg.content < 0) {
        msg.delete("Auto-removed wrong or non-related message in counting channel.");

      }/* else if (msg.author.id === lastCountUser) {
        msg.delete("Auto-removed user's double message in counting channel.");

      } */else {
        counter = newCount;
        lastCountUser = msg.author.id;
      }
    };

});

bot.connect();
