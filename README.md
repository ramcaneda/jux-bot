![alt text](https://github.com/WannesDC/jux-bot/workflows/Build/badge.svg)

# jux-bot

## Set up your bot locally

- make sure you have node.js
- make sure you have postgres installed: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
- make sure needed packages are installed by running npm install\
- change env.example to .env and add in the required values
- run compiler by typing npm run watch
- run by typing npm start

## Conventions

- Use feature branches for new features / bugs
- Branch Names should follow convention: {type}/{ticket-description} for example: feature/add-stocks-tracker
- To add a new feature create your own module, then refer that module in the message-controller
- Use the sandbox pattern to add your api calls
- Make sure to upgrade your version according to semantic versioning

## Pull Requests
- PR feature branch into develop using squash strategy.
- Should you need to merge develop into main, use regular merge strategy.

## Semantic Versioning

![alt text](https://149449379.v2.pressablecdn.com/wp-content/uploads/1970/01/semver.png)

- Major: Breaking Change, Architectural changes etc.
- Minor: Adding new features / Modules
- Patch: Bugfixes, no additions
