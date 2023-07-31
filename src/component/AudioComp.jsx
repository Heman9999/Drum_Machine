import React from 'react'
import { useEffect } from 'react'

const AudioComp = ({padId,audioId,sound}) => {
  document.addEventListener('keyup',event =>{
    let currentKey = event.key.toUpperCase();
    if(currentKey === audioId || currentKey === audioId){
      playSound(currentKey)
    }
  })
  function playSound(selector){
    var audio = document.getElementById(`${selector}`)
    var display = document.getElementById('display')
    display.innerText = selector      
    // audio.play();
    audio.pause();
    audio.currentTime = 0;
    var nopromise = {
      catch : new Function()
    };
    (audio.play() || nopromise).catch(function(){});
  }
  return (
    <div className='drum-pad' onClick={()=>{ playSound(audioId)}} id={padId}>
        {audioId}
        <audio className='clip' id={audioId} src={sound}></audio>
      </div>
  )
}

export default AudioComp