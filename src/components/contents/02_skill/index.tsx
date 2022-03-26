import AppBar from '../common/appbar';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Item from './item';

export default function Skill() {
  return (
    <Grid container columns={12}>
      <Grid item xs={12}>
        <AppBar title={'Skill'}></AppBar>
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <Card sx={{ mt: 3, mb: 3, minWidth: (theme) => theme.spacing(120) }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color={(theme) => theme.palette.info.light}
              sx={{
                borderBottom: 'solid 1px',
                borderColor: (theme) => theme.palette.info.dark,
                maxWidth: (theme) => theme.spacing(13),
              }}
            >
              Frontend
            </Typography>
            <Grid container direction="row" justifyContent="center">
              <Item
                src={'/contents/skill/frontend/html5.png'}
                caption="html5"
              ></Item>
              <Item
                src={'/contents/skill/frontend/css3.png'}
                caption="css3"
              ></Item>
              <Item
                src={'/contents/skill/frontend/typescript.png'}
                caption="typescript"
              ></Item>
              <Item
                src={'/contents/skill/frontend/react.png'}
                caption="react"
              ></Item>
              <Item
                src={'/contents/skill/frontend/mui.png'}
                caption="mui"
              ></Item>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <Card sx={{ mt: 3, mb: 3, minWidth: (theme) => theme.spacing(120) }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color={(theme) => theme.palette.primary.light}
              sx={{
                borderBottom: 'solid 1px',
                borderColor: (theme) => theme.palette.primary.dark,
                maxWidth: (theme) => theme.spacing(13),
              }}
            >
              Backend
            </Typography>
            <Grid container direction="row" justifyContent="center">
              <Item src={'/contents/skill/backend/go.png'} caption="Go"></Item>
              <Item
                src={'/contents/skill/backend/gin_go.png'}
                caption="Gin"
              ></Item>
              <Item
                src={'/contents/skill/backend/typescript.png'}
                caption="typescript"
              ></Item>
              <Item
                src={'/contents/skill/backend/php.svg'}
                caption="php"
              ></Item>
              <Item
                src={'/contents/skill/backend/postgres.png'}
                caption="postgres"
              ></Item>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <Card sx={{ mt: 3, mb: 3, minWidth: (theme) => theme.spacing(120) }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color={(theme) => theme.palette.secondary.light}
              sx={{
                borderBottom: 'solid 1px',
                borderColor: (theme) => theme.palette.secondary.dark,
                maxWidth: (theme) => theme.spacing(24),
              }}
            >
              Infra/Middleware
            </Typography>
            <Grid container direction="row" justifyContent="center">
              <Item src={'/contents/skill/infra/aws.png'} caption="AWS"></Item>
              <Item
                src={'/contents/skill/infra/terraform.png'}
                caption="Terraform"
              ></Item>
              <Item
                src={'/contents/skill/infra/docker.png'}
                caption="Docker"
              ></Item>
              <Item
                src={'/contents/skill/infra/github_actions.png'}
                caption="Github Actions"
              ></Item>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
