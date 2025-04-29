function play(userChoice) {
    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
  
    let result = '';
  
    if (userChoice === computerChoice) {
      result = "It's a draw!";
    } else if (
      (userChoice === 'stone' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'stone') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win! 🎉";
    } else {
      result = "You lose! 😢";
    }
  
    document.getElementById('game-result').textContent = result;
  }
  