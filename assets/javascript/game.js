// Team One Declarations
const teamOneButton = document.querySelector('#teamone-shoot-button')

const teamOneShots = document.querySelector('#teamone-numshots')

const teamOneGoals = document.querySelector('#teamone-numgoals')

// Team Two Declarations
const teamTwoButton = document.querySelector('#teamtwo-shoot-button')

const teamTwoShots = document.querySelector('#teamtwo-numshots')

const teamTwoGoals = document.querySelector('#teamtwo-numgoals')

// Reset Button Declarations
const resetButton = document.querySelector('#reset-button')

const numResets = document.querySelector('#num-resets')

// Reset Button Events
{
let count = 0
resetButton.addEventListener('click', function() {
    let oneShots = 0
    let twoShots = 0
    let oneGoals = 0
    let twoGoals = 0
    let x = Math.random()
    // console.log('You clicked the reset button')
    numResets.innerText = (count = count +1)
    teamOneShots.innerText = 0
    teamOneGoals.innerText = 0 
    teamTwoShots.innerText = 0
    teamTwoGoals.innerText = 0

    teamOneButton.addEventListener('click', function() {
        
        // console.log('You clicked the team one button')
        teamOneShots.innerText = (oneShots = oneShots + 1)
        
        let x = Math.random()
        // console.log(x)
        if (x > 0.5) {
            teamOneGoals.innerText = (oneGoals = oneGoals + 1)
        }
    })

    teamTwoButton.addEventListener('click', function() {
        
        // console.log('You clicked the team one button')
        teamTwoShots.innerText = (twoShots = twoShots + 1)
        
        let x = Math.random()
        console.log(x)
        if (x > 0.5) {
            teamTwoGoals.innerText = (twoGoals = twoGoals + 1)}
    })

})
}

// Button One Events

{
    let oneShots = 0
    let oneGoals = 0
    teamOneButton.addEventListener('click', function() {
        
        // console.log('You clicked the team one button')
        teamOneShots.innerText = (oneShots = oneShots + 1)
        
        let x = Math.random()
        // console.log(x)
        if (x > 0.5) {
            teamOneGoals.innerText = (oneGoals = oneGoals + 1)
        } 
    })
}

// Button Two Events

{
    let twoShots = 0
    let twoGoals = 0
    teamTwoButton.addEventListener('click', function() {
        
        // console.log('You clicked the team one button')
        teamTwoShots.innerText = (twoShots = twoShots + 1)
        
        let x = Math.random()
        console.log(x)
        if (x > 0.5) {
            teamTwoGoals.innerText = (twoGoals = twoGoals + 1)}
    })
}
