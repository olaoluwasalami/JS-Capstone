const selectQuestions = qAndA.sort(function () { return (Math.random() - Math.random()) }).slice(0, 5);
let score = 0;
let questionIndex = 0;

const gradeQuestion = (ans) => {
  // get value on selected option 
  // check if correct
  // add mark to score
  if (ans == selectQuestions[questionIndex].answer) {
    score += 20;
  }
  // increament questionIndex by 1 questionIndex ++
  questionIndex += 1;
};

const renderSuccess = () => {
    $('.question-number').text('');
  $('.question-question').text('');
  $('.option1').text('');
  $('.option2').text('');
  $('.option3').text('');
  $('.option4').text('');
  if (score >= 50) {
    $('<p>You are God of Football!</p>').appendTo('.question-question');
    $('<img src="https://media.giphy.com/media/xT8qBoFt9PszavNyeI/giphy.gif">').appendTo('.question-options');
  } else {
    $('<p>you can do better!</p>').appendTo('.question-question');
    $('<img src="https://media.giphy.com/media/uO8Mn35ytbHm8/giphy.gif">').appendTo('.question-options');
  }


}

// call function to render question (questionIndex)
const renderQuestion = (qIndex) => {
  let question = selectQuestions[qIndex];
  // get question number and populate qith question number
  $('.question-number').text('');
  $('.question-question').text('');
  $('.option1').text('');
  $('.option2').text('');
  $('.option3').text('');
  $('.option4').text('');
  $('.question-number').text('Question ' + (qIndex + 1));
  // get question-question and populate with quesion
  $('.question-question').text(question.question);
  // get question-options and populate with options as radio
  question.options.forEach((element, i) => {
    let opt = '.option' + (i + 1);
    let radioBut = $('<input type="radio" name="answer" value=' + element + ' />');
    let radioLabel = $('<label for=' + element + ' >' + element + ' </label>');
    radioBut.appendTo(opt);
    radioLabel.appendTo(opt);
  });
  $(".question-options input:radio[name='answer']").click(function () {
    if (questionIndex == (selectQuestions.length - 1)) {
      gradeQuestion(this.value)
      renderSuccess()
    } else {
      gradeQuestion(this.value)
      renderQuestion(questionIndex)
    }
  });
};

// on click on options run function gradeQuestion(e)


$(document).ready(function () {
  renderQuestion(questionIndex);
});