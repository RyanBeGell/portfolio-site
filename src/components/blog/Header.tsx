import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import LinkIcon from '@mui/icons-material/Link';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import styles from '@/src/components/landing.module.css';


export interface Props {
  date:String
  minRead:Number
  title:String
  fileName:String
}

export default function Header(props:Props){

  return(<>
    <Box sx={{mb:'32px'}}>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Avatar  src={'/avatar.svg'} alt="Avatar" sx={{height:'48px', width:'48px', float:'left', mr:'16px'}} />
          <Typography variant='subtitle1'>Ryan BeGell</Typography>
          <Typography variant='subtitle2' component="span" noWrap sx={{color:'text.secondary'}}>{props.date}</Typography>
          <Typography variant='subtitle2' component="span" noWrap sx={{color:'text.secondary', px:'8px'}}>·</Typography>
          <Typography variant='subtitle2' component="span" noWrap sx={{color:'text.secondary'}}>{props.minRead + " min read"}</Typography>
        </Grid>
        <Grid item xs={4} display='flex' justifyContent='flex-end'>
          <Box position='relative' sx={{top:"25%"}}>
              <RedditIcon sx={{color:'text.blogIcons', mr:'8px',fontSize:'25px', "&:hover": { color: "#FF5700", cursor:'pointer' }  }}/>
              <TwitterIcon sx={{color:'text.blogIcons', mr:'8px',fontSize:'25px', "&:hover": { color: "#1DA1F2", cursor:'pointer' }  }}/>
              <LinkedInIcon sx={{color:'text.blogIcons', mr:'8px',fontSize:'25px', "&:hover": { color: "#0077b5 ", cursor:'pointer' }  }}/>
              {/* Mui link icon is horizontal, -45 deg rotate because I think it looks a bit nicer diagonal */}
              <LinkIcon sx={{color:'text.blogIcons', transform:'rotate(-45deg)', fontSize:'25px', "&:hover": { color: "#666666", cursor:'pointer' }  }}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{pb:'16px'}}>
      <h4>{props.title}</h4>
    </Box>
  </>)
}