const Eris = require("eris");
const fs = require("fs");
const config = require("../config/config.json");
var bot = new Eris(config.token);

//let messups = JSON.parse(fs.readFileSync("./messups.json", "utf8"));
let count = JSON.parse(fs.readFileSync("./count.json", "utf8"));

var counter = count["count"];

bot.on("ready", () => {
	console.log("Ready to moderate counting!");
	console.log("Logged in as " + bot.user.username + "#" + bot.user.discriminator + ".");
	
	bot.editStatus("online", { name: "1 2 3...", type: 0 });
});

bot.on('disconnected', () => console.warn('Counting bot disconnected'));

bot.on("messageCreate", (msg) => {
	//let cantcount = msg.guild.roles.get("384107437998735363");
	if (msg.author.bot) return;
	if (msg.channel.id == (config.channel)) {
		if (msg.content == counter) {
			counter++;
			fs.writeFile("./count.json", JSON.stringify(count), (err) => {
			if (err) {
				console.error(err);
			} else {
				count["count"] = counter + 1;
			}
		});
			console.log('New Count is: ' + counter);
			console.log(msg.author.username + "#" + msg.author.discriminator);
		} else {
			//if (!messups[msg.author.id]) { messups[msg.author.id] = '{"messups": 0,}' }
			//messups[msg.author.id].messups++;
			//if (messups[msg.author.id].messups >= 3) {
				//msg.author.username.addRole(cantcount).catch(console.error); // add the role to the user
			//}
			msg.delete();
		}
		//fs.writeFile("./messups.json", JSON.stringify(messups), (err) => {
		//	if (err) console.error(err);
		//}
	}
});

bot.connect();

/*
const Eris = require("eris");
//const fs = require("fs");
const config = require("../config/config.json");
var bot = new Eris(config.token);

//let messups = JSON.parse(fs.readFileSync("./messups.json", "utf8"));

var counter = 0;

bot.on("ready", () => {
	console.log("Ready to moderate counting!");
	console.log("Logged in as " + bot.user.username + "#" + bot.user.discriminator + ".");
	
	bot.editStatus("online", { name: "1 2 3...", type: 0 });
});

bot.on("messageCreate", (msg) => {
	//let cantcount = msg.guild.roles.get("384107437998735363");
	if (msg.author.bot) return;
	//if (!messups[msg.author.id]) messups[msg.author.id] = {
	//	messups: 0;
	//}
	if (msg.channel.id == (config.channel)) {
		if (msg.content == counter) {
			counter++;
			console.log('New Count is: ' + counter);
			console.log(msg.author.username + "#" + msg.author.discriminator);
		} else {
		//	messups[msg.author.id].messups++;
			//if (messups[msg.author.id].messups >= 3) {
				//msg.author.username.addRole(cantcount).catch(console.error); // add the role to the user
			//}
			msg.delete();
		}
		//fs.writeFile("./messups.json", JSON.stringify(messups), (err) => {
		//	if (err) console.error(err);
		//}
	}
});

bot.connect();
*/


/* OLD
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
    };

    // main module ---
    if(msg.channel.id != (config.channel)) {
        return;

    } else {
      var newCount = (counter + 1);

      if (msg.content != newCount) {
        msg.delete("Auto-removed wrong or non-related message in counting channel.");

      } else if (msg.author.id === lastCountUser) {
        msg.delete("Auto-removed user's double message in counting channel.");

      } else {
        counter = newCount;
        lastCountUser = msg.author.id;
      }
    };

});

bot.connect();
*/
