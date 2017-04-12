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
        return Object.assign({}, state, Object.assign(
            {},
            initialState,
            {numberToGuess: Math.round(Math.random()*100)}
        ));
    }
    if (action.type === GUESS_SUBMIT) {
        console.log('GUESS')
    }
    return state;
};
