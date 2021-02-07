# bhukharo-backend

This is the server side code for Bhukharo, an Indian card game. The backend runs on a Node server using Express and the Socket.io libraries. 

## Rules

The game consists of 2 teams, with an equal number of players. The goal of each team is to get more points than the other team by the end of the game, or over the course of multiple games.

### Gameplay

1. All players are dealt 13 cards. There are usually additional hands of 13 cards (default is 2) dealt and placed at the side, known as 'bhukharos'. The remaining cards are placed face down and 1 card is opened to begin the game.
2. Play continues throughout the game as each player gets a turn. The order of whose turn it is alternates between both teams and continues so that a person does not get a turn again until the rest of their team has had a turn. The order of these turns is kept the same through all the games, with the person who goes first rotating by 1 each game.
3. On a players turn, they must first begin by choosing to pick up the top card from the face down pile, or take the open pile. If they take the open pile, they must show a use for the top card from that pile (how to show use is explained more later). After they have picked up either 1 face down card or the open pile, they can play as many cards from their hands as they would like. When they are ready to end their turn, they must throw one card into the open pile in the middle. 
4. If the card thrown to complete a players turn is their last card, and they have no remaining cards, then one of two things will happen. If there are no bhukharo piles remaining, then the game will end and points will be counted and added to the teams. If there are, the player will receive 1 bhukharo and have the chance to continue playing cards from the bhukharo they just received. For the bhukharo, they do not need to open their turn again by picking up from the piles, but they must have a card to throw at the end again to close their turn. 

### How to play cards

During their turns, players will have the ability to play cards, which means putting it down in a team pile or creating a new team pile. The rules for team piles is as follows:

- There are 2 types of piles, sequences and trios.
    - sequences: 3 or more cards of the same suit that are in order (eg. 3, 4, and 5 of hearts)
    - trios: 3 ore more cards of any suit with the same number
- Before creating any trios, a team must first create a sequence. Once the first sequence is created, then players on that team are free to create more sequences or trios as they wish on their turn. They can also expand to the existing sequences / trios as well. 
- 2s of any suit are considered jokers. They can be used regularly as a 2, or as a joker and be any color / number the player chooses. A sequence or trio can contain at most 1 joker. The inital sequence that must be created by each team must be a pure sequence, meaning that it cannot have any jokers in it. Once the initial pure sequence has been created, a team must maintain at least 1 pure sequence at any time. 

### Scoring

TODO