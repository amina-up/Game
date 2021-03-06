import React from 'react';
import {Button } from 'reactstrap';
import { CONST } from 'dots-and-boxes';




function StatusMessage ({game,turn,newGame,gamerName}) {
  
  let scores = game.scores;
  const PLAYER = CONST.PLAYER;
  let computerScore=scores[PLAYER.COMPUTER]
  let userScore=scores[PLAYER.USER]
  let noneScore=scores[PLAYER.NONE]

  let newGameButton =<Button  onClick={newGame} className="mb-5">
    <i className="fas fa-redo-alt fa-3x"></i></Button>;

  let scoreTxt =
  <>
   <h3>Scores :</h3>
   <h4 style={{color: "red"}}>{gamerName?gamerName:"You"} :{userScore}
  </h4> 
  <h4 style={{color: "blue"}}>computer:{computerScore}</h4>

  </> 

  let newTryGame= <>{newGameButton} </>

  let gameIsOver= <>{newGameButton}<br></br><h3 style={{color: "red"}}><i className="fas fa-frown-open fa-2x"></i>Game over 
  </h3>{scoreTxt}</>
  
  let youWinGame=<>{newGameButton}<h3 style={{color: "green"}}><i className="fas fa-trophy fa-2x"></i> You win the game !!!!</h3> {scoreTxt}</>

  let youAreEquals=<>{newGameButton}<h3 style={{color: "grey"}}>Try again because you are equals</h3>{scoreTxt}</>

  let normalMessage= <>{newGameButton}{scoreTxt} </>

      if (turn === null) {
        return (
          newTryGame
        );
      }
     
      if (noneScore === 0 && computerScore>userScore) {
        return (
          gameIsOver
        );
      }

    if(noneScore=== 0 && userScore>computerScore){
        return (
          youWinGame
        );
      }
      if(noneScore === 0 && userScore===computerScore){
      return (
          youAreEquals
        )
      }
      return (
        normalMessage
      );  
  
     
     
    }  
  
  export default StatusMessage