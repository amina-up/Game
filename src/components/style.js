import {CONST } from 'dots-and-boxes';
export const PLAYER = CONST.PLAYER;
export const NO_BORDER   = "1px solid black";
export const FILL_BORDER = "5px solid ";
export const HIDE_BORDER = "1px none";

 export const boardStyle =(board)=> {
     let imageWidth = 60;
     let obj={
        display: 'grid',
        width:board.size.x * imageWidth,
        height:board.size.y * imageWidth,
        gridTemplateColumns:'repeat(' + board.size.x + ' ' + imageWidth + 'px)',
        gridTemplateRows:'repeat(' + board.size.y + ' ' + imageWidth + 'px)',
     }
     return obj
   
  }

 export const imgStyle = {
   top:    4,
   left:   4,
   bottom:4,
   right:4,
   width:  50, 
   height: 50
 };

