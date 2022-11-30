import { useState } from 'react';
import './CSS/MathCSS.css'



function Maths() {

  const [endGame, setEndGame] = useState(false);
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const randomNum1 = Math.floor(Math.random() * 9)
  const randomNum2 = Math.floor(Math.random() * 9)
  const answer = randomNum1 * randomNum2;


  function handleStartOver() {
    setEndGame(prev => !prev);
    setPoints(0);
    setQuestionNumber(1);
  }



  function randomizeArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleClick(e) {
    if (e.target.value == answer) {
      setPoints(points + 1);
    }
    setQuestionNumber(questionNumber + 1);
    if (questionNumber === 10) {
      setEndGame(true);
    }
  }


  function QuestionAndAnswer({num1, num2}) {
    const numArray = [];
    numArray.push(answer);
    for (let i = 0; i < 3; i++) {
      numArray.push(Math.floor(Math.random() * 81))
    }

    randomizeArray(numArray);
  
    return (
      <div className='gameplay-con'>
        <div className='header-con'>
          <h1>Math Practice!</h1>
          <div className='mathProblem'>{num1} * {num2}</div>
          <div className='points-questions'>
            <div className='question'>Question Number: 10/{questionNumber}</div>
            <div className='points'>Points: {points}/10</div>
          </div>
        </div>
          <div>
            {numArray.map((num, index) => {
              return (
                <button className='answer-buttons' onClick={handleClick} key={index}>
                  <input className='input-button' type='button' value={num}></input>
                </button>
              )
            })}
          </div>
      </div>
    )
  }

function GamePlay() {
return (
      <div>
        {!endGame ? <QuestionAndAnswer
          num1={randomNum1}
          num2={randomNum2}
          answer={answer}
          /> : 
          <div className='header-con'>
            <h1>Final Score</h1>
            <div className='final-score'>{points / 100 * 1000}%!</div>
            <button className='end-button' onClick={handleStartOver}>Start Over?</button>
          </div>}
      </div>
    )
}



  return (
    <div>
      <GamePlay/>
    </div>
  )

}

export default Maths