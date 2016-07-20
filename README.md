# github-discord-bot
GitHub Discord bot

## Usage

```
docker pull sebastian-malek/github-docker-bot
docker run -it -d -p 3000:3000 -e DISCORD_API_KEY='discord API key' \
-e DISCORD_CHANNEL_ID='channel ID' sebastian-malek/github-docker-bot
```
