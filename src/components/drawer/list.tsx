import { useCallback } from 'react';
import { List as MuiList, Typography, Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import { useSiteRef } from '../../contexts/useSiteRef';

export default function List() {
  const siteRef = useSiteRef();
  const scrollToRef = useCallback(
    (val: React.RefObject<HTMLDivElement>) => {
      val!.current!.scrollIntoView({
        behavior: 'smooth',
      });
    },
    [siteRef.ContextRefs]
  );
  return (
    <Box sx={{ maxWidth: (theme) => theme.spacing(21) }}>
      <Box sx={{ m: 1, ml: 2 }}>
        <Typography
          variant={'h4'}
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontFamily: 'メイリオ',
          }}
        >
          Yuichi Kadota
        </Typography>
      </Box>
      <Box sx={{ m: 1, ml: 2 }}>
        <Typography
          variant={'subtitle2'}
          sx={{
            color: (theme) => theme.palette.secondary.main,
            fontFamily: 'メイリオ',
          }}
        >
          Web Developer
        </Typography>
      </Box>
      <Divider />
      <MuiList>
        <ListItem
          button
          key={'about'}
          onClick={() => scrollToRef(siteRef.ContextRefs.aboutRef)}
        >
          <ListItemIcon sx={{ minWidth: (theme) => theme.spacing(5) }}>
            <Image src="/drawer/about.png" width={20} height={20} alt="about" />
          </ListItemIcon>
          <ListItemText primary={'about'} />
        </ListItem>
        <ListItem
          button
          key={'skill'}
          onClick={() => scrollToRef(siteRef.ContextRefs.skillRef)}
        >
          <ListItemIcon sx={{ minWidth: (theme) => theme.spacing(5) }}>
            <Image src="/drawer/skill.png" width={20} height={20} alt="skill" />
          </ListItemIcon>
          <ListItemText primary={'skill'} />
        </ListItem>
        <ListItem
          button
          key={'experience'}
          onClick={() => scrollToRef(siteRef.ContextRefs.experienceRef)}
        >
          <ListItemIcon sx={{ minWidth: (theme) => theme.spacing(5) }}>
            <Image
              src="/drawer/experience.png"
              width={20}
              height={20}
              alt="experience"
            />
          </ListItemIcon>
          <ListItemText primary={'experience'} />
        </ListItem>
        <ListItem
          button
          key={'certificate'}
          onClick={() => scrollToRef(siteRef.ContextRefs.certificateRef)}
        >
          <ListItemIcon sx={{ minWidth: (theme) => theme.spacing(5) }}>
            <Image
              src="/drawer/certificate.png"
              width={20}
              height={20}
              alt="certificate"
            />
          </ListItemIcon>
          <ListItemText primary={'certificate'} />
        </ListItem>
        <ListItem
          button
          key={'contact'}
          onClick={() => scrollToRef(siteRef.ContextRefs.contactRef)}
        >
          <ListItemIcon sx={{ minWidth: (theme) => theme.spacing(5) }}>
            <Image
              src="/drawer/contact.png"
              width={20}
              height={20}
              alt="contact"
            />
          </ListItemIcon>
          <ListItemText primary={'contact'} />
        </ListItem>
      </MuiList>
    </Box>
  );
}
