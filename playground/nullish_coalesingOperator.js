'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// tasks, create on player array for each team [variables 'players1' and 'players2']
let [players1, players2] = game.players;
console.log(players1, players2);

console.log('===task 2===');
// task 2. the first player in any player array is the goal keeper and the others are field players. 
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

console.log('===task 3===');
// create an array containing all players of both teams 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

console.log('===task 4===');
// create an array  containing all the original team1 players plus 'Thiago', 'coutinho', and 'Perisic'
const playersFinal = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(playersFinal);

console.log('===task 5===')
let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);