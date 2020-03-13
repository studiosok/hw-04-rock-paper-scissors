$(() => {

  let currentHumanScore = 0
  let currentBotScore = 0
  let currentHumanRoundScore = 0
  let currentBotRoundScore = 0
  let userChoiceTally = 0
  let botChoiceTally = 0
  let botWord
  let userChoice
  //not generate bot choice until button is clicked
  //listen for a button click, then generate bot choice and compare to user choice
  $('button').click(() => {

      $('#paper').click(() => {
        userChoice = 1
        return userChoice
      })
      $('#rock').click(() => {
        userChoice = 2
        return userChoice
      })
      $('#scissors').click(() => {
        userChoice = 3
        return userChoice
      })

    let botChoice = Math.floor(Math.random()* 3) + 1

    function sayBotChoice() {
      if(botChoice === 1) {
        botWord = 'Paper'
      } else if(botChoice === 2) {
        botWord = 'Rock'
      } else {
        botWord = 'Scissors'
      }
    }

  function compare() {
    console.log(botChoice)
    console.log(userChoice)
    if(userChoice === botChoice) {
      tieHand()
    } else if((userChoice === 1 && botChoice === 2) || (userChoice === 2 && botChoice === 3) || (userChoice === 3 && botChoice === 1)){
      sayBotChoice()
      userWinsHand()
      userChoiceTally = userChoiceTally += 1
    } else {
      sayBotChoice()
      botWinsHand()
      botChoiceTally = botChoiceTally += 1
    }
  }
  compare()

  })

  function userWinsHand() {
    messageUpdate(`you won, bot chose ${botWord}`)
    $('#humanScore').text(currentHumanScore = currentHumanScore + 1)
    checkForBonus()
    if(currentHumanScore >= 10) {
      messageUpdate('You won this round, keep going!')
      $('#humanRoundScore').text(currentHumanRoundScore = currentHumanRoundScore + 1)
      resetHandScore()
    }
    if(currentHumanRoundScore === 2) {
      messageUpdate('You won this game!')
      // enableWinnerFace()
      resetGame()
     // end game and reset everything. fireworks for extra extra
    }

  }

  function botWinsHand() {
    messageUpdate(`you lost, bot won and chose ${botWord}`)
    $('#computerScore').text(currentBotScore = currentBotScore + 1)
    checkForBonus()
    if(currentBotScore >= 10) {
      messageUpdate('Bot won this round, keep going to catch up!')
        $('#botRoundScore').text(currentBotRoundScore = currentBotRoundScore + 1)
        resetHandScore()
    }
    if(currentBotRoundScore === 2) {
      messageUpdate('Bot won this game, better guessing next time')
      // enableLoserFace()
      resetGame()
    // // end game and reset everything. frowny face for extra extra
    }
  }

  function tieHand() {
    messageUpdate('Tie hand, go again')
  }

  function messageUpdate(message) {
    $('#status').text(message)
  }

  function resetHandScore() {
    $('#humanScore').text(currentHumanScore = 0)
    $('#computerScore').text(currentBotScore = 0)
  }

  function resetRoundScore() {
    $('#humanRoundScore').text(currentHumanRoundScore = 0)
    $('#botRoundScore').text(currentBotRoundScore = 0)
  }

  function resetGame() {
    resetHandScore()
    resetRoundScore()
  }

function checkForBonus() {
  if(userChoiceTally === 3) {
    $('#humanScore').text(currentHumanScore = currentHumanScore + 2)
    messageUpdate('You won 3 hands in a row! + 2 points')
    resetChoiceTally()
  } else if (botChoiceTally === 3) {
    $('#computerScore').text(currentBotScore = currentBotScore + 2)
    messageUpdate('bot won 3 hands in a row and got + 2 points')
    resetChoiceTally()
  }
}

function resetChoiceTally() {
  if((userChoiceTally === 3) || (botChoiceTally === 3)) {
    userChoiceTally = 0
    botChoiceTally = 0
  }
}

// function displayWinnerFace() {
// $('#winContainer').click(() => {
//   toggle()
// })
// }
  //
  // function displayLoserFace() {
  //   $('loserFace').
  // }
  //
  // function displayWinnerFace() {
  //   $('winnerFace').
  // }



/*

Issue: bot always wins first hand, and botWord is undefined

X user input (assign numbers to r/p/s)
X computer input (random generation - assign numbers to r/p/s)

X connect r/p/s button to front end button - .click event

X compare user click to computer input

X calculate winner

X adjust scoreboard to reflect winner score increase

X display message to say who won

clean up code - combine things that do same things, adjust similar variables

X bonus - 1st to 10 winner of that round
  check score, if 10 display who won the round, reset scores to 0 *need to keep track of roundWinner value
X bonus 2 - 1st winner of 2 rounds winner of game
check value of roundWinner; if 2, display winner of game
X bonus 3 - winning 3 hands in a row results in 2 bonus points
keep track of wins for user and bot, if 3 consecutive wins, add bonus *need to keep track of handWinner value
X bonus 4 - display what bot chose

clean up code - combine things that do same things, adjust similar variables

*/
})
