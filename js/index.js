const selectQuestions = qAndA.sort(function () { return (Math.random() - Math.random()) }).slice(0, 5);
let score = 0;
let questionIndex = 0;

const gradeQuestion = (ans) => {
 
  if (ans == selectQuestions[questionIndex].answer) {
    score += 20;
  }
  
  questionIndex += 1;
};


const startQuiz = () => {
   $('.question-number').text('');
  $('.question-question').text('');
  $('.option1').text('');
  $('.option2').text('');
  $('.option3').text('');
  $('.option4').text('');
  $('<p>Do you know Football? Challenge yourself</p>').appendTo('.question-question');
  let start = $('<input type="button" class="test" name="oo"  value="Click here"/>');
  start.appendTo('.question-question');
  $(".question-question input:button[class='test']").click(function () {
    renderQuestion(questionIndex);
   

});
}  

const renderSuccess = () => {
  $('.question-number').text('');
  $('.question-question').text('');
  $('.option1').text('');
  $('.option2').text('');
  $('.option3').text('');
  $('.option4').text('');
  $(`h1`).remove();
   let points = $(`<span class="score" ></span>`);

  if (score >= 50) {
    points.text(`Score : ${score}%`).appendTo('.question-question');
    $('<p>You do know football</p>').appendTo('.question-question');
    $('<img class="animated-gif" src="https://media.giphy.com/media/xT8qBoFt9PszavNyeI/giphy.gif">').appendTo('.question-options');
  } else {
    points.text(`Score: ${score}%`).appendTo('.question-question');
    $( '<p>You can do better!</p>').appendTo('.question-question');
    $('<img class="animated-gif" src="https://media.giphy.com/media/uO8Mn35ytbHm8/giphy.gif">').appendTo('.question-options');
  }


}


const renderQuestion = (qIndex) => {
  let question = selectQuestions[qIndex];
  // get question number and populate with question number
  $('.question-number').text('');
  $('.question-question').text('');
  $('.option1').text('');
  $('.option2').text('');
  $('.option3').text('');
  $('.option4').text('');
   $('.question-number').text('Question ' + (qIndex + 1));
  // get question-question nd populate with quesion
  $('.question-question').text(question.question);
  // get question-options and populate with options as button
  question.options.forEach((element, i) => {
    let opt = '.option' + (i + 1);
    let checkBut = $('<input type="checkbox" name="answer"  value=' + element + ' />');
    let checkLabel = $('<label class="box" for=' +element+ ' >' + element +'</label>');
    checkBut.appendTo(opt);
    checkLabel.appendTo(opt);
  });
  $(".question-options input:checkbox[name='answer']").click(function () {
    if (questionIndex == (selectQuestions.length - 1)) {
      gradeQuestion(this.value)
      renderSuccess()
    } else {
      gradeQuestion(this.value)
      renderQuestion(questionIndex)
    }
  });
};

$(document).ready(function () {
  startQuiz();
});