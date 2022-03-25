import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// TODO グローバルスタイルに移す
const drawerWidth = 180;

export default function Main(){
  return(
    <Box
    component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
      <Toolbar />
      <Typography paragraph>
        sentence_1.
      </Typography>
      <Typography paragraph>
        sentence_2.
      </Typography>
    </Box>
　 )
}