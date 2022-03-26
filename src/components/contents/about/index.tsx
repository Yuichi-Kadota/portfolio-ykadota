import AppBar from '../appbar'
import Grid from '@mui/material/Grid'
import { Typography, Box　} from '@mui/material';


export default function About(){
    return(
      <>
			{/* ドロワー分のmlを確保*/}
			<Grid container sx={{ml:(theme)=>theme.spacing(21)}}>
	  			<AppBar title={"About"}></AppBar>
			</Grid>
      </>
    )
}