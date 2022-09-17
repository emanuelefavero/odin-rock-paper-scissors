function getComputerChoice() {
    const choices = ['rocks', 'paper', 'scissors']
    const randomInt = Math.floor(Math.random() * 3)
    const choice = choices[randomInt]

    return choice
}

function playRound(playerChoice, computerChoice) {
    const playerChoiceFormatted =
        playerChoice === null ? 'none' : playerChoice.toLowerCase()
    const computerChoiceFormatted = computerChoice.toLowerCase()

    // The Game Main Logic
    // Player Winning
    if (
        playerChoiceFormatted != 'rock' &&
        playerChoiceFormatted != 'scissors' &&
        playerChoiceFormatted != 'paper'
    ) {
        return 'Please choose correct words'
    } else {
        if (
            playerChoiceFormatted === 'rock' &&
            computerChoiceFormatted === 'scissors'
        ) {
            return 'You Win! Rock beats Scissors'
        } else if (
            playerChoiceFormatted === 'scissors' &&
            computerChoiceFormatted === 'paper'
        ) {
            return 'You Win! Scissors beats Paper'
        } else if (
            playerChoiceFormatted === 'paper' &&
            computerChoiceFormatted === 'rocks'
        ) {
            return 'You Win! Paper beats Rock'
        }

        // Player Losing
        else if (
            computerChoiceFormatted === 'rock' &&
            playerChoiceFormatted === 'scissors'
        ) {
            return 'You Lose! Rock beats Scissors'
        } else if (
            computerChoiceFormatted === 'scissors' &&
            playerChoiceFormatted === 'paper'
        ) {
            return 'You Lose! Scissors beats Paper'
        } else if (
            computerChoiceFormatted === 'paper' &&
            playerChoiceFormatted === 'rocks'
        ) {
            return 'You Lose! Paper beats Rock'
        } else {
            return `Draw! You both chose ${playerChoiceFormatted}`
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt(
            'Choose between rock, paper, scissors: ',
            'rock'
        )
        const computerChoice = getComputerChoice()
        console.log(playRound(playerChoice, computerChoice))
    }
}

game()
