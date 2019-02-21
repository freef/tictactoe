[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic Tac Toe Project
Project 1 for WDI 30
## Description
Welcome to Tic Tac Toe. This repositiory holds the source code for the first project for General Assembly's web development immersive course. The project was to to create a working Tic Tac Toe client where the user can log into an account.

## Technology
- The bulk of the project is written in the following languages:
  - [HTML 5](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- The following libraries were used:
  - [jQuery](https://api.jquery.com/)
  - [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- The API is the Game API created and maintained by General Assembly. It is a RESTful API.
  - [API Documentation](https://git.generalassemb.ly/ga-wdi-boston/game-project-api)
  - Presently this repo does not use the multiplayer functionality of this API.
## Planning
The planning process for this particular project was pretty sparse. The requirements were very explicit and much of the necessary planning for this project was handled through assigned pre-work in class. My rough plan was as follows:
1. setup javascript board and basic game logic
2. connect html and add the ability to play the game locally
3. begin adding api features
4. clean up UI
5. begin adding additional features
6. add a level of polish to the UI

This plan generally worked. Though there were some complicatins that arose from modeling my data differently from the data model expecte by the API. My original model for the game uses a "3d " array where each row is represented as an array in a gameBoard object. the benefit of this is that it was extremely easy to check for wins and the code itself was fairly small. This solution was certianly more elegant than hardcoding a table with all possible win conditions.
Early on in my planning process i had hoped to create a game baord that could have a variable size, and this method of programming the board was theoretically scalable. All concerns for game scalability were lost by the end of the first project day as MVP quicly became my primary focus.
Once the game was fully playable using console commands in javascript I built out my html and used bootstrap wherefver possible rather than handwriting all the css for this project.
From there I added the log in screen and added all the API calls specified by the requirements document. I've been using the requirments document as a checklist to keep me organized and focused during this project.

## Known Bugs
-  ~~Only known bug is one where the API may create an extra game in the event of a draw upon resetting the board.~~ Corrected 2/19/18

## Wirerames
[![Wireframe 1](https://i.imgur.com/ydHFv9P.jpg)
[![Wireframe 2](https://i.imgur.com/GeW18Hz.jpg)

## User stories
- As a user I want to put an x or o on any space so that I make track my moves
- As a user I want the game to keep track of moves so that it can tell me when the game ends
- As a user i want the other player to only be able to place pieces in untaken spaces so that I don't need to worry about cheating
- As a user I want to be told the results of the game when a game ending condition is met so that both myself and my opponent can know the results of the game
- As a user I'd like to be able to reset the board so that I may play again
- As a user I'd like to be able to log in so that I can keep track of my games
- As a user I'd like to be able to log out so that I can be sure only my games are played on my Account
- As a user I'd like to change my password so that i can keep my account secure
- As a user i'd like to store records of my games online with my Account

## Potential Future Improvements
- ~~Allow users to pulling up an unfinished game.~~ added 2/20/19
- Allow a user to see a page with all of their past games
- Implement the `watch` API call to allow for online multiplayer
