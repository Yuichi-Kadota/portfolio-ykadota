import AppBar from '../common/appbar';
import Grid from '@mui/material/Grid';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import { css } from '@emotion/react';

export default function Contact() {
  return (
    <Grid container columns={12}>
      <Grid item xs={12}>
        <AppBar title={'Contact'}></AppBar>
      </Grid>
      <Grid container direction="column">
        <List sx={{ mb: 15 }}>
          <ListItem
            disablePadding
            sx={{
              mt: 3,
              ml: 10,
            }}
          >
            <ListItemIcon>
              <Image
                src="/contents/contact/github.png"
                height={50}
                width={50}
              ></Image>
            </ListItemIcon>
            <ListItemText sx={{ ml: 1 }}>
              <a
                target="_blank"
                css={(theme) => css`
                  text-decoration: none;
                  color: ${theme.palette.grey[700]};
                `}
                href={'https://github.com/Yuichi-Kadota'}
              >
                github.com/Yuichi-Kadota
              </a>
            </ListItemText>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              mt: 3,
              ml: 10,
            }}
          >
            <ListItemIcon>
              <Image
                src="/contents/contact/twitter.png"
                height={50}
                width={50}
              ></Image>
            </ListItemIcon>
            <ListItemText sx={{ ml: 1 }}>
              <a
                target="_blank"
                css={(theme) => css`
                  text-decoration: none;
                  color: ${theme.palette.grey[700]};
                `}
                href={'https://twitter.com/JM12985'}
              >
                twitter.com/JM12985
              </a>
            </ListItemText>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              mt: 3,
              ml: 10,
            }}
          >
            <ListItemIcon>
              <Image
                src="/contents/contact/mail.png"
                height={50}
                width={50}
              ></Image>
            </ListItemIcon>
            <ListItemText
              sx={{ ml: 1, color: (theme) => theme.palette.grey[700] }}
            >
              kadota.yuichi@gmail.com
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
