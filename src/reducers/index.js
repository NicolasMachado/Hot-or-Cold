import {RESET_GAME, GUESS_SUBMIT} from '../actions';

const initialState = {
    numberToGuess: Math.round(Math.random()*100),
    guessHistory: [],
    numberAttempts: 0,
    message: 'Make your guess!',
    won: false
};

export const appReducer = (state=initialState, action) => {

    if (action.type === RESET_GAME) {
        return Object.assign({}, state, Object.assign({}, initialState, {numberToGuess: Math.round(Math.random()*100)} ));
    }

    if (action.type === GUESS_SUBMIT) {
        const checkValidity = isValid(action.guessed, state);

        if (checkValidity !== true) {
            return Object.assign({}, state, checkValidity);
        }
        const hotOrCold = HotOrCold(action.guessed, state);
        const history = {
                guessHistory: [...state.guessHistory, action.guessed],
                numberAttempts: state.numberAttempts + 1
            };
        return Object.assign({}, state, hotOrCold, history);
    }

    return state;
};

function isValid(number, state) {
    if (state.won) {
        return {message: 'Please start a new game'}
    }
    if (!number) {
        return {message: 'Please enter a valid number'}
    }
    if (number < 0 || number > 100) {
        return {message: 'The number must be comprised between 0 and 100!'}
    }
    if (state.guessHistory.indexOf(number) > -1) {
        return {message: 'You have already guessed this number!'}
    }
    return true
}


function HotOrCold(number, state) {
    const toGuess = state.numberToGuess;
    if (number > toGuess + 50 || number < toGuess - 50) {
        return {message: 'Freezing cold'}
    } else if (number > toGuess + 35 || number < toGuess - 35) {
        return {message: 'Cold'}
    } else if (number > toGuess + 20 || number < toGuess - 20) {
        return {message: 'Kinda warm'}
    } else if (number > toGuess + 10 || number < toGuess - 10) {
        return {message: 'Warm'}
    } else if (number > toGuess + 5 || number < toGuess - 5) {
        return {message: 'Very warm'}
    } else if (number > toGuess || number < toGuess) {
        return {message: 'Almost there!'}
    } else if (number === toGuess) {
        return {
            message: `Bingo! The number to guess was ${toGuess}!`,
            won: true
        };
    }
}
