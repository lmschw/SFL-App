import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Register from './signUp';
import {withRouter}  from 'react-router-dom';
import firebase from '../firebase';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom:theme.spacing(8),
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  boxStyle:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:theme.spacing(8)
  },
  linkToSignup:{
      color:'#3700B3',
      '&:hover': {
        textDecorationLine:'underline',
      },
      
  
  }
}));

function SignIn(props) {
  const classes = useStyles();
  const [email,setEmail]= useState('');
  const [password,setPassword] = useState('');



  return (

    <div> 
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} onSubmit={e => e.preventDefault() &&false}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={e =>setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={login}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link to="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link to ='/signup' variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
    </div>
  );

  async function login(){
     try{
         await firebase.login(email,password)
         props.history.replace('/Dashboard')
     }catch (err){
         alert(err.message)
     }
  }
}


export default withRouter(SignIn)