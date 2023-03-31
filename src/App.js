import React, { useState} from 'react'
import './App.css';


function App (){

  const questions = [
    {
    questionText: 'Столица США?',
    answerOptions: [
      {answeText: 'Бостон', isCorrect: false},
      {answeText: 'Вашингтон', isCorrect: true},
      {answeText: 'Нью-Йорк', isCorrect: false},
      {answeText: 'Лос-Анжелес', isCorrect: false},
    ]
  },
  {
    questionText: 'Что не являеться языком программирования?',
    answerOptions: [
      {answeText: 'GO', isCorrect: false},
      {answeText: 'HTML', isCorrect: true},
      {answeText: 'JS', isCorrect: false},
      {answeText: 'Python', isCorrect: false},
    ]
  },
  {
    questionText: 'Какая компания разработала React',
    answerOptions: [
      {answeText: 'Amazon', isCorrect: false},
      {answeText: 'Mail', isCorrect: false},
      {answeText: 'Facebook', isCorrect: true},
      {answeText: 'Google', isCorrect: false},
    ]
  },
  {
    questionText: 'Что НЕ относиться ко вселенной Marvel?',
    answerOptions: [
      {answeText: 'Бэтмен', isCorrect: true},
      {answeText: 'Халк', isCorrect: false},
      {answeText: 'Железный человек', isCorrect: false},
      {answeText: 'Мстители', isCorrect: false},
    ]
  },
  ]

const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false)

const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect){
    setScore (score + 1)
  }

  const nextQuestion = currentQuestion + 1

  if ( nextQuestion < questions.length ){
    setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
}




  return(
  <div className='app'>


  

    {
      showScore
      ? <div className='section__score'>
          <div>Правильных ответов {score} из {questions.length}</div>
        </div>
      : <div className='quizz'>
          <div className='question__section'>
          <div className='question__count'>
            <span>Вопрос {currentQuestion + 1} </span> / {questions.length}
            </div>
            <div className='question__text'> {questions[currentQuestion].questionText}</div>
        </div>
        <div className='answe__section'>
          {questions[currentQuestion].answerOptions.map(item =>(
            <button
            onClick={() => handleAnswerOptionClick(item.isCorrect)}
            >{item.answeText}</button>
          )
          )}
        </div>
    </div>
    }

  </div>
  )
}

export default App;
