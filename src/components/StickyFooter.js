import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NewTest from './NewTest';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import firebase from '../firebase';
import {withRouter} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paper1: {
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   },

  icon: {
  
  },

  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },

  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

  footer: {
   width:'100%',
   position:'absolute',
   bottom:1,
   left:0, 
  },
  middleContainer: {
    width:'100%',
    marginTop:-20
  },
  InnerMiddleContainer:{
    margin: theme.spacing(6),
  },

  AddNewTestfab: {
    margin: theme.spacing(3),
  },

  largeIcon: {
    width: 60,
    height: 60,
    margin: theme.spacing(2.8),
  },

  WelcomebackUserStyle:{
    position: 'absolute',
    top:20,
    left:55, 

  },
  popover: {
    pointerEvents: 'none',
  },

  Logoutpaper: {
    padding: theme.spacing(1),
  
  },
  logOutDiv: {
      position:'absolute',
      top:19,
      right:55
  },

  LogOutBtn:{
    fontSize:'15px',
    marginLeft:theme.spacing(1),
  },

  addSpacing:{
    marginTop:theme.spacing(2.5)
  },
  bottomNavigationStyle:{
  }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





function AllTestIcon(props){
  return (
    <SvgIcon {...props}>
        <path d="M6 6v-4c0-1.1 0.9-2 2-2h10c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-4v4c0 1.105-0.895 2-2 2v0h-10c-1.105 0-2-0.895-2-2v0-10c0-1.1 0.9-2 2-2h4zM8 6h4c1.105 0 2 0.895 2 2v0 4h4v-10h-10v4zM2 8v10h10v-10h-10z"/>
    </SvgIcon>
  )
}
function ViewPreviousIcon(props){
  return (
    <SvgIcon {...props}>
        <path d="M6 6v-4c0-1.1 0.9-2 2-2h10c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-4v4c0 1.105-0.895 2-2 2v0h-10c-1.105 0-2-0.895-2-2v0-10c0-1.1 0.9-2 2-2h4zM8 6h4c1.105 0 2 0.895 2 2v0 4h4v-10h-10v4zM2 8v10h10v-10h-10z"/>
    </SvgIcon>
  )
}


function ProfileIcon(props){
  return (
    <SvgIcon {...props}>
        <path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
         </SvgIcon>
  )
}


function LogOutBtn(props){
    return (
      <SvgIcon {...props}>
        <path d="M10 22.5c0 0.438 0.203 1.5-0.5 1.5h-5c-2.484 0-4.5-2.016-4.5-4.5v-11c0-2.484 2.016-4.5 4.5-4.5h5c0.266 0 0.5 0.234 0.5 0.5 0 0.438 0.203 1.5-0.5 1.5h-5c-1.375 0-2.5 1.125-2.5 2.5v11c0 1.375 1.125 2.5 2.5 2.5h4.5c0.391 0 1-0.078 1 0.5zM24.5 14c0 0.266-0.109 0.516-0.297 0.703l-8.5 8.5c-0.187 0.187-0.438 0.297-0.703 0.297-0.547 0-1-0.453-1-1v-4.5h-7c-0.547 0-1-0.453-1-1v-6c0-0.547 0.453-1 1-1h7v-4.5c0-0.547 0.453-1 1-1 0.266 0 0.516 0.109 0.703 0.297l8.5 8.5c0.187 0.187 0.297 0.438 0.297 0.703z"/>
      </SvgIcon>
    )
}

 function StickyFooter(props) {
    
  
    const classes = useStyles();
    const [openNewTest, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState(0);

    /** function update navigation state */
    function handleNavigationChange(newValue) {
      setValue(newValue);
    }
    /** function handles the Open new test Modal */
  function handleClickOpenNewTest() {
    setOpen(true);
  }
  function handleCloseNewTest() {
    setOpen(false);
  }
  /**popover function on mouse over */
    function handlePopoverOpen(event){
      setAnchorEl(event.currentTarget);
    }
    function handlePopoverClose(){
      setAnchorEl(null);
    }
    const open = Boolean(anchorEl);

    if(!firebase.getCurrentUsername()){
      //not logged in 
    
      props.history.replace('/signin')
      return null;
    }
  return (
    <div className={classes.root}>  
    
      <Dialog fullScreen open={openNewTest} onClose={handleCloseNewTest} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseNewTest} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cancel Test
            </Typography>
          </Toolbar>
        </AppBar>
          <NewTest />
      </Dialog>
      
      <div className={classes.WelcomebackUserStyle}>
          <Typography variant="body2" color="textSecondary">Welcome {firebase.getCurrentUsername()}</Typography>
      </div>
    
      <div className={classes.logOutDiv}>
        <Link color="inherit" 
            aria-owns={open ? 'mouse-over-popover': undefined}
            aria-haspopup = "true"
            onMouseEnter = {handlePopoverOpen}
            onMouseLeave = {handlePopoverClose}
            >
          
          <Typography variant="body2" color="textSecondary">
            logout
            <LogOutBtn 
            className={classes.LogOutBtn} color="primary" 
            onClick={logout}/>
          </Typography>
      

          <Popover id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                      paper:classes.Logoutpaper,
                    }}
              open={open}
              anchorEl={anchorEl}
            
              anchorOrigin ={{
                vertical:'bottom',
                horizontal:'left',
              }}
              transformOrigin = {{
                vertical:'top',
                horizontal:'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus> you are about to logout from app!
            </Popover>
        </Link>
        </div>
    
      
      <div className={classes.middleContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Link color="inherit"  >
              <Paper className={classes.paper1}>
                                     <Fab color="primary" aria-label="add"
                                      className={classes.AddNewTestfab} 
                                      onClick={handleClickOpenNewTest}>
                                  <AddIcon />
                                    </Fab>
                                     <Typography variant="body1" color="textSecondary">Start New Test 
                                       </Typography>
          
                
              </Paper>
              </Link>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Link color="inherit" href="/">
              <Paper className={classes.paper1}>
                  
                  <ViewPreviousIcon className={classes.largeIcon} color="primary"/>
                     <Typography variant="body1" color="textSecondary"> View Previous Tests and Result
                        </Typography>
                </Paper>
                  </Link>
            </Grid>
          </Grid>
      </div>

      <div className={classes.addSpacing}></div>        
      <div className={classes.addSpacing}></div>     
      <div className={classes.addSpacing}></div>  

              <CssBaseline />
     <footer className={classes.footer}>
       <Box boxShadow={3}>
        <BottomNavigation 
            value={value} 
            onChange={(event, newValue) =>{
              setValue(newValue);
            }} 
            showLabels
            className={classes.bottomNavigationStyle}>
              <BottomNavigationAction label="Home" icon={<HomeIcon className={classes.icon} color="primary" />} />
              <BottomNavigationAction label="All Tests"icon={<AllTestIcon className={classes.icon} color="primary" />} />
              <BottomNavigationAction label="Profile"  icon={ <ProfileIcon className={classes.icon} color="primary" />} />
        </BottomNavigation>    
        </Box>
     </footer>
     

  
    </div>
  );

  async function logout(){
    await firebase.logout()
    props.history.push('/signin')
  }
}


export default withRouter(StickyFooter)