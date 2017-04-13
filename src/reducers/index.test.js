import {appReducer, initialState} from './index';
import {resetGame, guessSubmit} from '../actions';

describe('appReducer', () => {
    const guess1 = '20';

    it('Should set the initial state when nothing is passed in', () => {
        const state = appReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = appReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('resetGame', () => {
        it('Should reset state', () => {
            let state;
            state = appReducer(state, resetGame());
            expect(state.guessHistory).toEqual(initialState.guessHistory);
            expect(state.numberAttempts).toEqual(initialState.numberAttempts);
            expect(state.message).toEqual(initialState.message);
            expect(state.won).toEqual(initialState.won);
        });
    });

    describe('guessSubmit', () => {
        it('Should submit a number', () => {
            let state;
            state = appReducer(state, guessSubmit(guess1));
            expect(state.guessHistory.length).toEqual(initialState.guessHistory.length + 1);
            expect(state.numberAttempts).toEqual(initialState.numberAttempts + 1);
            expect(state.message).not.toEqual(initialState.message);
        });
    });

    describe('guess right number', () => {
        it('Should win the game', () => {
            let state;
            state = appReducer(state, guessSubmit(initialState.numberToGuess));
            expect(state.won).toEqual(true);
            expect(state.guessHistory.length).toEqual(initialState.guessHistory.length + 1);
            expect(state.numberAttempts).toEqual(initialState.numberAttempts + 1);
            expect(state.message).not.toEqual(initialState.message);
        });
    });
});
