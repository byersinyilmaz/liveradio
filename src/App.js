import React, { useState, useEffect } from 'react';
import { DATA } from './Data.js'
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {

  const [url, setUrl] = useState(null)

  const changeUrl = (url) => {
    setUrl(url);
  }

  return (
    <div>
      <div className="header">Radio Station</div>
      <div className="App">



        {DATA.map((item) => {
          return (


            <a onClick={() => setUrl(item.url)} className="radio-station">
              <img src={item.image} />

              <a className="radio-title">{item.id}</a>
            </a>

          )
        })}
      </div>
      <div className="player">
        <AudioPlayer
          autoPlay
          src={url}
          onPlay={e => console.log("onPlay")}
        // other props here
        />
      </div>
    </div>
  );
}

export default App;
