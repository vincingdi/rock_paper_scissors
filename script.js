function getComputerChoice() {
  // CALL Math.random() and store its value in a variable choice_num
  let choice_num = Math.random();

  // SET choice variable
  let choice;
  //  IF choice_num is less than or equal to 0.5 SET choice to scissors string 
  //  ELSE  SET choice to rock
  choice = choice_num <= 0.5 ? "scissors" : "rock"
  // CALL Math.random() and store its value in a variable choice_num
  choice_num = Math.random();
  // IF choice_num is less than or equal to 0.5 make SET choice to Paper string
  if (choice_num <= 0.5) {
    choice = 'paper'
  }
  // RETURN string
  return choice;
}

function getHumanChoice() {
    // GET user input with a message - You choice - 
    input = prompt("Your choice - ")
    return input;
}


function playGame() {


    let humanScore = 0;
    let computerScore = 0;



    function playRound(humanChoice, computerChoice) {
        humanChoice = String(humanChoice).toLowerCase();
        computerChoice = String(computerChoice).toLowerCase();

        // IF they are equal print It's a draw!
        const container = document.querySelector("#container");
        if (humanChoice == computerChoice) {
            container.textContent = "It's a draw!";
        } else if (humanChoice == "rock" && computerChoice == "scissors"){
            container.textContent = "You win! Rock beats scissors.";
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            container.textContent = "You lose! Rock beats scissors.";
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            container.textContent = "You lose! Scissors beats rock.";
            computerScore++;
       } else if (humanChoice == "scissors" && computerChoice == "paper") {
            container.textContent = "You win! Scissors beats rock.";
            humanScore++
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            container.textContent = "You win! Paper beats rock.";
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            container.textContent = "You lose! Paper beats rock.";
            computerScore++;
        }

        const score = document.createElement("div"); 
        score.textContent = "Computer score: " + computerScore +"\n"+"Human score: " + humanScore +"\n";
        container.appendChild(score);


        const announcement = document.createElement("div");
        
        // ELSE IF human choice is rock and computer is scissors print You win! Rock beats Scissors.
        
        // ELSE IF human choice is scissors and computer choice is rock You Lose! Rock beats scissors.

        // ELSE IF human choice is paper and computer scissors Your Lose! Scissors beats Rock

        //ELSE IF human choice is scissors and computer choice is paper. You win! Scissors beats rock.

        // ELSE IF human choice is  paper and computer choice is rock. You win! Paper beats rock.

        // ELSE IF human choice is rock and computer choice is scissors. You lose! Paper beats rock.
        if (computerScore === 5) {
            announcement.textContent = "Computer won!"
            container.appendChild(announcement);
    
        } else if (humanScore === 5) {
            announcement.textContent = "Human won!";
            container.appendChild(announcement);

        }

    }
    // let i =0;
    // while (i < 5) {
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    //     i++;
    // }

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            playRound(button.id, getComputerChoice());
        });
    });

    

    




}



playGame()