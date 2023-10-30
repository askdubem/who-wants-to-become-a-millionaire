import {useState, useEffect} from "react"


export default function Quiz({
    data, 
    setStop, 
    questionNum, 
    setQuestionNum
}){
    const [question, setQuestion] = useState(null)
    const [selectedAns, setSelectedAns] = useState(null)
    const [className, setClassName] = useState("option")
    
    const delay = (duration, callback)=>{
        setTimeout(()=>{
            callback()
        }, duration)
    }

    useEffect(()=>{
        setQuestion(data[questionNum - 1])
    }, [data, questionNum])


    const clickedAns = (c)=>{
        setSelectedAns(c);
        setClassName("option active");

        delay(3000, ()=>setClassName(c === question.correctAnswer? 
            "option correct" : "option wrong"))

        delay(6000, ()=>{
            if(c === question.correctAnswer){
                setQuestionNum((a)=>a+1)
                setSelectedAns(null)
            }else{
                setStop(true)
            }
        })
    };
    
    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answer-list">
                {question?.options.map((a)=>(
                    <div className= {selectedAns === a? className : "option" } 
                    onClick={()=>clickedAns(a)}>{a}</div>
                ))}
                                
            </div>
        </div>
    )
}
