import React from 'react'
import { Container, Stepper, Step, StepLabel } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

interface StepWrapperProps {
	activeStep: number;
}

const steps = ['Information about track', 'Download picture', 'Download track']

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
	return (
		<Container>
			<Stepper activeStep={activeStep}>
				{steps.map((step, index) => 
					<Step
						key={index}
						completed={activeStep > index}
					>
						<StepLabel>{step}</StepLabel>
					</Step>
				)}
			</Stepper>
			<Grid container justifyContent="center" style={{margin: '70px 0', height: 270}}>
				<Card style={{width: 600}}>
					{children}
				</Card>
			</Grid>
		</Container>
	)
}

export default StepWrapper