let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let msg = document.querySelector(".msg");

let userScore = 0;
let compScore = 0;

const gencompchoice = () => {
  //generates computers choice
  options = ["rock", "paper", "scissors"];
  randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const draw = () => {
  msg.innerHTML = `Game was Draw, Play again`;
  msg.style.backgroundColor = "#1d3557";
};

const showwinner = (userchoice, userwin, compchoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  let compchoice = gencompchoice();
  //   console.log("compchoice is = ", compchoice);
  if (userchoice === compchoice) {
    draw();
  } else {
    let userwin = true;
    if (userchoice == "rock") {
      //paper scissor
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice == "paper") {
      //scissor rock
      userwin = compchoice == "scissors" ? false : true;
    } else if (userchoice == "scissors") {
      //rock paper
      userwin = compchoice == "rock" ? false : true;
    }
    showwinner(userchoice, userwin, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("userchoice is = ", userchoice);
    playgame(userchoice);
  });
});
