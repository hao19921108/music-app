

import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {

  const [songs] = useState([
    {
      title:'Unstoppable',
      artist:'AJ Mitchell',
      img_src:'./images/ajmitchell.jpeg',
      src:'./music/unstoppable.mp3'
    },
    {
      title:'Jingle',
      artist:'Justin Bieber',
      img_src:'./images/justinbieber.jpg',
      src:'./music/jingle.mp3'
    },
    {
      title:'Groove',
      artist:'Chris Brown',
      img_src:'./images/chrisbrown.jpg',
      src:'./music/groove.mp3'
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [NextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1 );

   setNextSongIndex = useCallback(
    () => {
      if (currentSongIndex+1>songs.length-1){
        return 0;
      }else{
        return currentSongIndex +1;
      }
    },
    [],
  )

  useEffect(()=>{
    setNextSongIndex()
  },[currentSongIndex]);

  return (
    <div className="App">
      <Player 
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      NextSongIndex={NextSongIndex}
      songs={songs}
      />
    </div>
  );
}

export default App;
