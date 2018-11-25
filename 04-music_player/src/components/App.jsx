import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import bigshaq from '../images/bigshaq.jpg';

// components
import AlbumArt from './album-art/AlbumArt';
import AlbumInfo from './album-info/AlbumInfo';
import Controls from './controls/Controls';
import Wavvy from './wavvy/Wavvy';

class App extends Component {

  state = {
    song: 'http://tooxclusive.com/west/wp-content/uploads/2017/09/Big-Shaq-Mans-Not-Hot.mp3',
    artist: 'Big Shaq',
    title: 'Man\'s not hot',
    playing: false,
    duration: {
      current: null,
      end: null,
      style: null
    }
  };


  // initialize audio file
  componentDidMount() {
    this.audioElement = document.createElement('audio');
    this.audioElement.setAttribute('src', this.state.song);
    this.audioElement.addEventListener('loadeddata', () => {
      console.log('called...')
      if (this.audioElement.readyState >= 2) {
        let min = parseInt(this.audioElement.duration / 60 );
        let sec = parseInt(this.audioElement.duration - min * 60)
        this.setState({
          duration: {
            current: '0:0',
            end: min + ':0' + sec
          }
        });
      }
    });

    this.audioElement.addEventListener('timeupdate', () => {
      let min = parseInt(this.audioElement.currentTime / 60 );
      let sec = parseInt(this.audioElement.currentTime % 60)
      const current = min + ':' + (sec < 10 ? '0' + sec : sec);

      this.setState((prevState) => {
        return {
          duration: {
            current,
            style: Math.floor(this.audioElement.currentTime / this.audioElement.duration * 100),
            end: prevState.duration.end
          }
        }
      });
    })
  }

  handlePlayButton = () => {
    this.audioElement.play()
    this.setState({
      playing: true
    });
  }

  handlePauseButton = () => {
    this.audioElement.pause();
    this.setState({
      playing: false
    });
  }

  handRewindButton = () => {
    this.audioElement.currentTime = this.audioElement.currentTime - 5;
  }

  handFastForwardButton = () => {
    this.audioElement.currentTime = this.audioElement.currentTime + 5;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 offset-sm-4 ">
              <div className="player">
                <div className="album-info">
                  <AlbumArt image={bigshaq} />
                  <AlbumInfo title={this.state.title} artist={this.state.artist} />
                  <Wavvy />
                  <Controls  
                    play={this.handlePlayButton} 
                    pause={this.handlePauseButton}
                    rewind={this.handRewindButton} 
                    forward={this.handFastForwardButton}
                    playing={this.state.playing} 
                    duration={this.state.duration} />
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default App;