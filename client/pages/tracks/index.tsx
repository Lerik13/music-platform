import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import { ITrack } from '@/types/track'
import TrackList from '@/components/TrackList'

const Index = () => {
	const router = useRouter()
	const tracks: ITrack[] = [
		{_id: '1', name: "track 1", artist: "artist 1", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/0fb7a206-a59f-4717-9892-d761fd28f463.mp3", picture:"http://localhost:5000/image/95a34761-441b-46d7-ac6f-f100aad6c5f6.jpg", comments: []},
		{_id: '2', name: "track 2", artist: "artist 2", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/9a615980-31e8-4ef8-ae25-43a6e0f25758.mp3", picture:"http://localhost:5000/image/113324c0-02e0-41d9-a0fa-ceb963bd182d.jpg", comments: []},
		{_id: '3', name: "track 3", artist: "artist 3", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/d719fd0c-7ee5-49c7-8b71-32ccd084c3d5.mp3", picture:"http://localhost:5000/image/a972b1c1-d849-47cd-ad4d-d8ad9ab73982.jpg", comments: []},
	]

	return (
		<MainLayout>
			<Grid container justifyContent="center">
				<Card style={{width: 900}}>
					<Box p={3}>
						<Grid container justifyContent="space-between">
							<h1>List of tracks</h1>
							<Button onClick={() => router.push(`/tracks/create`)}>Download</Button>
						</Grid>
					</Box>
					<TrackList tracks={tracks} />
				</Card>
			</Grid>
		</MainLayout>
	)
}

export default Index