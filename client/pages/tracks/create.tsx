import React, { useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import StepWrapper from '@/components/StepWrapper'
import { Grid, Button, TextField } from '@mui/material'
import FileUpload from '@/components/FileUpload'

const CreateTrack = () => {
	const [activeStep, setActiveStep] = useState(0)
	const [picture, setPicture] = useState(null)
	const [audio, setAudio] = useState(null)

	const next = () => {
		if (activeStep !== 2) {
			setActiveStep(prev => prev + 1)
		}
	}
	const back = () => {
		setActiveStep(prev => prev - 1)
	}

	return (
		<MainLayout>
			<StepWrapper activeStep={activeStep}>
				{activeStep === 0 && 
					<Grid container direction="column" style={{padding: 20}}>
						<TextField
							style={{marginTop: 10}}
							label={"Name of track"}
						/>
						<TextField
							style={{marginTop: 10}}
							label={"Author name"}
						/>
						<TextField
							style={{marginTop: 10}}
							label={"Text of song"}
							multiline
							rows={3}
						/>
					</Grid>
				}
				{activeStep === 1 && 
					<FileUpload setFile={setPicture} accept="image/*">
						<Button>Download picture</Button>
					</FileUpload>
				}
				{activeStep === 2 && 
					<FileUpload setFile={setAudio} accept="audio/*">
						<Button>Download audio</Button>
					</FileUpload>
				}
			</StepWrapper>
			<Grid container justifyContent='space-between'>
				<Button disabled={activeStep === 0} onClick={back}>Back</Button>
				<Button onClick={next}>Next</Button>
			</Grid>
		</MainLayout>
	)
}

export default CreateTrack