function generateCat(){
    var image = document.createElement("img");
    image.src="https://cdn2.thecatapi.com/images/5tg.gif";
    document.getElementById("flex-cat-gen").appendChild(image);
}
function rpsGame(yourChoice){
    var humanChoice ,botChoice;
    humanChoice =yourChoice.id;
    botChoice=numberToChoice(randToRpsInt());
    results=decideWinner(humanChoice,botChoice);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(humanChoice,botChoice){
    var rpsDatabas={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    };
    var yourScore = rpsDatabas[humanChoice][botChoice];
    var computerScore = rpsDatabas[botChoice][humanChoice];
    return[yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return {'message':'You Lost','color':'red'};
    }else if (yourScore===0.5){
        return {'message':'You drew','color':'yellow'};
    }else {
        return {'message':'You Won','color':'yellow'};
    }

}
function rpsFrontEnd(humanChoice,botChoice,message){
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv= document.createElement('div');
    var botDiv= document.createElement('div');
    var messageDiv= document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50, 233, 1);'>"
    botDiv.innerHTML="<img src='" + imagesDatabase[botChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50, 233, 1);'>"
    messageDiv.innerHTML ="<h1 style='color:" + message['color'] +"; font-size: 60px; padding: 30px;'>" +message['message'] + "</h1>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}
var all_buttons= document.getElementsByTagName('button');
console.log(all_buttons);

copyAllButtons=[];
for (let i=0;all_buttons.length>i;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThing){
    if (buttonThing.value === 'red'){
        buttonRed();
    } else if (buttonThing.value === 'green'){
        buttonGreen();
    } else if (buttonThing.value === 'reset'){
        buttonReset();
    } else if (buttonThing.value === 'random'){
        buttonRandom();
    }
}
function buttonRed(){
    for(let i=0;all_buttons.length>i;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=0;all_buttons.length>i;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonReset(){
    for(let i=0;all_buttons.length>i;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
 function buttonRandom(){
     var choices=['btn-primary','btn-success','btn-warning','btn-danger']
    for(let i=0;all_buttons.length>i;i++){
        var random =Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[random]);
    }
 }

 function autoRefresh() {
    window.location = window.location.href;
}