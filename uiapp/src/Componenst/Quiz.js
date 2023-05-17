import React, { useState } from 'react';
import { problemms } from './AllQuestions.js';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';


function Quizz() {
  const [currentQues, setCurrentQues] = useState(0);
  const [choosenAns, setChoosenAns] = useState('');
  const [indexOfChoosenAns, setIndexOfChoosenAns] = useState(null);
  const [result, setResult] = useState(false);
  const [grades, setGrades] = useState({
    marks: 0,
    rightAnswers: 0,
    wrongAnswers: 0,
  });

  const [isAnsSelected, setIsAnsSelected] = useState(false);
  const totalQuestions = problemms.length;
  const navigate = useNavigate();

  console.log({totalQuestions})
  const handleNext = () => {
    if (isAnsSelected) {
      setGrades((current) =>
        choosenAns
          ? {
              ...current,
              marks: current.marks + 4,
              rightAnswers: current.rightAnswers + 1,
            }
          : {
              ...current,
              wrongAnswers: current.wrongAnswers + 1,
            }
      );

      if (currentQues !== problemms.length - 1) {
        setCurrentQues((current) => current + 1);
      } else {
        setCurrentQues(0);
        setResult(true);
      }

      setChoosenAns('');
      setIndexOfChoosenAns(null);
      setIsAnsSelected(false);
    }
  };

  const ChoosenAns = (ans, index) => {
    setIndexOfChoosenAns(index);
    if (ans === problemms[currentQues].right_answer) {
      setChoosenAns(true);
    } else {
      setChoosenAns(false);
    }
    setIsAnsSelected(true);
  };

  const { question, answers } = problemms[currentQues];
  const numRightAnswers = grades.rightAnswers;
  const percentageRightAnswers = (numRightAnswers / 30) * 100;

  const handleTextAreaQuiz = () => {
    navigate('/quiz2');
  };

  return (
    <div className='q-container'>
      {!result ? (
        <div className='q-wrapper'>
          <div className='div-h1'>
            <h1 className='q-h1'> Life Quality Test </h1>
          </div>

          <div className='div-h2'>
            {' '}
            <h2 className='q-h2'> {question} </h2>
          </div>

          <div className='div-ul'>
            <ul className='q-ul'>
              {answers.map((ans, index) => (
                <li
                  onClick={() => ChoosenAns(ans, index)}
                  key={ans}
                  className='choosen-ans'
                >
                  - {ans}
                </li>
              ))}
            </ul>
          </div>

          <button className='q-btn' onClick={handleNext} disabled={!isAnsSelected}>
            {currentQues === problemms.length - 1 ? 'finish' : 'next'}
          </button>
        </div>
      ) : (
        <div className='r-wrapper'>
          <h2 className='r-h2'>Result : {percentageRightAnswers} % </h2>
          <a className='.r-link' > 
            <button className='view' onClick={handleTextAreaQuiz}>
                        Try the other test
            </button>
            </a>
  {percentageRightAnswers === 0 ? (
  <p className='concern'> NO dipression.</p>
) : percentageRightAnswers <= 50 ? (
  <p className='r-p'>Mild dipression</p>
) : percentageRightAnswers <= 75 ? (
  <p className='good'> Moderately severe dipression</p>
) : (
  <p className='excellent'>severe dipression</p>
)}
        </div>
      )}
    </div>
  );
}

export default Quizz;