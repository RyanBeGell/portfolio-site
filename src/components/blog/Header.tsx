import { Avatar, Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

export interface Props {
  date:String
}

export default function Header(props:Props){
  return(<>
  <Box sx={{mb:'32px'}}>
    <Avatar  src={'/avatar.svg'} alt="Avatar" sx={{height:'48px', width:'48px', float:'left', mr:'16px'}} />
    <Typography variant='subtitle1'> Ryan BeGell </Typography>
    <Typography variant='subtitle2' sx={{color:'text.subtitle'}}> {props.date} </Typography>
  </Box>
  </>)
}