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

bot.on("messageCreate", (msg) => {
	//let cantcount = msg.guild.roles.get("384107437998735363");
	if (msg.author.bot) return;
	if (msg.channel.id == (config.channel)) {
	  let gRole = message.guild.roles.get("403427612103278593");
	  var newcounter = gRole.name;
		if (msg.content == newcounter) {
			newcounter++;
			gRole.name = newcounter; // + 1
		//	fs.writeFile("./count.json", JSON.stringify(count), (err) => {
		//	if (err) {
		//		console.error(err);
		//	} else {
		//		count["count"] = counter + 1;
		//	}
		//});
			console.log('New Count is: ' + newcounter);
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
*/
