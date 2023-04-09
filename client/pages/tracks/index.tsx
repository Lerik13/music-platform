import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import { ITrack } from '@/types/track'
import TrackList from '@/components/TrackList'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '@/store'
import { fetchTracks } from '@/store/action-creators/tracks'

const Index = () => {
	const router = useRouter()
	/*const tracks: ITrack[] = [
		{_id: '1', name: "track 1", artist: "artist 1", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/cde56183-cdfd-4a56-8f10-fc9046f4f8a3.mp3", picture:"http://localhost:5000/image/2ec7e8a7-9677-45df-9f08-32a411e558f6.jpg", comments: []},
		{_id: '2', name: "track 2", artist: "artist 2", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/cde56183-cdfd-4a56-8f10-fc9046f4f8a3.mp3", picture:"http://localhost:5000/image/2ec7e8a7-9677-45df-9f08-32a411e558f6.jpg", comments: []},
		{_id: '3', name: "track 3", artist: "artist 3", text: "bla-la-la-la", listens: 5, audio: "http://localhost:5000/audio/cde56183-cdfd-4a56-8f10-fc9046f4f8a3.mp3", picture:"http://localhost:5000/image/2ec7e8a7-9677-45df-9f08-32a411e558f6.jpg", comments: []},
	]*/
	const {tracks, error} = useTypedSelector(state => state.track)

	if (error) {
		return <MainLayout>
			<h1>{error}</h1>
		</MainLayout>
	}

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

export default Index;

/*
export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
	const dispatch = store.dispatch as NextThunkDispatch
	await dispatch(await fetchTracks())
})
*/

export const getServerSideProps = wrapper.getServerSideProps(
	store => async ({ req, res, ...etc }) => 	//	store => async () =>
	{
		const dispatch = store.dispatch as NextThunkDispatch;
		await dispatch(fetchTracks());
		
		return { props: {} }
	}
);