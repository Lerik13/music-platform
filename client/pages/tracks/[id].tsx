import React from 'react'
import { useRouter } from 'next/router'
import MainLayout from '@/layouts/MainLayout'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import { ITrack } from '@/types/track'

const TrackPage = () => {
	const track: ITrack = {_id: '1', name: "track 1", artist: "artist 1", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/0fb7a206-a59f-4717-9892-d761fd28f463.mp3", picture:"http://localhost:5000/image/95a34761-441b-46d7-ac6f-f100aad6c5f6.jpg", comments: [{username: 'Bob', text: "good song"}, {username: 'Mary', text: "the best"}]}
	const router = useRouter()

	return (
		<MainLayout>
			<Button 
				variant={"outlined"}
				style={{fontSize: 32}}
				onClick={() => router.push('/tracks')}
			>
				Track List
			</Button>
			<Grid container style={{margin: '20px 0'}}>
				<img src={track.picture} width={200} height={200} alt={track.name}/>
				<div style={{marginLeft: 30}}>
					<h1>Track name: {track.name}</h1>
					<h1>Artist: {track.artist}</h1>
					<h1>Qty Listens: {track.listens}</h1>
				</div>
			</Grid>
			<h1>Text of song</h1>
			<p>{track.text}</p>

			<h1>Comments</h1>
			<Grid container>
				<TextField
					label="Your name"
					fullWidth
				/>
				<TextField
					label="Comment"
					fullWidth
					multiline
					rows={4}
				/>
				<Button>Send</Button>
			</Grid>
			<div>
				{track.comments.map(comment => 
					<div>
						<div>Author: {comment.username}</div>
						<div>Comment: {comment.text}</div>
					</div>
				)}
			</div>
		</MainLayout>
	)
}

export default TrackPage