const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  
  const questionElement = document.querySelector('.question');
  const optionsElements = document.querySelectorAll('.option');
  const nextButton = document.getElementById('next');
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElements.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.onclick = () => {
        if (button.textContent === currentQuestion.answer) {
          alert('Correct!');
        } else {
          alert('Wrong!');
        }
      };
    });
  }
  
  nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      alert('Quiz completed!');
    }
  };
  
  loadQuestion();