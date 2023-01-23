import { scrollToAbout } from '@/src/scrollers';
import SouthIcon from '@mui/icons-material/South';
import { Box, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import ReactTyped from 'react-typed';
import styles from './landing.module.css';

export default function Landing() {
	return (
		<>
			<Box className="centerFlexBox" sx={{ minHeight: '100vh' }}>
				<Grid container direction="row" className="centerFlexBox">
					<Grid item sx={{ pr: 8 }}>
						<Typography variant={'h1'} className={"name"}>
							Ryan
							<Typography
								component="span"
								variant={'h1'}
								className={"name"}
								color="primary"
							>
								&nbsp;BeGell
							</Typography>
						</Typography>
						<Typography variant={'h4'} noWrap>
							<ReactTyped
								loop={false}
								typeSpeed={80}
								strings={['Full Stack Software Developer']}
								smartBackspace={false}
								shuffle={false}
								loopCount={0}
								showCursor={true}
								cursorChar="_"
							/>
						</Typography>
					</Grid>
					<Grid item>
						<Image
							src="/programming.svg"
							alt="ManAtDesk"
							width={900.94}
							height={787}
						/>
					</Grid>
				</Grid>
				<IconButton
					className={styles.ArrowIcon}
					color="primary"
					onClick={scrollToAbout}
				>
					<SouthIcon color="primary" sx={{ fontSize: '32px' }} />
				</IconButton>
			</Box>
		</>
	);
}
