import React, { useEffect } from 'react'
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import {API_URL} from "../config";

let audio;

const Player = () => {
	//const track: ITrack = {_id: '1', name: "track 1", artist: "artist 1", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/cde56183-cdfd-4a56-8f10-fc9046f4f8a3.mp3", picture:"http://localhost:5000/image/2ec7e8a7-9677-45df-9f08-32a411e558f6.jpg", comments: [{username: 'Bob', text: "good song"}, {username: 'Mary', text: "the best"}]}
	const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
	const {playTrack, pauseTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

	useEffect(() => {
		if (!audio) {
			audio = new Audio()
		} else {
			setAudio()
			playTrack()
			//play()
		}
	}, [active])

	const setAudio = () => {
		if (active) {
			audio.src = API_URL + active.audio
			audio.volume = volume / 100
			audio.onloadedmetadata = () => {
				setDuration(Math.ceil(audio.duration))
			}
			audio.ontimeupdate = () => {
				setCurrentTime(Math.ceil(audio.currentTime))
			}
		}
	}
	
	const play = () => {
		if (pause) {
			playTrack()
			audio.play()
		} else {
			pauseTrack()
			audio.pause()
		}
	}

	const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.volume = Number(e.target.value) / 100
		setVolume(Number(e.target.value))
	}

	const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.currentTime = Number(e.target.value)
		setCurrentTime(Number(e.target.value))
	}

	if (!active) {
		return null
	} 

	return (
		<div className={styles.player}>
			<IconButton onClick={play}>
				{pause
					? <PlayArrow />
					: <Pause />
				}
			</IconButton>
			<Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
				<div>{active?.name}</div>
				<div style={{fontSize:12, color: 'gray'}}>{active?.artist}</div>
			</Grid>
			<TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
			<VolumeUp style={{marginLeft: 'auto'}} />
			<TrackProgress left={volume} right={100} onChange={changeVolume} />
		</div>
	)
}

export default Player