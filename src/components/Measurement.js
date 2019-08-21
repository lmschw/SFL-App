import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ReactCountdownClock  from 'react-countdown-clock';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SvgIcon from '@material-ui/core/SvgIcon';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';

const useStyles = makeStyles(theme => ({
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
      popover:{
          pointerEvents:'none',
      },
      paper: {
          padding:theme.spacing(1)
      },
      header:{
          display:'flex',
          justifyContent:'center',
          marginTop:theme.spacing(1),
      },
     tableRoot: {
        width: '30%',
        overflowX: 'auto',
        marginTop:theme.spacing(1)
      },
      table: {
        minWidth: 200,
      },
      Tablehead: {
        backgroundColor: '#3700B3',
      },
      countStyle: {
        color:'#fff',
      },
      button: {
        marginT: theme.spacing(1),
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      doneButton: {
        position:'absolute',
        bottom:'0',
        right:'0',
        zIndex:'999999',
        margin:theme.spacing(5),
      },
      timerStartStop:{
            height:'40px',
            marginTop:theme.spacing(2)
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },
      middlePanel:{
          position:'absolute',
          width:'95%',
          top:'0',
          marginTop:theme.spacing(20),
      },
      Maintimer:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      },
      timerControl:{
        display:'flex',
        justifyContent:'center',
        //paddingRight:theme.spacing(12)
      },
      Nextbtn:{
          position:'absolute',
          right:'0px',
          bottom:'0px',
          margin:theme.spacing(6)
      },
      BackBtn:{
        position:'absolute',
        right:'0px',
        bottom:'0px',
        margin:theme.spacing(6),
        marginRight:theme.spacing(20)
      },
      measurementTable:{
          display:'flex',
          justifyContent:'center',
      },
       thresholdIndicator:{
          position:'absolute',
          display:'flex',
          flexDirection:'column',
          right:'0'
      },
      upThresh:{
          display:'flex',
          justifyContent:'flex-end',
      },
      upArrow:{
        fontSize:'50px',
      },
      downThresh:{
        display:'flex',
        justifyContent:'flex-end',
      },
      downArrow:{
        fontSize:'50px',
      },
      middleThresh:{
       display:'flex',
       justifyContent:'flex-end',
      },
       middleArrow:{
        fontSize:'50px',
      },
      close: {
        padding: theme.spacing(0.5),
    },
    threshInput:{
     width:'11%',
     marginLeft:theme.spacing(2), 
    }
    }));

const allowedTimer = [
    {
        value: 1*60,
        label:  `1 min`,
    },
    {
        value: 2*60,
        label:  `2 min`,
        
    },
    {
        value: 4*60,
        label:  `4 min`,
        
    },
    {
        value: 5*60,
        label:  `5 min`,
        
    },
    {
        value: 7*60,
        label:  `7 min`,
        
    },
    {
        value: 10*60,
        label:  `10 min`,

    }
]
function createData(name,count){
    return {name,count}
}
/** sample data */
const rows = [
    createData('No. of Error Words',4),
    createData('Time taken till correct word',10)
];

/** this function requires the word tested on */
export default function Measurement(props){
    const classes = useStyles();
    const [time,setTime] = React.useState(0);
    const [values, setValues] = React.useState({
        time: 7*60,
      });
      
       /**  button stop and retains the value of the current time count*/
    const [pause, setPause] = React.useState(false);
    /** handle combo box selection */
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
      
   
    
 


function ArrowUp(props){
  return (
    <SvgIcon {...props}>    
        <path d="M10 16v-8l3 3 3-3-8-8-8 8 3 3 3-3v8z"></path>
    </SvgIcon>
  )
}
function Middle(props){
  return (
    <SvgIcon {...props}>    
<path d="M2 2h12v12h-12z"></path>
    </SvgIcon>
  )
}
function DownArrow(props){
  return (
    <SvgIcon {...props}>    
    <path d="M6 0v8l-3-3-3 3 8 8 8-8-3-3-3 3v-8z"></path>
    </SvgIcon>
  )
}
/** using react state we switch the colors of the threshold
 available threshold can be adjusted but here we use only state to 
 swtich colors just for aethetis indicator
  */
  /**this section controls the computation behind asigning new word based on threshold */
    // Assume 6 words to be displayed
    //select an easy word to set as default to start with
    //by Default test will start from easy level
    const [InitialMinutes,setInitialMinutes] = React.useState(0);
    const [FinalMinutes,setFinalMinutes] = React.useState(0);
    const [InitialSeconds,setInitialSeconds] = React.useState(0);
    const [FinalSeconds,setFinalSeconds] = React.useState(0);

    const [upThresholdColor, setUpThresholdColor] = React.useState(false);
    const [middleThresholdColor,setMiddleThresholdColor] = React.useState(false);
    const [downThresholdColor,setDownThresholdColor] = React.useState(false);

    const [upThresholdValue, setUpThresholdValue] = React.useState();
    const [middleThresholdValue,setMiddleThresholdValue] = React.useState();
    const [downThresholdValue,setDownThresholdValue] = React.useState();
    
    /** now we compute the threshold to be passed by keeping track of the time when
    test is started and stopped then find the difference stoppedTime - startingTime 
     */
    const [ finishTime,setFinishTime ] = React.useState([]);
    const[ counter, setCounter] = React.useState(0);
    function startTimer (){
        setPause(false) //pause is false
        if(counter === 0){
        setTime(values.time) // trigger timer with selected time value
        setFeedbackMessage("Timer Started")
        setOpenFeedback(true);
        //set minutes amd seconds
        setInitialMinutes(new Date().getMinutes())
        setInitialSeconds(new Date().getSeconds())
          //reset minutes amd seconds
        setFinalMinutes(0)
        setFinalSeconds(0)
        }
        if(counter === 1){
             setPause(true) //pause is false
             setFeedbackMessage(`A Test has already been saved for "${props.word}", please click next`);
             setOpenFeedback(true);
        }
    }
    function stopTimer(){
         setPause(true) // pause is flipped to true
        if(counter === 0){
            console.log(props.word)
            setFeedbackMessage("Test Saved")
            setOpenFeedback(true);
            //set minutes amd seconds
            setFinalMinutes(new Date().getMinutes())
            setFinalSeconds(new Date().getSeconds())
            setCounter(1);
        }
        if(counter === 1){
             setFeedbackMessage(`A Test has already been saved for "${props.word}", please click next`);
             setOpenFeedback(true);
        }
    }
   
      useEffect(() => {
            if(pause === true & InitialSeconds > 0 ){
                var finishMinutes = Math.abs(FinalMinutes-InitialMinutes)
                var finishSeconds = Math.abs(FinalSeconds-InitialSeconds)
                setFinishTime(`Finished in : ${finishMinutes}m : ${finishSeconds}s`)
                // compute the threshold and bind to indicators
                // available threshold values in minutes 0-2, 2-3, 5+
                if(finishMinutes <=2){
                    //upArrow, next word should be hard
                    setUpThresholdColor(true)
                    setUpThresholdValue(finishMinutes)
                    props.getUp()
                }
                if(finishMinutes > 2 && finishMinutes<=3){
                    setMiddleThresholdColor(true)
                    setMiddleThresholdValue(finishMinutes)
                    props.getMiddle()
                }
                if(finishMinutes >3){
                    setDownThresholdColor(true)
                    setDownThresholdValue(finishMinutes)
                     props.getDown()
                }
               
            }
        });
    /** feeedback */
       const [openFeedback, setOpenFeedback] = React.useState(false);
       const [FeedbackMessage,setFeedbackMessage] = React.useState()
        function handleCloseFeedback(event, reason) {
            if (reason === 'clickaway') {
             return;
             }
              setOpenFeedback(false);
        }
    /** threshold settings */
     const [thresholdValue, setThresholdValue] = React.useState({
       thresh: '2',
  });
   const handleChangeThreshold = name => event => {
    setThresholdValue({ ...thresholdValue, [name]: event.target.value });
  };
    return (
        <div>
               

            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={openFeedback}
                autoHideDuration={6000}
                onClose={handleCloseFeedback}
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{FeedbackMessage}</span>}
                action={[
                    <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    className={classes.close}
                    onClick={handleCloseFeedback}
                >
                    <CloseIcon />
                </IconButton>,
                ]}
            />
              
            <div className={classes.thresholdIndicator}> 
                <div className={classes.upThresh}> 
                <h6>{upThresholdValue}</h6>
                <ArrowUp  className={classes.upArrow} style={{fill:upThresholdColor === true? '#7CFC00':'#808080'}}/>
                </div>

                <div className={classes.middleThresh}> 
                <h6>{middleThresholdValue}</h6>
                <Middle className={classes.middleArrow} style={{fill:middleThresholdColor=== true? '#FFFF33':'#808080'}}/>
                </div>

                 <div className={classes.downThresh}> 
                <h6>{downThresholdValue}</h6>
                <DownArrow className={classes.downArrow} style={{fill:downThresholdColor=== true? '#FF6347':'#808080'}}/>
                </div>

                <div className={classes.finishTime}> 
                <h6 > {finishTime} </h6>               
                </div>
            </div>
         <div className={classes.Maintimer}>
              <ReactCountdownClock 
                    seconds={time} 
                    showMilliseconds={true}
                    color="#3700B3"
                    alpha={0.9}
                    size={160}
                    pausedText="▐▐ "
                    paused={pause}
                    onComplete={() =>{                        
                    }}
                    />
             </div>      

            <div className={classes.timerControl}>
                <form noValidate autoComplete="off">
                    <TextField
                    id="filled-select-time"
                    select
                    label="Select"
                    value={values.time}
                    onChange={handleChange('time')}
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    helperText="Please select a time"
                    margin="normal"
                    variant="filled"
                    >
                    {allowedTimer.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </form>
            
            <div className={classes.timerStartStop}>
                    <IconButton color="primary" onClick={startTimer} aria-label="add an alarm">
                        <Icon>alarm</Icon>
                        start
                        </IconButton>
                        <Button variant="contained" color="primary"onClick={function(event){stopTimer();}}> 
                                stop
                        </Button>
                </div>
            </div>
                {/** add measurement table */}
                <div className={classes.measurementTable}>
                <Paper className={classes.tableRoot}>
                    <Table className={classes.table}>
                        <TableHead className={classes.Tablehead}>
                            <TableRow>
                                <TableCell align="left">
                                    <Typography className={classes.countStyle}>
                                        Measurement
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography className={classes.countStyle}> 
                                            Count
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row =>(
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.count}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
  
        </div>
    );
}