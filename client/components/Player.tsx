import React from 'react'
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress';

const Player = () => {
	const track: ITrack = {_id: '1', name: "track 1", artist: "artist 1", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/cde56183-cdfd-4a56-8f10-fc9046f4f8a3.mp3", picture:"http://localhost:5000/image/2ec7e8a7-9677-45df-9f08-32a411e558f6.jpg", comments: [{username: 'Bob', text: "good song"}, {username: 'Mary', text: "the best"}]}
	const active = false

	return (
		<div className={styles.player}>
			<IconButton onClick={e => e.stopPropagation()}>
				{active
					? <Pause />
					: <PlayArrow />
				}
			</IconButton>
			<Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
				<div>{track.name}</div>
				<div style={{fontSize:12, color: 'gray'}}>{track.artist}</div>
			</Grid>
			<TrackProgress left={0} right={100} onChange={() => ({})} />
			<VolumeUp style={{marginLeft: 'auto'}} />
			<TrackProgress left={0} right={100} onChange={() => ({})} />
		</div>
	)
}

export default Player