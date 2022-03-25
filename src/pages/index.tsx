import type { NextPage } from 'next'
import Box from '@mui/material/Box';
import Drawer from '../components/drawer'
import Main from '../components/main'

const Home: NextPage = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <Drawer ></Drawer>
      <Main></Main>
    </Box>
    </>
  )
}

export default Home