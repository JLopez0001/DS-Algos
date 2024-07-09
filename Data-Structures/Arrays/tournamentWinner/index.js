/*
Tournament Winner

  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.


  Input: competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
   ]

   results = [0, 0, 1]

*/

function twinner(competitions, results){
    let winner = {score:0, name:''};
    let scoreBoard = {};

    for(let i = 0; i < competitions.length; i++){
        let idx = results[i] === 0 ? 1 : 0;

        if(competitions[i][idx] in scoreBoard){
            scoreBoard[competitions[i][idx]] += 1
        } else {
            scoreBoard[competitions[i][idx]] = 1
        }

        if(scoreBoard[competitions[i][idx]] > winner.score){
            winner.score = scoreBoard[competitions[i][idx]]
            winner.name = competitions[i][idx]
        }
    }

    return winner.name
}

console.log(twinner( [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
   ], [0, 0, 1]))


