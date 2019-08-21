import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import TextField from '@material-ui/core/TextField';
import LetterOnlyDialog from './LettersOnly';

const useStyles = makeStyles(theme => ({
    root: {
      width: '99%',
    },
    textRoot:{
      display: 'flex',
      flexWrap: 'wrap',
    },
    TextFieldmargin: {
      margin: theme.spacing(1),
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
                background:'#283593',
                color:'white',
             },
    },
    mainGridForSelectTestMode:{
            marginTop: theme.spacing(1),
            paddingLeft:'30px',
            paddingRight:'30px',
    },
    paperForSelectAgeGroup: {
      textAlign: 'center',
      color:'#283593',
      alignItems:'center',
      justify:'center',
      margin:'auto',
      fontWeight:'800',
      background:'#E8EAF6',
      fontSize:'20px',
      padding:theme.spacing(4),
      '&:hover': {
                background: '#283593',
                color:'white',
             },
    },
    mainGridForSelectAge:{
            marginTop: theme.spacing(5),
            paddingLeft:'10%',
            paddingRight:'10%',
    },
    gridForCandidatename:{
      marginTop: theme.spacing(8),
    },
    chip: {
      margin: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    mainGridContainer:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
     
    }

  }));

  function getSteps() {
    return ['Select Age Group', 'Select Test Mode',`Enter Candidate's Full Name`];
  }
  

  export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    /** states */
    const [activeStep, setActiveStep] = React.useState(0);
   
    /** function creates input field for candidates full name */
    const ValidationTextField = withStyles({
      root: {
        '& input:valid + fieldset': {
          borderColor: 'green',
          borderWidth: 2,
        },
        '& input:invalid + fieldset': {
          borderColor: 'red',
          borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
          borderLeftWidth: 6,
          padding: '4px !important', // override inline-style
        },
      },
    })(TextField);
    

    const steps = getSteps();
  
/** states tp manage the selections made by user */
/** age  5 - 6 */
    const [ageGroup5_6Status, setageGroup5_6Status] = React.useState(false);
    const [chipData5_6, setchipData5_6] = React.useState(false)
/** age  7 - 8 */
    const [ageGroup7_8Status, setageGroup7_8Status] = React.useState(false);
    const [chipData7_8, setchipData7_8] = React.useState(false)
/** age  9 - 10 */
    const [ageGroup9_10Status, setageGroup9_10Status] = React.useState(false);
    const [chipData9_10, setchipData9_10] = React.useState(false)
/** age  11 - 12 */
    const [ageGroup11_12Status, setageGroup11_12Status] = React.useState(false);
    const [chipData11_12, setchipData11_12] = React.useState(false)
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
function handleSetageGroup5_6Status(){
    setageGroup5_6Status(!ageGroup5_6Status)
    setchipData5_6(!chipData5_6) 
    setageGroup7_8Status(false)
    setchipData7_8(false) 
    setageGroup9_10Status(false)
    setchipData9_10(false) 
    setageGroup11_12Status(false)
    setchipData11_12(false)
}
/** chip component */
function handleDelete5_6(){
    setageGroup5_6Status(!ageGroup5_6Status)
    setchipData5_6(!chipData5_6) 
}

/** handle setAgeGroup___Status */
function handleSetageGroup7_8Status(){
  setageGroup7_8Status(!ageGroup7_8Status)
  setchipData7_8(!chipData7_8) 
  setageGroup5_6Status(false)
  setchipData5_6(false) 
  setageGroup9_10Status(false)
  setchipData9_10(false) 
  setageGroup11_12Status(false)
  setchipData11_12(false)
}
/** chip component */
function handleDelete7_8(){
  setageGroup7_8Status(!ageGroup7_8Status)
  setchipData7_8(!chipData7_8) 
}

/** handle setAgeGroup___Status */
function handleSetageGroup9_10Status(){
  setageGroup9_10Status(!ageGroup9_10Status)
  setchipData9_10(!chipData9_10) 
  setageGroup5_6Status(false)
  setchipData5_6(false) 
  setageGroup7_8Status(false)
  setchipData7_8(false) 
  setchipData11_12(false)
  setageGroup11_12Status(false)
}
/** chip component */
function handleDelete9_10(){
  setageGroup9_10Status(!ageGroup9_10Status)
  setchipData9_10(!chipData9_10) 
}


/** handle setAgeGroup___Status */
function handleSetageGroup11_12Status(){
  setageGroup9_10Status(false)
  setchipData9_10(false) 
  setageGroup5_6Status(false)
  setchipData5_6(false) 
  setageGroup7_8Status(false)
  setchipData7_8(false) 
  setchipData11_12(!chipData11_12)
  setageGroup11_12Status(!ageGroup11_12Status)
}
/** chip component */
function handleDelete11_12(){
  setageGroup11_12Status(!ageGroup11_12Status)
  setchipData11_12(!chipData11_12) 
}
/** handle selection mode */



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
      <div className={classes.mainGridContainer}> 
          <Grid className={classes.mainGridForSelectAge} spacing={1}
                container
                direction="row"
                justify="center"
                alignItems="center">    
                    <Grid item xs={12} sm={3}> 
                        <Paper 
                        className={classes.paperForSelectAgeGroup} 
                        onClick ={handleSetageGroup5_6Status}
                        > 5 - 6
                       </Paper>
                        </Grid>
                    <Grid item xs={12} sm={3} > 
                        <Paper className={classes.paperForSelectAgeGroup}
                          onClick={handleSetageGroup7_8Status}
                        >  7 - 8</Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} > 
                        <Paper
                         className={classes.paperForSelectAgeGroup}
                         onClick={handleSetageGroup9_10Status}
                         >9 - 10 </Paper>
                    </Grid>
                     <Grid item xs={12} sm={3} > 
                        <Paper
                         className={classes.paperForSelectAgeGroup}
                         onClick={handleSetageGroup11_12Status}
                         >11 - 12 </Paper>
                    </Grid>
           </Grid>
        </div>
    </React.Fragment>
  )
}
/** input field to enter childs full name */
function EnterChilddName(){
  return (
          <Grid className={classes.gridForCandidatename}
                container
                direction="row"
                justify="center"
                alignItems="center">    
                      <form className={classes.textRoot} noValidate>
                      <ValidationTextField
                        className={classes.TextFieldmargin}
                        label="FirstName"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                      />
                       <ValidationTextField
                        className={classes.TextFieldmargin}
                        label="LastName"
                        required
                        variant="outlined"
                        id="validation-outlined-input"
                      />
                   </form>
                </Grid>
  );
}
  /** function returns different select for user to select from*/
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
            <div><SelectAgeGroup /></div>);
      case 1:
        return (<div><SelectTestMode /></div>);
      case 2:
        return (<div><EnterChilddName /></div> );
      default:
        return 'Unknown stepIndex';
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
      setageGroup9_10Status(false)
      setchipData9_10(false) 
      setageGroup5_6Status(false)
      setchipData5_6(false) 
      setageGroup7_8Status(false)
      setchipData7_8(false) 
      setageGroup11_12Status(false)
      setchipData11_12(false)
    }
  
    /** function handles the button proceed to test
     *  based on user selection function handles what test dialog is opened
     *  4 different dialogs determined by two selections made from age group and test mode
     */
    const [openLetterOnlyDialog, SetOpenLetterOnlyDialog] = React.useState(false)
     function handleProceedToTest(){
       if(lettersTestStatus === true){
          SetOpenLetterOnlyDialog(true);
          console.log( `letters only clicked`);
     }
     handleSelectedAge();
    }
     function handleCloseLettersOnlyDialog(){
      SetOpenLetterOnlyDialog(false);
    }

    //we need to pass the selected age as props to selected type of test
    const [selectedAgeGroup, setSelectedAgeGroup] = React.useState("");
    function handleSelectedAge(){
      if(ageGroup5_6Status === true){
        setSelectedAgeGroup("5-6")
      }
      if(ageGroup7_8Status === true){
        setSelectedAgeGroup("7-8")
      }
      if(ageGroup9_10Status === true){
        setSelectedAgeGroup("9-10")
      }
      if(ageGroup11_12Status === true){
        setSelectedAgeGroup("11-12")
      }
    }
       

    return (
      <div className={classes.root}>
         {/**the test mode to display is dependent on user selection and triggered by proceed to test*/}
         <div> {
           <LetterOnlyDialog ageSelected={selectedAgeGroup} open={openLetterOnlyDialog} close={handleCloseLettersOnlyDialog}/>

         }</div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className={classes.chipComponent}>
                       {ageGroup5_6Status && <Chip
                              onDelete={handleDelete5_6}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="5 - 6"></Chip>
                        }
                         {ageGroup7_8Status && <Chip
                              onDelete={handleDelete7_8}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="7 - 8"></Chip>
                        }
                         {ageGroup9_10Status && <Chip
                              onDelete={handleDelete9_10}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="9 - 10"></Chip>
                        }
                         {ageGroup11_12Status && <Chip
                              onDelete={handleDelete11_12}
                              className={classes.chip}
                              color="primary"
                              icon={<FaceIcon />}
                              label="11 - 12"></Chip>
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
                <Grid  className = {classes.mainGridForSelectAge}
                   container
                   direction="row"
                   justify="center"
                   alignItems="center">
              <Button onClick={handleReset}>Reset</Button>
              <Button variant="contained" color="primary" onClick={handleProceedToTest}>Proceed to Test</Button>
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
  