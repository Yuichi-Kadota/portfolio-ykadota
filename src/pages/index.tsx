import type { NextPage } from 'next'
import Grid from '@mui/material/Grid';
import Drawer from '../components/drawer'
import Contents from '../components/contents'

const Home: NextPage = () => {
  return (
    <>
    <Grid container>
      <Drawer ></Drawer>
      <Contents></Contents>
    </Grid>
    </>
  )
}

export default Home