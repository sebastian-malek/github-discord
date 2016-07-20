# github-discord-bot
GitHub Discord bot

## Usage

```
docker pull sebastianm/github-docker-bot
docker run -it -d -p 3000:3000 -e TOKEN='discord API key' \
-e CHANNEL_ID='channel ID' sebastianm/github-docker-bot
```
