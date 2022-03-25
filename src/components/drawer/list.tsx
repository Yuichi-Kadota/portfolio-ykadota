
import {List as MuiList} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Image from 'next/image'

export default function List(){
    
    return(
    <div>
      <Toolbar >
        <p>hogehoge</p>
      </Toolbar>
      <Divider />
      <MuiList>
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
      </MuiList>
    </div>
    )
}