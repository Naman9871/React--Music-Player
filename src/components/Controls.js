import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBIcon } from 'mdb-react-ui-kit';
function Controls(props) {
  return (
    <div className='control'>
<button className='control_SkipBtn' onClick = {() => props.skipSong(false)}>
<MDBIcon fas icon="chevron-circle-left" />
</button>
<button className='control_PlayButton' onClick = {() => props.setIsPlaying(!props.isPlaying)}>
<MDBIcon fas icon={ props.isPlaying ? "pause-circle" : "play-circle"} />
</button>
<button className='control_SkipBtn' onClick = {() => props.skipSong()}>
<MDBIcon fas icon="chevron-circle-right" />
</button>    
    </div>
  )
}

export default Controls