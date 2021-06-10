function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Yes") {
		correct++;
}
	if (question2 == "Because it keeps us conected and up to date on world events.") {
		correct++;
}	
	if (question3 == "2019 March") {
		correct++;
	}
	if (question4 == "Cloudy") {
		correct++;
	}
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 4;
	}

	if (correct > 0 && correct < 4) {
		score = 1;
	}

	if (correct == 4) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}
