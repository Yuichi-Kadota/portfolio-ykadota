import {AppBar as MuiAppBar,Typography} from '@mui/material';

interface Props {
    title:string
}

export default function AppBar(props: Props){
    return(
    <MuiAppBar
        position={"static"}
      	sx={{
      	  background: (theme) => theme.palette.primary.light,
      	}}
      	>
        <Typography align={"left"} variant={"h3"} sx={{mt:2,mb:2,ml:3,color:"#f5f5f5",fontFamily:"Humanist"}}>
          {props.title}
        </Typography>
    </MuiAppBar>
    )
}