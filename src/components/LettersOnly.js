import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Measurement from './Measurement';
import Randomizer from '../computation/Randomizer';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
    root:{
     
    },
    appBar: {
        position: 'relative',
        backgroundColor:'#3700B3'
      },
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
      chip:{
          margin:theme.spacing(0.5),
      },
      chipRoot: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
      },
      header:{
          display:'flex',
          justifyContent:'center',
          marginTop:theme.spacing(1),
      },
      addWordIcon:{
          position:'absolute',
          top:'0',
          zIndex:'999999',
          marginTop:theme.spacing(13),
          marginLeft:theme.spacing(3)
      },
      fab: {
        margin: theme.spacing(2),
      },
     extendedIcon: {
        marginRight: theme.spacing(3),
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
      testComplete:{
        display:'flex',
        justifyContent:'center',
        marginTop:theme.spacing(-30),
        fontSize:'30px',
        color:'#3700B3',
        fontWeight:'bold'
      }
    }));



const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

export default function LettersOnly(props) {  //available props ageSelected,open,close
    const classes = useStyles();
    /** AgeGroup syntax : 5-6 || 7-8 || 9-10 || 11-12 
        Level syntax : easy || medium || hard
    */
    
    const [counter,setCounter] = React.useState(0);
    const [wordChip,setWordChip] = React.useState([]);
    // duplicate of the words generated
    const [FirstWordDup, setFirstWordDup] = React.useState([]);
    const [SecondWordDup, setSecondWordDup] = React.useState([]);
    const [ThirdWordDup, setThirdWordDup] = React.useState([]);
    const [FourthWordDup, setFourthWordDup] = React.useState([]);
    const [FifthWordDup, setFifthWordDup] = React.useState([]);
    const [SixthWordDup, setSixthWordDup] = React.useState([]);

     /** feeedback to selection and clicks */
       const [openFeedback, setOpenFeedback] = React.useState(false);
       const [FeedbackMessage,setFeedbackMessage] = React.useState();
        function handleCloseFeedback(event, reason) {
            if (reason === 'clickaway') {
             return;
             }
              setOpenFeedback(false);
        }
   /** feed state end here --------> */     
    const addWord = () =>{
       setOpenFeedback(true);
       Randomizer.randomEasy("easy",props.ageSelected); 
      if(counter <1){
      setWordChip([
        ...wordChip,
        {
          key:0, label: Randomizer.getDefaultWord()
        },
         {
          key:1, label: Randomizer.getSecondWord()
        },
         {
          key: 2, label: Randomizer.getThirdWord()
        },
         {
          key: 3, label: Randomizer.getFourthWord()
        },
         {
          key: 4, label: Randomizer.getFifithWord()
        },
         {
          key: 5, label: Randomizer.getsixthWord()
        }
      ]);
      setCounter(1)
      setOpenFeedback(true);
     
      setFeedbackMessage("Easy words Generated")
      //save duplicates
      setFirstWordDup( ...FirstWordDup, { key:0, label: Randomizer.getDefaultWord()}) 
      setSecondWordDup( ...SecondWordDup, { key:1, label: Randomizer.getSecondWord()}) 
      setThirdWordDup( ...ThirdWordDup, { key:2, label: Randomizer.getThirdWord()}) 
      setFourthWordDup( ...FourthWordDup, { key:3, label: Randomizer.getFourthWord()}) 
      setFifthWordDup( ...FifthWordDup, { key:4, label: Randomizer.getFifithWord()}) 
      setSixthWordDup( ...SixthWordDup, { key:5, label: Randomizer.getsixthWord()}) 
      }
      // on click generate new word if user isnt satisfied with the currently displayed default words
       if(counter >0){
         Randomizer.randomEasy("easy",props.ageSelected); //get a different word
          wordChip.map(data =>{
              setWordChip([
                {key:0, label: Randomizer.getDefaultWord()},
                {key:1, label: Randomizer.getSecondWord()},
                {key:2, label: Randomizer.getThirdWord()},
                {key:3, label: Randomizer.getFourthWord()},
                {key:4, label: Randomizer.getFifithWord()},
                {key:5, label: Randomizer.getsixthWord()},
              ])
          })
           setOpenFeedback(true);
           setFeedbackMessage("Easy words Generated")
/* 
           // save duplicates
           //1
           FirstWordDup.map(data =>{
             setFifthWordDup([
              {key:0, label: Randomizer.getDefaultWord()}
             ])
           })
           //2
           SecondWordDup.map(data =>{
            setSecondWordDup([
             {key:1, label: Randomizer.getSecondWord()}
            ])
          })
          //3
            ThirdWordDup.map(data =>{
              setSecondWordDup([
               {key:2, label: Randomizer.getThirdWord()}
              ])
            })
          //4
          FourthWordDup.map(data =>{
            setSecondWordDup([
             {key:3, label: Randomizer.getFourthWord()}
            ])
          })
          //5
          FifthWordDup.map(data =>{
            setSecondWordDup([
             {key:4, label: Randomizer.getFifithWord()}
            ])
          })
          //6
          SixthWordDup.map(data =>{
            setSecondWordDup([
             {key:5, label: Randomizer.getsixthWord()}
            ])
          }) */
      }
   
    
      
    }
    useEffect(() =>{
       console.log(FirstWordDup)
    })
    const handleDeleteWordChip = wordToDelete => () =>{
        setWordChip(chips => chips.filter(chip => chip.key !== wordToDelete.key));
        setOpenFeedback(true);
        setFeedbackMessage(`${wordToDelete.label} deleted!`)
    }
   
    /** ############### main section for test stepper */

function getSteps() {
        return (wordChip.map(data =>{
               return data.label
        }))
    }   

 

function getStepContent(step) {
    switch (step) {
      case 0:
        return (wordChip.map(data =>{
          if(data.key === 0){
            return <Measurement 
            word={data.label} key={data.key}
            getUp={handleUp}
            getMiddle={handleMiddle}
            getDown={handleDown}
           />
          }
        }))
      case 1:
       return (wordChip.map(data =>{
          if(data.key === 1){
            return <Measurement 
            word={data.label} key={data.key}
            getUp={handleUp}
            getMiddle={handleMiddle}
            getDown={handleDown}
            />
          }
        }))
      case 2:
          return (wordChip.map(data =>{
          if(data.key === 2){
           return <Measurement word={data.label} key={data.key} />
          }
        }))
      case 3:
           return (wordChip.map(data =>{
          if(data.key === 3){
          return <Measurement word={data.label}  key={data.key}/>
          }
        }))
     case 4:
         return (wordChip.map(data =>{
          if(data.key === 4){
          return <Measurement word={data.label}  key={data.key}/>
          }
        }))
    case 5:
         return (wordChip.map(data =>{
          if(data.key === 5){
          return <Measurement word={data.label}  key={data.key}/>
          }
        }))
      default:
        return 'Unknown step';
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }



//get the threshold from measurement function
// compute the threshold and bind to indicators
// available threshold values in minutes 0-2, 2-3, 5+
const [up, setUp] = React.useState();
const [middle, setMiddle] = React.useState();
const [down, setDown] = React.useState();
function handleUp(){
    setUp(true)
    console.log("threshold is up :" + up)   
}
function handleMiddle(){
    setMiddle(true)
    console.log("middle thresh " + middle)
}
function handleDown(){
    setDown(true)
    console.log("middle thresh " + down)
}


    return (
        <div>
              
            <Dialog fullScreen open={props.open} onClose={props.close} TransitionComponent={Transition}>
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
                <AppBar className={classes.appBar} >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.close} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Cancel Test
                        </Typography>
                        <Button color="inherit" onClick={props.close}>
                            {/** add a reset function */}
                            Go back
                        </Button>
                    </Toolbar>
                </AppBar>
                {/** display list of word here */}
                <Typography variant="h6" className={classes.header}>
                           Expected Words to be Formed
                        </Typography>
                <Paper className={classes.chipRoot}>
                    {
                        wordChip.map(data =>{
                            return (
                                <Chip 
                                    key={data.key}
                                    label={data.label}
                                    onDelete={handleDeleteWordChip(data)}
                                    className={classes.chip}
                                    />
                            )
                        })
                    }
                </Paper>
                <div className={classes.addWordIcon}>
                     <Fab variant="extended" onClick={addWord}> 
                     <AddIcon />
                       Generate New words
                    </Fab>
                    </div>
                   {/** stepper section */}
                    <div className={classes.root}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                    <div className={classes.middlePanel}>{getStepContent(index)}</div>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.Nextbtn}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                        </div>
                                    </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                             {activeStep === steps.length && (
                     <Paper square elevation={0} className={classes.resetContainer}>
                <Typography className={classes.testComplete}>Tests complete!</Typography>
        </Paper>
      )}
    </div>       
 </Dialog>
    </div>
    );
}