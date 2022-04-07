import Image from 'next/image';
import {
  Card,
  CardContent,
  Typography,
  Toolbar,
  List,
  ListItemText,
  Chip,
} from '@mui/material';
import { css } from '@emotion/react';

interface Props {
  src: string;
  title: string;
  position: string;
  doneList: Array<string>;
  techList: Array<string>;
  company: string;
  siteLink?: string;
  from: string;
  to?: string;
}

export default function Project(props: Props) {
  return (
    <Card sx={{ mt: 4, mb: 3, pb: 0 }}>
      <CardContent
        // MuiCardContent-root-Projectのpadding-bottomを打ち消し
        css={css`
          &:last-child {
            padding-bottom: 0px;
          }
        `}
        sx={{ maxWidth: (theme) => theme.spacing(100), p: 0, pb: 0 }}
      >
        <Toolbar>
          <Image src={props.src} width={28} height={28}></Image>
          <Typography
            variant="h5"
            component="div"
            sx={{
              ml: 1,
              color: (theme) => theme.palette.text.secondary,
              borderBottom: '1px solid',
              borderColor: (theme) => theme.palette.grey[300],
            }}
          >
            {props.title}
          </Typography>
        </Toolbar>
        <Typography
          variant="h6"
          sx={{ ml: 3, color: (theme) => theme.palette.secondary.dark }}
        >
          {props.position}
        </Typography>
        <List sx={{ ml: 3, pb: 0 }}>
          {props.doneList.map((v, i) => {
            return (
              <ListItemText
                key={i}
                primaryTypographyProps={{
                  variant: 'body1',
                }}
              >
                ・{v}
              </ListItemText>
            );
          })}
        </List>
        <Toolbar>
          {props.techList.map((v, i) => {
            return (
              <Chip
                key={i}
                label={v}
                sx={{
                  color: 'white',
                  background: (theme) => theme.palette.secondary.main,
                  ml: 1,
                }}
              />
            );
          })}
        </Toolbar>
        <Typography
          sx={{ m: 1, ml: 3, mb: 2, color: (theme) => theme.palette.grey[600] }}
          variant="body2"
        >
          {props.from}-{props.to}
          {' _'}
          <a
            target="_blank"
            css={(theme) => css`
              text-decoration: none;
              color: ${theme.palette.grey[700]};
            `}
            href={props.siteLink}
          >
            {props.company}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}
