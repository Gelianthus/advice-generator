import { useState, useEffect } from "react";
import axios from "axios";
import PatternDivider1 from "./images/pattern-divider-desktop.svg";
import PatternDivider2 from "./images/pattern-divider-mobile.svg";
import Dice from "./images/icon-dice.svg";

function AdviceGenerator () {

    const [ advice, setAdvice ] = useState("");
    const [ advicId, setAdviceId ] = useState("")
    useEffect(() => {
        axios.get("https://api.adviceslip.com/advice")
        .then(response => {
            const advice = response
            setAdvice(advice.data.slip.advice);
            setAdviceId(advice.data.slip.id);
        })
    }, [])
    
    const getNewAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then(response => {
            const advice = response
            setAdvice(advice.data.slip.advice);
            setAdviceId(advice.data.slip.id);
        })
    }

    return (
        <main>
            <div className="quote-wrapper">
                <p className="quote-id">ADVICE #{advicId}</p>
                <p className="quote-text">"{advice}"</p>
                <div className="svgs">
                    <div>
                        <img className="pattern-divider-desktop" src={PatternDivider1} alt="pattern divider" />
                        <img className="pattern-divider-mobile" src={PatternDivider2} alt="pattern divider" />
                    </div>
                    <div className="dice-wrapper" onClick={getNewAdvice}>
                        <img className="dice" src={Dice} alt="dice" />
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default AdviceGenerator;