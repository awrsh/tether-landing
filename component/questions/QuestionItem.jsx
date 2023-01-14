import { useState } from "react"
import { FaCaretDown } from "react-icons/fa"


const QuestionItem = ({item}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div className='item' key={item.id}>
            <div
                onClick={() =>
                    setShowAnswer(!showAnswer)}
                className={`${showAnswer ? "question active" : "question"}`}>
                <span>{item.title}</span>
                <i ><FaCaretDown /></i>
            </div>
            <div className={`${showAnswer ? "answer active" : "answer"}`}>
                <p>{item.info}</p>
            </div>
        </div>)
}

export default QuestionItem