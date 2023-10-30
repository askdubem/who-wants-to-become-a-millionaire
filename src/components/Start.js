import { useRef } from "react"

export default function Start({setUsername}){

    const inputRef = useRef()

    const startQuiz = ()=>{
        inputRef.current.value && setUsername(inputRef.current.value)
    }

    return <div className="startPage">
        <input 
        placeholder="Input your name" 
        className="startInput"
        ref= {inputRef}/>
        <button className="startBtn" onClick={startQuiz}>Start Quiz</button>
    </div>
}