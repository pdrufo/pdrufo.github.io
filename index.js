'use strict';

function loadStartPage() {
  $('.quiz-area').html(
    `
     <p class='intro text'>How much do you know about weather in the United States?</p>      
     <div>
      <button type='button' id='startbutton' class='start button'> Start Quiz</button>
     </div>
   `
  );
}

function runTicker(){
  $('.ticker').html(
    `
      <section class='tickers'>
      <span class='question-ticker text'>Question: ${STORE.currentQuestion}/${STORE.quiz.length}</span>
      <span class='score-ticker text'>Score: ${STORE.score}/${STORE.quiz.length}</span>
      </section>
      `
  );
}
function nextQuestion() {
  $('.quiz-area').on('click', '.start', event => {
    event.preventDefault();
    $('.ticker').show();
    if (STORE.currentQuestion < STORE.quiz.length) {
      STORE.currentQuestion++;
      $('.quiz-area').html(renderQuestion());
    }
    else {
      $('.quiz-area').html(renderFinalScore(STORE.score));
    }
  });
}

function renderQuestion() {
  runTicker();
  let q = STORE.quiz[STORE.currentQuestion -1];
  $('.quiz-area').html(
    `
       <div>
       <form id="js-questions" class="question-form">
         <fieldset>
          <div class="question-area">
            <legend> ${q.question}</legend>
          </div>
          
          <div class="answers">
          </div>

          <div>
           <button type = "submit" id="choice" class='button' tabindex="5"> Submit </button>
          </div>
         </fieldset>
      </form>
      </div>
       `
  );
  renderChoices();
}

function renderChoices() {
  let q = STORE.quiz[STORE.currentQuestion -1];
  for(let i=0; i<q.choices.length; i++) {
    $('.answers').append(
      `
        <input type = "radio" name="choices" id="choice${i+1}" value= "${q.choices[i]}" tabindex ="${i+1}" required> 
        <label for="choice${i+1}"> ${q.choices[i]}</label> <br/>
        <span id="js-r${i+1}"></span>
      `
    );
  }
}


function checkAnswer() {
  $('.quiz-area').on('submit', event => {
    event.preventDefault();
    let userClick = $('input:checked').val();
    let currentQ = STORE.quiz[STORE.currentQuestion - 1];
    let correctAnswer = currentQ.correct;
    if (userClick === correctAnswer){
      STORE.score++;
      runTicker();
      renderCorrect();
    }
    else {
      renderIncorrect(correctAnswer);
    }
  });
}

function renderCorrect() {
  $('.quiz-area').html(
    `
      <h2>Correct!!!</h2>
      <div class='response-box'>
      <video loop autoplay class='videos'> <source src="images/sun.mp4" type="video/mp4">
      </div>
      <div>
      <p class='text'>Keep up the good work</p>
      <button class='start button'>Next</button>
      </div>
    `
  );
}

function renderIncorrect(correct) {
  $('.quiz-area').html(
    `
    <h2>Wrong Answer</h2>
    <div class='response-box'>
      <video loop autoplay class='videos'> <source src="images/lightning.mp4" type="video/mp4">
      </div>
      <div>
    <p class='text'>The correct answer is : <span id='corrected'>${correct}</span></p>
    <button class='start button'>Next</button>
    </div>
    `
  );

}

function renderFinalScore() {
  if(STORE.score > 5){
    $('.quiz-area').html(
      `
      <h2>Outstanding!!!</h2>
      <div>
      <video loop autoplay class='videos'> <source src="images/guru.mp4" type="video/mp4">
      </div>
      <div>
      <p class='text'>You're a weather guru!</span></p>
      <button class='restart button'>Restart Quiz</button>
      </div>
      `
    );
  }
  else {
    $('.quiz-area').html(
      `  
      <h2>You're as cold as ice</h2>
      <div>
      <video loop autoplay class='videos'> <source src="images/js.mp4" type="video/mp4">
      </div>
      <div>
      <p class='text'>Give it another try</span></p>
      <button class='restart button'>Restart Quiz</button>
      </div>
      `
    );
  }
}

function restartQuiz() {
  $('.quiz-area').on('click', '.restart', event => {
    event.preventDefault();
    STORE.currentQuestion = 0;
    STORE.score = 0;
    runTicker();
    loadStartPage();
    $('.ticker').hide();
    
  });
}

function handleQuizApp(){
  loadStartPage();
  nextQuestion();
  checkAnswer();
  restartQuiz();
}

$(handleQuizApp);




