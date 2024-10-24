// TODO: https://tech-docs.corndel.com/js/arrow-functions.html

/**
 * Play a game of rock-paper-scissors.
 *
 * @param {'rock' | 'paper' | 'scissors'} choice1 The choice of player 1.
 * @param {'rock' | 'paper' | 'scissors'} choice2 The choice of player 2.
 * @returns {'player1' | 'player2' | 'tie'} The result of the game.
 */
export const rockPaperScissors =
  (choice1,choice2) => {
    if (choice1 == choice2){
      return 'tie'
    }

    if (choice1 == 'rock'){
      if (choice2 == 'scissors'){
        return 'player1'
    }
  }

    if (choice1 == 'paper'){
      if (choice2 == 'rock'){
        return 'player1'
    }
  }
      

    if (choice1 == 'scissors'){
      if (choice2 == 'paper'){
        return 'player1'
    }
  }

  return 'player2'
}
  



    // TODO: if player1 wins, return 'player1'
    // TODO: if player2 wins, return 'player2'
    // TODO: if tie, return 'tie'
  
