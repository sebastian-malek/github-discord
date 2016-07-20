var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var Discord = require('discord.io');
var client = new Discord.Client({
  token: process.env.TOKEN,
  autorun: true
});

client.on('ready', (event) => {
  console.log(`logged in to discord as ${client.username}`);

  app.post('/github', (req, res) => {
    var commits = req.body.commits;
    var repository = req.body.repository.name;
    var branch = req.body.ref.split('refs/heads/')[1];

    commits.forEach((commit) => {
      var authorName = commit.author.name;
      var message = commit.message;

      client.sendMessage({
        to: process.env.CHANNEL_ID,
        message: `${repository}/${branch} ${authorName}: ${message}`
      });
    });

    res.json({ status: 'ok' });
  });

  app.listen(3000);
});
