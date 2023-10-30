import {React, useState, useEffect, useMemo} from "react"
import Quiz from "./components/Quiz.js"
import Start from "./components/Start.js"
import Timer from "./components/Timer.js"
import "./App.css"

export default function App() {
  const [username, setUsername] = useState(null)
  const [questionNum, setQuestionNum] = useState(1);
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  const data = [
    {
        id: 1,
        question: "Who was the first President of the United States?",
        options: ["Benjamin Franklin", "Thomas Jefferson", "George Washington", "Abraham Lincoln"],
        correctAnswer: "George Washington"
    },
    {
        id: 2,
        question: "In which year did Christopher Columbus first set foot in the Americas?",
        options: ["1492", "1620", "1776", "1865"],
        correctAnswer: "1492"
    },
    {
        id: 3,
        question: "Who was the famous leader of the Indian independence movement against British rule?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
        correctAnswer: "Mahatma Gandhi"
    },
    {
        id: 4,
        question: "What event marked the start of World War I in 1914?",
        options: ["The sinking of the Titanic", "The assassination of Archduke Franz Ferdinand", "The signing of the Treaty of Versailles", "The Russian Revolution"],
        correctAnswer: "The assassination of Archduke Franz Ferdinand"
    },
    // Add more questions here...
];

  const Money = useMemo(()=>[
    {id: 1, amount:"$ 100"},
    {id: 2, amount:"$ 200"},
    {id: 3, amount:"$ 300"},
    {id: 4, amount:"$ 400"},
    {id: 5, amount:"$ 500"},
    {id: 6, amount:"$ 600"},
    {id: 7, amount:"$ 700"},
    {id: 8, amount:"$ 800"},
    {id: 9, amount:"$ 900"},
    {id: 10, amount:"$ 1000"},
    {id: 11, amount:"$ 1100"},
    {id: 12, amount:"$ 1200"},
    {id: 13, amount:"$ 1300"},
    {id: 14, amount:"$ 1400"},
    {id: 15, amount:"$ 1500"}
  ], []);

  useEffect(()=>{
    questionNum > 1 && setEarned(Money.find((a) =>(a.id === questionNum - 1)
    ).amount);
  }, [Money, questionNum])

  return (
    <div className="App">
      { username ? (
        <>
          <div className="Stage">
          { stop ? <h1 className = "Earned">You earned {earned}</h1> :
              <>
                <div className="top">
                  <div className="timer"><Timer 
                  setStop={setStop} questionNum={questionNum}/>
                  </div>
                </div>
                <div className="bottom">
                  <Quiz 
                  data={data} 
                  questionNum={questionNum}
                  setStop={setStop}
                  setQuestionNum = {setQuestionNum}/>
                </div>
              </>
          }
        
      </div>

      <div className="MoneyPyramid">
        <ul className="moneyList">
          {Money.map((a)=>(
          <li className={questionNum === a.id ? "moneyListItm active" : "moneyListItm"}>
          <span className="moneyListNum">{a.id}</span>
          <span className="moneyListAmt">{a.amount}</span>
        </li>
          )).reverse()}
        </ul>
      </div>
      </> 
      ) : <Start 
      setUsername={setUsername}/>}
    </div>
  )
}