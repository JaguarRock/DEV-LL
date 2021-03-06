import React, {Component} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Recent from '@material-ui/icons/FlashOn';
import Like from '@material-ui/icons/Favorite';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';

import AppMenuItem from '../design/AppMenuItem';

const appMenuItems = [
  {name: 'Home',
  link : '/Home',
  Icon : Home,

  },
  {
    name: 'Recent',
    link: '/Recent',
    Icon: Recent,
  },
  {
    name: 'Like',
    link: '/Likes',
    Icon: Like,
  },
  {
    name : 'MyPage',
    link: '/MyPage',
    Icon : Person,
  }
]

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 100

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu
