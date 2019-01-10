import shuffle from 'lodash.shuffle';
import fontAwesomeClass from './fontAwesome';

const numberLetter = 20;

export default ()=>{
    const fontAwesome = fontAwesomeClass();
    let letters = [];
    while(letters.length<numberLetter){
        const index = Math.floor(Math.random()*fontAwesome.length);
        const letter = {
            icon : fontAwesome.splice(index,1)[0],
            guessed : false
        }
        letters.push(letter);
        letters.push({...letter});
    }

    return shuffle(letters);

}