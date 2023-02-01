import {useState} from 'react'
import './RockPaperSci.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandPaper, faHandScissors, faHandRock, faHandPointer} from '@fortawesome/free-solid-svg-icons'

const hands = [faHandPaper, faHandScissors, faHandRock, faHandPointer]


function RockPaperSci() {

    const [handNum, setHandNum] = useState(3)
    const [handRnd, setHandRnd] = useState(3)
    const [winState, setWinState] = useState("Who will win?")

    const nextHand = () =>{
        setHandNum(handNum + 1)
        if(handNum >= 2){
            setHandNum(0)
        }
    }

    const playHand = () =>{
        setHandRnd(Math.floor(Math.random() * 3))
        // if(handNum == handRnd){
        //     setWinState("DRAW")
        // }
    }
    
  return (
    
    <div className='rockpapersci'>
        <h1>{winState}</h1>
        <div className='hand-player'>
            <FontAwesomeIcon icon={hands[handNum]} onClick={nextHand}></FontAwesomeIcon>
        </div>
        <button className='play-hand' onClick={playHand}>
        PLAY
        </button>
        <div className='hand-random'>
            <FontAwesomeIcon icon={hands[handRnd]}></FontAwesomeIcon>
        </div>
    </div>
  )
}

export default RockPaperSci
