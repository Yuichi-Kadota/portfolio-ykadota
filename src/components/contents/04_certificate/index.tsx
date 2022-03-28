import AppBar from '../common/appbar';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function Certificate() {
  return (
    <Grid
      container
      columns={12}
      sx={{ background: (theme) => theme.palette.grey[50] }}
    >
      <Grid item xs={12}>
        <AppBar title={'Certificate'}></AppBar>
      </Grid>
      <Grid container direction="column">
        {/*TODO ListItemにリファクタする */}
        <Typography
          variant="h5"
          sx={{
            mt: 3,
            ml: 10,
          }}
        >
          ・AWS Certified Solutions Architect – Associate
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            ml: 14,
            color: (theme) => theme.palette.grey[600],
          }}
        >
          _2020/08
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 3,
            ml: 10,
          }}
        >
          ・基本情報技術者試験(FE)
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            ml: 14,
            mb: 2,
            color: (theme) => theme.palette.grey[600],
          }}
        >
          _2020/08
        </Typography>
      </Grid>
    </Grid>
  );
}
