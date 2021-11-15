import { useEffect, useState } from 'react'
import '../App.css'
import useSound from 'use-sound';
import play from'../sounds/play.mp3'
import wrong from'../sounds/wrong.mp3'
import correct from'../sounds/correct.mp3'
import Medal from '../assets/m1.png'


export default function Trivia ({
    data,
    setStop,
    setQustionNumber,
    qustionNumber })

 {

    const [qustion, setQustion] = useState(null)
    const [selectAnswer, setselectAnswer]= useState(null)
    const [ className, setclassName]= useState('answer')
    const [letsPlay]= useSound(play);
    const [wrongAnswer]= useSound(wrong);
    const [correctAnswer]= useSound(correct);



useEffect(() => {
    letsPlay();

}, [letsPlay]);

useEffect(() => {
    setQustion(data[qustionNumber-1]);
}, [data, qustionNumber])








    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        },duration );
    };


const handleClick = (a) => {
    setselectAnswer(a);
    setclassName('answer active');
    delay(200, () => 
     setclassName(a.correct ? 'answer correct' : 'answer wrong')
    );

   /* if ( qustionNumber === 11 &&  a.correct ) return (
<h1 className='win-text'>Congratulations </h1> <  span className='win-img'> <img src={Medal} /> </span> 
) */




    delay(2000, () => {
   if (a.correct){
    correctAnswer();
    delay(1000 , ( ) => {
        setQustionNumber((prev) => prev + 1);
        setselectAnswer(null)
    })
   
   } else {
    wrongAnswer();
    delay(1000, ()=> {
        setStop(true)
    })
   }
}
   );
    }




    return (
        <div className='trivia'>
<div className='question'> {qustion?.question}</div>
<div className='answers'>
    {qustion?.answers.map((a) => (
<div className={selectAnswer === a ? className : 'answer'} onClick={() => handleClick (a)}  > 
    {a.text}
</div>
    ))}
  </div>  
</div>
    );
}