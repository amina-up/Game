
import React, { useState } from 'react';
import {Game} from 'dots-and-boxes';
import StatusMessage from './components/status.msg';
import './css/style.css';
import GameBoard from './components/game.board';
import StarGame from './components/start.game';

function App () {
 
  const [state,setState] = useState({game: new Game({size: {x:3, y:3}}),turn:null});
  const [gamerName,setName]=useState('')

 function lineClick(line) {
    let turn = state.game.executeUserTurn(line);
    if (turn) {
    setState({game:state.game});
    }
  }
  
  const newGame =()=> {
    let game = new Game({size:state.game.size});

    setState({ game, turn:state.turn });
  }
  

    return (
   <div className="container mt-5 body-img">
     <h1 className='text-center mb-5'>Dots and Boxes</h1>
     
	<div className="row">
		<div className="col-md-12">
			<div className="row">
				<div className="col-md-6">
        <StarGame setName={setName}/>
        <StatusMessage 
        gamerName={gamerName}
              game={state.game} 
              turn={state.turn} 
              newGame={newGame}
            />
				</div>
				<div className="col-md-6">
        <GameBoard 
              board={state.game.board} 
              lineClick={lineClick} 
            />
				</div>
			</div>
		</div>
	</div>
</div>
    );
  }


export default App;

