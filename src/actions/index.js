export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
    type: RESET_GAME
});

export const GUESS_SUBMIT = 'GUESS_SUBMIT';
export const guessSubmit = (guessed) => ({
    type: GUESS_SUBMIT,
    guessed: guessed
});
