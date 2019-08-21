/** number of word to generate */
var noOfWords = 6;
var selected
/** variables */
  var defaultWord;
  var secondWord ;
  var thirdWord ;
  var fourthWord ;
  var fifthWord ;
  var sixthWord ;
 /**word list by difficulty for agegroup 5-6*/
const easylevelWords5_6 = [
      'at','bat','cat','rat','sat','an','can','fan','man','pan','ran','cap','map','nap'
 ]; 
 const mediumLevelWords5_6 = [
     'be','he','me','bee','see','she','we','go','so','do','chat','bar','car','far','cow','how','now'
 ];
 const hardLevelWords5_6 =[
     'fray','gray','play','bake','cake','lake','make','take','ate','date','gate','mate','rate','age'
 ];



// arrays holds generated words
var randomWords = [];

class Randomizer {
    /** getters */
    getDefaultWord(){
        return defaultWord
    }
    getSecondWord(){
        return secondWord;
    }
    getThirdWord(){
        return thirdWord;
    }
    getFourthWord(){
        return fourthWord;
    }
    getFifithWord(){
        return fifthWord;
    }
    getsixthWord(){
        return sixthWord;
    }
    getSelectWord(){
        return selected
    }

// function selects at random
 selectRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
//entry to randomizer
    /**function requires the age group and type of test mode */
    /** Available age groups
      | 5-6 | 7-8 | 9-10 | 11-12 |
     */
    async randomEasy(difficultylevel,ageGroup){
        //AgeGroup = 5-6
        //Level = easy
        if(difficultylevel === "easy" && ageGroup ==="5-6"){
        var shuffled = easylevelWords5_6.sort(function(){return .5 - Math.random()});
        selected = shuffled.slice(0,noOfWords);
        defaultWord = selected[0];
        secondWord = selected[1];
        thirdWord = selected[2];
        fourthWord = selected[3];
        fifthWord = selected[4];
        sixthWord = selected[5]; 
        }
    }

    async randomMedium(difficultylevel,ageGroup){
        //AgeGroup = 7-8
        //Level = medium
        if(difficultylevel === "medium" && ageGroup ==="5-6"){
        var shuffled = mediumLevelWords5_6.sort(function(){return .5 - Math.random()});
        selected = shuffled.slice(0,noOfWords);
        defaultWord = selected[0];
        secondWord = selected[1];
        thirdWord = selected[2];
        fourthWord = selected[3];
        fifthWord = selected[4];
        sixthWord = selected[5];
        }
    }
     randomHard(difficultylevel,ageGroup){
        //AgeGroup = 9-10
        //Level = medium
        if(difficultylevel === "hard" && ageGroup ==="5-6"){
        var shuffled = hardLevelWords5_6.sort(function(){return .5 - Math.random()});
        selected = shuffled.slice(0,noOfWords);
        defaultWord = selected[0];
        secondWord = selected[1];
        thirdWord = selected[2];
        fourthWord = selected[3];
        fifthWord = selected[4];
        sixthWord = selected[5];
        }
    }
}

export default new Randomizer();