// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


let addExcitement = (theWordArray, punct, num) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp

        // Print buildMeUp to the console
        if ((i + 1) % 3 === 0) {
            buildMeUp += ' ' + theWordArray[i] + punct.repeat(num);
            console.log(buildMeUp);
      
        } else {
            buildMeUp += ' ' + theWordArray[i];
            console.log(buildMeUp);
        
        }

        // buildMeUp += ' ' + theWordArray[i];

        // if((i + 1) % 3 === 0){
        //     buildMeUp += '!';
        // }
        // console.log(buildMeUp);
    }
}

addExcitement(sentence, '?', 2);