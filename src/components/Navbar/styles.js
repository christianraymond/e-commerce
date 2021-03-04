import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWith = 0;

export default makeStyles((theme) => ({
    appBar: {
     boxShadow: 'none',
     borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
     [theme.breakpoints.up('sm')]:{
        width: `calc(100% - ${drawerWith}px)`,
        marginLeft: drawerWith,
     },
    },
    title:{
     flexGrow: 1,
     alignItems: 'center',
     display: 'flex',
     textDecoration: 'none'
    },
    image:{
     marginRight: '10px',
    },
    menuButton:{
     marginRight: theme.spacing(2),
     [theme.breakpoints.up('sm')]:{
      display: 'none'
     },
    },
    grow:{
     flexGrow: 1,
    },
    search:{
     position: 'relative',
     borderRadius: theme.shape.borderRadius,
     backgroundColor: fade(theme.palette.common.white, 0.15),
     '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
     },
     marginRight: theme.spacing(2),
     marginLeft: 0,
     width: '100%',
     [theme.breakpoints.up('sm')]:{
      width: 'auto'
     },
    },
    inputRoot: {
     color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]:{
        width: '20ch'
      },
    },
}))