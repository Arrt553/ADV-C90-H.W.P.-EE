player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : " ;
document.getElementById("player2_name").innerHTML = player2_name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

function send(){
	var get_number1 = document.getElementById("1input").value;
    var get_number2 = document.getElementById("2input").value;
	console.log(get_number1);
    console.log(get_number2);

    var number = get_number1 + "X" + get_number2;

	question_word = "<h4 id='word_display'>Q. " + number +"</h4>";
	input_box = "<br>Answer: <input type='text' id='input_check_box'>";
	check_button = "<br><br><button class='btn btn-primary' onclick=Check()>Check</button>";
	row = question_word + input_box + check_button;
	document.getElementById("output").innerHTML = row;
	document.getElementById("1input").innerHTML = "";
    document.getElementById("2input").innerHTML = "";	
}

var question_turn = "player_1";
var answer_turn = "player_2";


function Check(){
	var get_number1 = document.getElementById("1input").value;
    var get_number2 = document.getElementById("2input").value;
	console.log(get_number2);
	console.log(get_number1);
	get_answer = document.getElementById("input_check_box").value;
	console.log(get_answer);

	if(get_answer == get_number1 * get_number2){
		if(answer_turn == "player_1" ){
			player1_score = player1_score + 1;
			document.getElementById("player1_score").innerHTML = player1_score; 
		}
		else{
			player2_score = player2_score + 1;
			document.getElementById("player2_score").innerHTML = player2_score;
		}
	}

	if(question_turn == "player_1"){
		question_turn = "player_2";
		document.getElementById("player_question").innerHTML = "question turn- " + player2_name;
	}
	else{
		question_turn = "player_1";
		document.getElementById("player_question").innerHTML = "question turn- " + player1_name;
	}
	if(answer_turn == "player_2"){
		answer_turn = "player_1";
		document.getElementById("player_answer").innerHTML = "answer turn- " + player1_name;
	}
	else{
		answer_turn = "player_2";
		document.getElementById("player_answer").innerHTML = "answer turn- " + player2_name; 
	}
	document.getElementById("output").innerHTML = "";
}
