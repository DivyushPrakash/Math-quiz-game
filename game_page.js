var player1name=localStorage.getItem("player1namekey");
var player2name=localStorage.getItem("player2namekey");
var player1score=0;
var player2score=0;
var questionturn="player1";
var answerturn="player2";

document.getElementById("player1name").innerHTML=player1name+": ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2name").innerHTML=player2name+": ";
document.getElementById("player2score").innerHTML=player2score;

function send(){
    var no1=document.getElementById("no1input").value;
    var no2=document.getElementById("no2input").value;
    var actual_answer=parseInt(no1) * parseInt(no2);

 
var question_problem= "<h4> Q. "+no1+"x"+no2+ "</h4>";
var answerinput='<br><input type="text" id="answerinput" placeholder="Enter answer here">';
var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

var merge=question_problem+answerinput+check_button;
document.getElementById("output").innerHTML=merge;
document.getElementById("no1input").innerHTML="";
document.getElementById("no2input").innerHTML="";
}

function check(){
var answer=document.getElementById("answerinput").value;
console.log(answer);


    

if(questionturn=="player1"){
    questionturn="player2";
    document.getElementById("questionturnplayer").innerHTML=player2name;
}


if(questionturn=="player2"){
    questionturn="player1";
    document.getElementById("questionturnplayer").innerHTML=player1name;
}


if(answerturn=="player1"){
    answerturn="player2";
    document.getElementById("answerturnplayer").innerHTML=player2name;
}


if(answerturn=="player2"){
    answerturn="player1";
    document.getElementById("answerturnplayer").innerHTML=player1name;
}


if(answer== actual_answer){

    if(answerturn=="player1"){
      player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;
    }

    if(answerturn=="player2"){
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;
    }
}
document.getElementById("output").innerHTML="";
}