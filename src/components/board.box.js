import React from 'react';
import EmptyImg from '../img/empty.png';
import crossImg from '../img/crois.png';
import circleImg from '../img/cercle.jpg';
import {NO_BORDER,FILL_BORDER,HIDE_BORDER,PLAYER,imgStyle} from "./style"

function BoardBox ({box,lineClick}) {

const fieldImageUrl=()=> {
return box &&box.owner===PLAYER.USER?circleImg:
box.owner === PLAYER.COMPUTER?crossImg:EmptyImg
    }
    

      let x = box.pos.x + 1;
      let y = box.pos.y + 1;
  
      let ownerColor = ['red', 'red', 'blue'];

      let boxStyle = {
        gridColumnStart: x,
        gridColumnEnd: x,
        gridRowStart:  y,
        gridRowEnd: y,
        borderTop:    HIDE_BORDER,
        borderRight:  NO_BORDER,
        borderBottom: NO_BORDER,
        borderLeft:   HIDE_BORDER
      };
   
      if(box.pos.x === 0) {
        boxStyle.borderLeft = box.left ? FILL_BORDER + ownerColor[box.left] : NO_BORDER;
      }
      if(box.pos.y === 0) {
        boxStyle.borderTop = box.top ? FILL_BORDER + ownerColor[box.top] : NO_BORDER;
      }
      boxStyle.borderRight = box.right ? FILL_BORDER + ownerColor[box.right] : NO_BORDER;
      boxStyle.borderBottom = box.bottom ? FILL_BORDER + ownerColor[box.bottom] : NO_BORDER;
  
      return (
        <div className="boxContainer" style={boxStyle} >
          
           <div className="boxSideN"  
           onClick={()=>lineClick(box.lines.top)}>
           </div> 
         
          <div className="boxSideS"  
         onClick={()=>lineClick(box.lines.bottom)}
          >
          </div>
          <div className="boxSideE"  
         onClick={()=>lineClick(box.lines.right)}
          ></div>
          <div className="boxSideW"
          onClick={()=>lineClick(box.lines.left)}
           ></div>
          <img className="boxCenter" style={imgStyle} src={fieldImageUrl()} alt="id"/>              
          </div>        
      );  
    }
    
  
  
  export default BoardBox