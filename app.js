var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var Discord = require('discord.io');
var client = new Discord.Client({
  token: process.env.TOKEN | "",
  autorun: true
});

client.on('ready', (event) => {
  console.log(`Logged in to Discord as ${client.username}`);

  app.post('/github', (req, res) => {
    var commits = req.body.commits;
    var repository = req.body.repository.name;
    var branch = req.body.ref.split('refs/heads/')[1];

    for (i = 0; i < 2; i++) {
      var authorName = commits[i].author.name;

      client.sendMessage({
        to: process.env.CHANNEL_ID,
        message: `${repository}: ${branch} ${authorName} ${message}`
      });
    }

    if (commits.length - 2 > 0) {
      client.sendMessage({
        to: process.env.CHANNEL_ID,
        message: `${repository}: ${branch} ... and ${commits.length - 2} more`
      });
    }
  });

  app.listen(3000);
});
