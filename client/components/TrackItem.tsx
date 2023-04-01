import React from 'react'
import { ITrack } from '@/types/track'
import styles from '../styles/TrackItem.module.scss'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { IconButton } from '@mui/material';
import { Pause, PlayArrow, Delete } from '@mui/icons-material';

interface TrackItemProps {
	track: ITrack;
	active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
	return (
		<Card className={styles.track}>
			<IconButton>
				{active
					? <Pause />
					: <PlayArrow />
				}
			</IconButton>
			<img width={70} height={70} src={track.picture} alt={track.name} />
			<Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
				<div>{track.name}</div>
				<div style={{fontSize:12, color: 'gray'}}>{track.artist}</div>
			</Grid>
			{active && <div>02:42 / 03:22</div>}
			<IconButton style={{marginLeft: 'auto'}}>
				<Delete />
			</IconButton>
		</Card>
	)
}

export default TrackItem