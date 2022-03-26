import * as React from 'react';
import Box from '@mui/material/Grid';
import {Drawer as MuiDrawer} from '@mui/material';
import List from './list'

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <MuiDrawer
          variant="permanent"
          open
        >
          <List />
        </MuiDrawer>
      </Box>
    </>
  );
}
