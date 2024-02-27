let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=document.querySelector("#userchoice");
let comp=document.querySelector("#compchoice");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");



const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
let drawgame = (userchoice,compchoice) => {
    console.log("draw game");
    user.style.visibility = "visible";
   comp.style.visibility = "visible";
   user.textContent="User Choice: "+userchoice;
   comp.textContent="Computer Choice: "+compchoice;
    msg.innerHTML="Game Draw,Play again";
    msg.style.backgroundColor="#081B31";
}

let showwinner=(userwin,userchoice,compchoice)=>{
  
   user.style.visibility = "visible";
   comp.style.visibility = "visible";
   user.textContent="User Choice: "+userchoice;
   comp.textContent="Computer Choice: "+compchoice;
    if(userwin)
    {
        userscore++;
        userscorepara.innerHTML=userscore;
        console.log("user won");
        msg.innerHTML="User Won";
        msg.style.backgroundColor="green";
   }
    else 
    {
        compscore++;
        compscorepara.innerHTML=compscore;
        console.log("computer won");
        msg.innerHTML="Computer Won,User Lost";
        msg.style.backgroundColor="red";
    }
}
const playgame = (userchoice) => {
    console.log("userchoice", userchoice);
    user.innerHTML=userchoice;
    let compchoice = gencompchoice();
    console.log("compchoice", compchoice);
    comp.innerHTML=compchoice;
    if (userchoice === compchoice) {
        drawgame(userchoice,compchoice);
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
       else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors"?false:true;
        }
        else
        {
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice)
    }
}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        let choiceid = choice.getAttribute("id");
        playgame(choiceid);
    })
});