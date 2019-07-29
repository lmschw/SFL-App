import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';


const useStyles = makeStyles(theme => ({
    root: {
      width: '99%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    btnBelowSelectables: {
      marginTop:theme.spacing(2),
    },
    chipComponent: {
      marginTop:theme.spacing(-2.5),
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    paperForTestSelection: {
      textAlign: 'center',
      color:'#283593',
      alignItems:'center',
      justify:'center',
      margin:'auto',
      fontWeight:'800',
      background:'#E8EAF6',
      fontSize:'20px',
      padding:theme.spacing(8),
      '&:hover': {
                background: '#283593',
                color:'white',
               
             },
    },
     
    mainGridForSelectTestMode:{
            marginTop: theme.spacing(1),
    },
    paperForSelectAgeGroup: {
      textAlign: 'center',
      color:'#283593',
      alignItems:'center',
      justify:'center',
      margin:'auto',
      fontWeight:'800',
      background:'#E8EAF6',
      fontSize:'30px',
      padding:theme.spacing(8),
      '&:hover': {
                background: '#283593',
                color:'white',
             },
    },
     
    mainGridForSelectAge:{
            marginTop: theme.spacing(8),
    },
   
    chip: {
      
      margin: theme.spacing(1),
    },

  }));

  function getSteps() {
    return ['Select Age Group', 'Select Test Mode'];
  }
  

  export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    /** states */
    const [activeStep, setActiveStep] = React.useState(0);
   
    

    const steps = getSteps();
  
/** states tp manage the selections made by user */
/** age  4 - 5 */
    const [ageGroup4_5Status, setAgeGroup4_5Status] = React.useState(false);
    const [chipData4_5, setChipData4_5] = React.useState(false)
/** age  6 - 8 */
    const [ageGroup6_8Status, setAgeGroup6_8Status] = React.useState(false);
    const [chipData6_8, setChipData6_8] = React.useState(false)
/** age  9 - 12 */
    const [ageGroup9_12Status, setAgeGroup9_12Status] = React.useState(false);
    const [chipData9_12, setChipData9_12] = React.useState(false)
/** full test */
    const [fullTestStatus, setFullTestStatus]= React.useState(false);
    const [chipDataFullTest, setChipFullTest] = React.useState(false);
/** letter only test */
    const [lettersTestStatus, setLetterOnlyStatus]= React.useState(false);
    const [chipDataLetterOnly, setChipLettersOnly] = React.useState(false);
/** words only test */
    const [wordsOnlyStatus, setWordsOnlyStatus] = React.useState(false);
    const [chipDataWordsOnly, setChipWordsOnly] = React.useState(false);
/** numbers only test */
    const [numberssOnlyStatus, setNumbersOnlyStatus] = React.useState(false);
    const [chipDataNumbersOnly, setChipNumbersOnly] = React.useState(false);


/** ensure user cannot make more than one selection */
/** handle test mode selection modal */
function handleSelectionModeFullTest(){
  setFullTestStatus(!fullTestStatus)
  setChipFullTest(!chipDataFullTest) 
  setLetterOnlyStatus(false)
  setChipLettersOnly(false)
  setNumbersOnlyStatus(false)
  setChipNumbersOnly(false)
  setWordsOnlyStatus(false)
  setChipWordsOnly(false)
}
function handleFullTestChip(){
  setFullTestStatus(!fullTestStatus)
  setChipFullTest(!chipDataFullTest) 
}

function handleSelectionModeLettersOnly(){
  setFullTestStatus(false)
  setChipFullTest(false) 
  setLetterOnlyStatus(!lettersTestStatus)
  setChipLettersOnly(!chipDataLetterOnly)
  setNumbersOnlyStatus(false)
  setChipNumbersOnly(false)
  setWordsOnlyStatus(false)
  setChipWordsOnly(false)
}
function handleLetterOnlyChip(){
  setLetterOnlyStatus(!lettersTestStatus)
  setChipLettersOnly(!chipDataLetterOnly) 
}
function handleSelectionModeWordOnly(){
  setFullTestStatus(false)
  setChipFullTest(false) 
  setLetterOnlyStatus(false)
  setChipLettersOnly(false)
  setNumbersOnlyStatus(false)
  setChipNumbersOnly(false)
  setWordsOnlyStatus(!wordsOnlyStatus)
  setChipWordsOnly(!chipDataWordsOnly)
}
function handleWordOnlyChip(){
  setWordsOnlyStatus(!wordsOnlyStatus)
  setChipWordsOnly(!chipDataWordsOnly) 
}
function handleSelectionModeNumbersOnly(){
  setFullTestStatus(false)
  setChipFullTest(false) 
  setLetterOnlyStatus(false)
  setChipLettersOnly(false)
  setNumbersOnlyStatus(!numberssOnlyStatus)
  setChipNumbersOnly(!chipDataNumbersOnly)
  setWordsOnlyStatus(false)
  setChipWordsOnly(false)
}
function handleNumberOnlyChip(){
  setNumbersOnlyStatus(!numberssOnlyStatus)
  setChipNumbersOnly(!chipDataNumbersOnly) 
}
/**----------------------------------------------------------------------------------- */
/** handle setAgeGroup___Status */
function handleSetAgeGroup4_5Status(){
    setAgeGroup4_5Status(!ageGroup4_5Status)
    setChipData4_5(!chipData4_5) 
    setAgeGroup6_8Status(false)
    setChipData6_8(false) 
    setAgeGroup9_12Status(false)
    setChipData9_12(false) 
}
/** chip component */
function handleDelete4_5(){
    setAgeGroup4_5Status(!ageGroup4_5Status)
    setChipData4_5(!chipData4_5) 
}

/** handle setAgeGroup___Status */
function handleSetAgeGroup6_8Status(){
  setAgeGroup6_8Status(!ageGroup6_8Status)
  setChipData6_8(!chipData6_8) 
  setAgeGroup4_5Status(false)
  setChipData4_5(false) 
  setAgeGroup9_12Status(false)
  setChipData9_12(false) 
}
/** chip component */
function handleDelete6_8(){
  setAgeGroup6_8Status(!ageGroup6_8Status)
  setChipData6_8(!chipData6_8) 
}

/** handle setAgeGroup___Status */
function handleSetAgeGroup9_12Status(){
  setAgeGroup9_12Status(!ageGroup9_12Status)
  setChipData9_12(!chipData9_12) 
  setAgeGroup4_5Status(false)
  setChipData4_5(false) 
  setAgeGroup6_8Status(false)
  setChipData6_8(false) 
}
/** chip component */
function handleDelete9_12(){
  setAgeGroup9_12Status(!ageGroup9_12Status)
  setChipData9_12(!chipData9_12) 
}

/** handle selection mode */
/** handle setAgeGroup___Status */



/** function return test mode selection stepper */
function SelectTestMode(){
  return (
        <React.Fragment>
          
          <Grid className={classes.mainGridForSelectTestMode} spacing={3}
                container
                direction="row"
                justify="center"
                alignItems="center">    
                    <Grid item xs={12} sm={3}> 
                        <Paper className={classes.paperForTestSelection}
                        onClick={handleSelectionModeFullTest}
                        > FULL TEST </Paper>
                        </Grid>
                    <Grid item xs={12} sm={3} > 
                        <Paper className={classes.paperForTestSelection}
                        onClick={handleSelectionModeLettersOnly}
                        >LETTERS ONLY</Paper>
                    </Grid>
                </Grid>


                <Grid className={classes.mainGridForSelectTestMode} spacing={3}
                container
                direction="row"
                justify="center"
                alignItems="center">    
                    <Grid item xs={12} sm={3} > 
                        <Paper className={classes.paperForTestSelection}
                        onClick={handleSelectionModeNumbersOnly}
                        >NUMBERS ONLY</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} > 
                        <Paper className={classes.paperForTestSelection}
                        onClick={handleSelectionModeWordOnly}
                        >WORDS ONLY</Paper>
                    </Grid>
                </Grid>
         

        </React.Fragment>
  );
}
/** function return age group selection stepper */
function SelectAgeGroup(){
  return (
    <React.Fragment>
          <Grid className={classes.mainGridForSelectAge} spacing={3}
                container
                direction="row"
                justify="center"
                alignItems="center">    
                    <Grid item xs={12} sm={3}> 
                        <Paper 
                        className={classes.paperForSelectAgeGroup} 
                        onClick ={handleSetAgeGroup4_5Status}
                        
                        > 4 - 5
                       </Paper>
                        </Grid>
                    <Grid item xs={12} sm={3} > 
                        <Paper className={classes.paperForSelectAgeGroup}
                          onClick={handleSetAgeGroup6_8Status}
                        >  6 - 8</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} > 
                        <Paper
                         className={classes.paperForSelectAgeGroup}
                         onClick={handleSetAgeGroup9_12Status}
                         >9 - 12 </Paper>
                    </Grid>
                </Grid>
    </React.Fragment>
  )
}
  /** function returns different select for user to select from*/
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
            <div><SelectAgeGroup /></div>);
      case 1:
        return (<div><SelectTestMode /></div>)
      default:
        return 'Uknown stepIndex';
    }
  }
  

    function handleNext() {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  
    function handleBack() {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  
    function handleReset() {
      setActiveStep(0);
      /** reset all selection to false */
      setFullTestStatus(false)
      setChipFullTest(false) 
      setLetterOnlyStatus(false)
      setChipLettersOnly(false)
      setNumbersOnlyStatus(false)
      setChipNumbersOnly(false)
      setWordsOnlyStatus(false)
      setChipWordsOnly(false)
      setAgeGroup9_12Status(false)
      setChipData9_12(false) 
      setAgeGroup4_5Status(false)
      setChipData4_5(false) 
      setAgeGroup6_8Status(false)
      setChipData6_8(false) 
    }
  
    return (
      <div className={classes.root}>
          
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className={classes.chipComponent}>
                       {ageGroup4_5Status && <Chip
                              onDelete={handleDelete4_5}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="4 - 5"></Chip>
                        }
                         {ageGroup6_8Status && <Chip
                              onDelete={handleDelete6_8}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="6 - 8"></Chip>
                        }
                         {ageGroup9_12Status && <Chip
                              onDelete={handleDelete9_12}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="9 - 12"></Chip>
                        }
                        {/**--------------------------test mode selection----------------------------------------- */}
                        {fullTestStatus && <Chip
                              onDelete={handleFullTestChip}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="FULL TEST ONLY"></Chip>
                        }
                        {wordsOnlyStatus && <Chip
                              onDelete={handleWordOnlyChip}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="WORDS ONLY"></Chip>
                        }
                        {lettersTestStatus && <Chip
                              onDelete={handleLetterOnlyChip}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="LETTERS ONLY"></Chip>
                        }
                        {numberssOnlyStatus && <Chip
                              onDelete={handleNumberOnlyChip}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="NUMBERS ONLY"></Chip>
                        }

        </div>
       
        <div>
          {activeStep === steps.length ? (
            <div className={classes.btnBelowSelectables}>
                <Grid   
                   container
                   direction="row"
                   justify="center"
                   alignItems="center">
              <Button onClick={handleReset}>Reset</Button>
              <Button variant="contained" color="primary">Proceed to Test</Button>
              </Grid>
            </div>
              ) : (
            <div> {getStepContent(activeStep)}

            <div>
                <div className={classes.btnBelowSelectables}>
                  <Grid
                   container
                   direction="row"
                   justify="center"
                   alignItems="center"> 
                      <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}>Back
                      </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Grid>
                
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  