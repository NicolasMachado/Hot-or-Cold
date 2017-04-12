import {RESET_GAME, GUESS_SUBMIT} from '../actions';

const initialState = {
    numberToGuess: Math.round(Math.random()*100),
    guessHistory: [],
    numberAttempts: 50,
    message: 'Make your guess!',
    won: false
};

export const appReducer = (state=initialState, action) => {

    if (action.type === RESET_GAME) {
        return Object.assign({}, state, Object.assign(
            {},
            initialState,
            {numberToGuess: Math.round(Math.random()*100)}
        ));
    }

    if (action.type === GUESS_SUBMIT) {
        const number = action.guessed;
        const checkValidity = isValid(number, state);
        console.log(state);
        console.log(action);

        if (checkValidity === true) {
            console.log('YUP')

        } else {
            console.log(checkValidity)
        }
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
