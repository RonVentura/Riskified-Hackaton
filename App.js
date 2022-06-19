import './App.css';
import React, { useState } from 'react';
import street from "./street.mp3"
import trash from "./Trash.mp3"
import carefull from "./Carefull.mp4"
import ramzor from "./Ramzor.mp3"

var events = ["CrossRoad", "Carefull", "TrashCan", "nothing", "nothing", "nothing", "nothing"];
var roadArray = [[0, 0, 1], [0, 1, 1], [0, 1, 0], [1,1,0], [1,0,0]];
var startx = 4
var starty = 0
var array = [[0,0,1],[0,1,1],[0,1,0],[1,1,0],[1,0,0]];

function music(song){
  let audio = new Audio(song);
  audio.play();
}

function CrossRoad(){
  music(ramzor);
}

function TrashCan(){
  music(trash);
}

function Carefull(){
  music(carefull)
}

function RandEvent(){

  var num = Math.floor(Math.random() * events.length)
  if (events[num] == "CrossRoad"){
    CrossRoad();
  } else if(events[num] == "TrashCan"){
    TrashCan();
  } else if(events[num] == "Carefull"){
    Carefull();
  }
  events.splice(num,1)
}

function App() {

  function Buttons(direction){
    if (startx == 0 && starty == 2){
      alert("Home - Game Over")
    }
    else if (direction == 0){
      if (startx - 1 >= 0 && startx < 5 ){
        if (roadArray[startx-1][starty] == 1){
          RandEvent()
          roadArray[startx-1][starty] = 0;
          startx -= 1
          setx(startx)
        }
      }
    }
    else if(direction == 1){
      if (starty + 1 < 3 && starty + 1 >= 0){
        if (roadArray[startx][starty + 1] == 1){
          RandEvent()
          roadArray[startx][starty + 1] = 0;
          starty += 1
          sety(starty)
        }
      }
    }  else {
      if (starty - 1 < 3 && starty - 1 >= 0){
        if (roadArray[startx][starty - 1] == 1){
          RandEvent()
          roadArray[startx][starty - 1] = 0;
          starty -= 1
          sety(starty)
        }
      }
    }
  }

  const [x,setx]= useState(4);
  const [y,sety]= useState(0);

  return (
    <body className="App">
      <h1>A Walk in The Dark</h1>
      <button onClick={()=>music(street)} className="start">Start Play</button>
      <div id="screen">
        <div id="path" className='path'>
        {array.map((item,i)=><div className='row'>{item.map((smaller,j)=><span className={i===x&&j===y? 'gridPlayer':(smaller===1?'gridBlack':'gridWhite')}></span>)}</div>)}

        </div>
      </div>
      <div id="buttons">
        <div id="button-up">
        <button style={{height: "50px", width: "100px", fontSize: "20px", font: "Tahoma", backgroundColor: "rgb(65, 230, 175)"}} onClick={()=>Buttons(0)}>Forward</button>
        </div>
        
        <button style={{height: "50px", width: "100px", fontSize: "20px", font: "Tahoma", backgroundColor: "rgb(65, 230, 175)"}} onClick ={()=>Buttons(2)}>Left</button>
          
        <button style={{height: "50px", width: "100px", fontSize: "20px", font: "Tahoma", backgroundColor: "rgb(65, 230, 175)"}} onClick ={()=>Buttons(1)}>Right</button>

      </div>
        
    </body>
  );
  }

export default App;
