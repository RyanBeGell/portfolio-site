import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import styles from './Skills.module.css'
import SkillsIllustration from 'public/SkillsIllustration'
import ReactLogo from 'public/Icons/ReactLogo';
import JavaScriptLogo from 'public/Icons/JavaScriptLogo';
import TypeScriptLogo from 'public/Icons/TypeScriptLogo';
import CSS3Logo from 'public/Icons/CSS3Logo';
import HTML5Logo from 'public/Icons/HTML5Logo';
import MUILogo from 'public/Icons/MUILogo';
import NextLogo from 'public/Icons/NextLogo';
import OracleLogo from 'public/Icons/OracleLogo';
import AWSLogo from 'public/Icons/AWSLogo';
import DockerLogo from 'public/Icons/DockerLogo';
import JavaLogo from 'public/Icons/JavaLogo';
import NodeLogo from 'public/Icons/NodeLogo';
import PostgresLogo from 'public/Icons/PostgresLogo';
import SpringLogo from 'public/Icons/SpringLogo';
import SectionTitle from './SectionTitle';

export default function Skills(){

    const theme = useTheme();
    const primary = theme.palette.primary.main;

    return(<>
    <Box className="centerBox">
      <Grid>
        <Grid item>
            <SectionTitle title="Skills"/>
        </Grid>
        <Grid item sx={{mt:'-8px'}}>
            {/* Front End Section/Icons */}
            <Typography variant={'h5'} sx={{pb:'16px', }}>
                Front End
            </Typography>
            <Grid container spacing={4}>
            {['ReactJS', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5','Material UI', 'NextJS',].map((name, index) => (
                    <Grid item textAlign="center" columnSpacing={4} key={name}>
                        {
                            index === 0? <ReactLogo height={64} width ={64} fill={primary}/>:
                            index === 1? <JavaScriptLogo height={64} width ={64} fill={primary}/>:
                            index === 2? <TypeScriptLogo height={64} width ={64} fill={primary}/>:
                            index === 3? <CSS3Logo height={64} width ={64} fill={primary}/>:
                            index === 4? <HTML5Logo height={64} width ={64} fill={primary}/>:
                            index === 5? <MUILogo height={64} width ={64} fill={primary}/>:
                            index === 6? <NextLogo height={64} width ={64} fill={primary}/>:null
                        }
                        <Divider sx={{bgcolor: (theme) => theme.palette.primary.main, height: 2, my:1}}/>
                        <Typography variant={'body1'} sx={{color:'primary.main'}}>
                            {name}
                        </Typography>
                    </Grid>
                    ))}
            </Grid>
            <Typography variant={'h5'} sx={{py:'16px'}}>
                Back End
            </Typography>
            <Grid container spacing={4}>
            {['Java', 'Spring', 'NodeJS', 'PostgreSQL', 'Oracle DB', 'Docker', 'Amazon\nWeb Services'].map((name, index) => (
                    <Grid item textAlign="center" columnSpacing={4} key={name}>
                        {
                            index === 0? <JavaLogo height={64} width ={64} fill={primary}/>:
                            index === 1? <SpringLogo height={64} width ={64} fill={primary}/>:
                            index === 2? <NodeLogo height={64} width ={64} fill={primary}/>:
                            index === 3? <PostgresLogo height={64} width ={64} fill={primary}/>:
                            index === 4? <OracleLogo height={64} width ={64} fill={primary}/>:
                            index === 5? <DockerLogo height={64} width ={64} fill={primary}/>:
                            index === 6? <AWSLogo height={64} width ={64} fill={primary}/>:
                            null
                        }
                        <Divider sx={{bgcolor: (theme) => theme.palette.primary.main, height: 2, my:1}}/>
                        <Typography variant={'body1'} sx={{color:'primary.main'}} className={styles.iconName}>
                            {name}
                        </Typography>
                    </Grid>
                    ))}
            </Grid>
        </Grid>
    </Grid>
    </Box>
    </>)
}