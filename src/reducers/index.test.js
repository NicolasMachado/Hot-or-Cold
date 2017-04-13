import {appReducer, initialState} from './index';
import {resetGame, guessSubmit} from '../actions';

describe('appReducer', () => {
    // Set up some dummy data
    const guess1 = '20';
    const guess2 = '50';

    it('Should set the initial state when nothing is passed in', () => {
        const state = appReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });
/*
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = trelloReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addList', () => {
        it('Should add new lists', () => {
            let state;
            state = trelloReducer(state, addList(list1Title));
            state = trelloReducer(state, addList(list2Title));
            expect(state).toEqual({
                lists: [list1, list2]
            });
        });
    });


    describe('addCard', () => {
        it('Should add new cards', () => {
            let state = {
                lists: [list1, list2]
            };
            state = trelloReducer(state, addCard(card1Text, 0));
            state = trelloReducer(state, addCard(card2Text, 1));
            state = trelloReducer(state, addCard(card3Text, 1));
            expect(state).toEqual({
                lists: [{
                    title: list1Title,
                    cards: [card1]
                }, {
                    title: list2Title,
                    cards: [card2, card3]
                }]
            });
        });
    });

    describe('fetchBoardSuccess', () => {
        it('Should replace the entire state', () => {
            const board = {
                lists: [list1, list2]
            };
            const state = trelloReducer(undefined, fetchBoardSuccess(board));
            expect(state).toEqual(board);
        });
    });
    */
});
