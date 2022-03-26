import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  src: string;
  caption: string;
}

export default function Item(props: Props) {
  return (
    <Grid item sx={{ ml: 3.5, mr: 3.5, mt: 3 }}>
      <Image src={props.src} width={90} height={90}></Image>
      <Typography
        variant="subtitle2"
        align="center"
        sx={{ fontSize: (theme) => theme.spacing(2) }}
      >
        {props.caption}
      </Typography>
    </Grid>
  );
}
