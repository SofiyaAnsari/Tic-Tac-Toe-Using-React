export default function Log({turns})
{
    return(
        <ol id="log">
  {          //we are dynamically constructing a string using backticks and $ 
  }
{turns.map(turn=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>)}
        </ol>
    );

}