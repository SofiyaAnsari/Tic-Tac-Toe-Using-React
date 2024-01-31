// we are accepting name, symbol props to make the names and symbol dynamic
import { useState } from "react";
//we want to manage some state here, bcz we want to manage
//the data that will change the UI.
//Therefore we are importing useState
export default function Player({ initialName, symbol,isActive,onChangeName }) {
  const[playerName,setPlayerName]=useState(initialName);
  
    const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
   // setIsEditing(!isEditing);   Its not recommended bcz the updates are scheduled by react.
   //There is only a difference of millisec but its not instant
   
   //Instead pass a function to your state updating function:
   setIsEditing((editing)=>!editing);
   if(isEditing){
    onChangeName(symbol,playerName);
   }
  

}
function handleChange(event){
setPlayerName(event.target.value);
}

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //option 2 to change the buttons from edit to save
  //let btnCaption='Edit';
  if (isEditing) {
    editablePlayerName =( <input type="text" value={playerName} required onChange={handleChange} />);
    //option 2 to change the buttons from edit to save

    // btnCaption="Save";
  }
  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {editablePlayerName}      </span>
        <span className="player-symbol">{symbol}</span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
