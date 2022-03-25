import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {Drawer as MuiDrawer} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image'

// TODO グローバルスタイルに移す
const drawerWidth = 180;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar >
        <p>hogehoge</p>
      </Toolbar>
      <Divider />
      <List>
        {/* TODO コンテンツ編集/onClickのスクロール実装 */}
          <ListItem button key={"about"}>
            <ListItemIcon sx={{minWidth: (theme) => theme.spacing(5)}}>
              <Image src="/drawer/about.png" width={20} height={20} alt="about" />
            </ListItemIcon>
            <ListItemText primary={"about"} />
          </ListItem>
          <ListItem button key={"skill"}>
            <ListItemIcon sx={{minWidth: (theme) => theme.spacing(5)}}>
              <Image src="/drawer/skill.png" width={20} height={20} alt="skill" />
            </ListItemIcon>
            <ListItemText primary={"skill"} />
          </ListItem>
          <ListItem button key={"experience"}>
            <ListItemIcon sx={{minWidth: (theme) => theme.spacing(5)}}>
              <Image src="/drawer/experience.png" width={20} height={20} alt="experience" />
            </ListItemIcon>
            <ListItemText primary={"experience"} />
          </ListItem>
          <ListItem button key={"certificate"}>
            <ListItemIcon sx={{minWidth: (theme) => theme.spacing(5)}}>
              <Image src="/drawer/certificate.png" width={20} height={20} alt="certificate" />
            </ListItemIcon>
            <ListItemText primary={"certificate"} />
          </ListItem>
          <ListItem button key={"contact"}>
            <ListItemIcon sx={{minWidth: (theme) => theme.spacing(5)}}>
              <Image src="/drawer/contact.png" width={20} height={20} alt="contact" />
            </ListItemIcon>
            <ListItemText primary={"contact"} />
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {/* TODO mobile時にディスプレイされないので調査 */}
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Header
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <MuiDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // モバイルアクセス時を考慮.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </MuiDrawer>
        <MuiDrawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </MuiDrawer>
      </Box>
    </>
  );
}
