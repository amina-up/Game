
import React from 'react';
import BoardBox from './board.box';
import {boardStyle} from "./style"
function GameBoard ({board,lineClick}) {
    
      const cells =()=> {
        let boxes = board.boxes;
        let result = [];
        for (let i in boxes) 
        result.push(<BoardBox box={boxes[i]} key={boxes[i].id} lineClick={lineClick} />);
        return result;
      }
      return (
       <div className="board_container" style={boardStyle(board)}>
         {cells()}
       </div>
      );
    }
    

  export default GameBoard