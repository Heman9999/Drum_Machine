import './App.scss'
// import { useEffect } from 'react'
import AudioComp from './component/AudioComp'
import sound1 from './Music/Heater-1.mp3'
import sound2 from './Music/Heater-2.mp3'
import sound3 from './Music/Heater-3.mp3'
import sound4 from './Music/Heater-4_1.mp3' 
import sound5 from './Music/Heater-6.mp3'
import sound6 from './Music/Kick_n_Hat.mp3'
import sound7 from './Music/RP4_KICK_1.mp3'
import sound8 from './Music/Cev_H2.mp3'
import sound9 from './Music/Dsc_Oh.mp3'
import React from 'react'

function App() {
  
  return (
    <React.Fragment>
      <div id="display">
      </div>
      <div className='BtnClass'>
        <AudioComp  padId='QQ' audioId='Q' sound={sound1}/>
        <AudioComp  padId='WW' audioId='W' sound={sound2}/>
        <AudioComp  padId='EE' audioId='E' sound={sound3}/>
        <AudioComp  padId='AA' audioId='A' sound={sound4}/>
        <AudioComp  padId='SS' audioId='S' sound={sound5}/>
        <AudioComp  padId='DD' audioId='D' sound={sound6}/>
        <AudioComp  padId='ZZ' audioId='Z' sound={sound7}/>
        <AudioComp  padId='XX' audioId='X' sound={sound8}/>
        <AudioComp  padId='CC' audioId='C' sound={sound9}/>
      </div>
    </React.Fragment>
  );
}

export default App;
