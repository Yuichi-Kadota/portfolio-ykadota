import AppBar from '../common/appbar'
import Grid from '@mui/material/Grid'
import Image from 'next/image';
import { Typography} from '@mui/material';


export default function About(){
    return(
      <Grid container columns={12}>
        <Grid item xs={12}>
	  			<AppBar title={"About"}></AppBar>
        </Grid>
        <Grid item xs={3} sx={{ml:5,mt:3,mb:2}}>
          <Image src="/contents/about/profile.png" width={300} height={300}></Image>
        </Grid>
        <Grid item xs={5}>
          {/* TODO 載せる内容、文章を考える */}
            <Typography variant={"h4"} sx={{mt:5}}>Yuichi Kadota</Typography>
            <Typography variant={"h5"} sx={{ml:5}}>Feb 21,1995</Typography>
            <Typography variant={"h5"} sx={{ml:5}}>Web Developer(since.2017~)</Typography>
        </Grid>
      </Grid>
    )
}