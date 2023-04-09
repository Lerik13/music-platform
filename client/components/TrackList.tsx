import React from 'react'
import { ITrack } from '@/types/track'
//import { Item } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TrackItem from './TrackItem'

interface TrackListProps {
	tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
	//console.log('--- Tracks:')
	//console.log(tracks)
	//tracks.map(track => console.log('id = '+track._id))
	return (
		<Grid container direction="column" spacing={2}>
			<Grid item>
				{tracks.map(track => 
					/*<div>{track._id}</div>*/
					<TrackItem
						key={track._id}
						track={track}
				/>
				)}
			</Grid>
		</Grid>
	)
}



export default TrackList