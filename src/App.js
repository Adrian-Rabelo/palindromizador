import React, { useState } from "react";
import "./App.css";
import {AiOutlineArrowDown} from "react-icons/ai"

export default function App() {
    let [input, setInput] = useState("");
    let [revertida, setRevertida] = useState("");
    let [isPalindrome, setIsPalindrome] = useState("");
    const checkInput = () => {
        return input === "" ? "Sem entrada" : input;
    };
    const checkRevertida = () => {
        return revertida === "" ? "Sem entrada" : revertida;
    };

    const checkPalindrome = () => {
        return isPalindrome === "" ? "Ainda não verificado" : isPalindrome;
    };
    function reverterPalavra(palavra) {
        return palavra.split("").reverse().join("");
    }

    return (
        <>
            <div className="geral">
                <div className="row">
                    <div className="title">
                        <h1>Palíndromizador</h1>
                        <input
                        placeholder="Escreva sua palavra aqui"
                            type="text"
                            id="texto"
                            onChange={(event) => {
                                setInput(event.target.value);
                                setRevertida(
                                    reverterPalavra(event.target.value),
                                );
                            }}
                        />
                       
                            <div className="button">
                        <button
                            onMouseDown={() => {
                                if (revertida === input) {
                                    setIsPalindrome(
                                        "Sua palavra é um palíndromo",
                                    );
                                } else {
                                    setIsPalindrome(
                                        "Sua palavra NÃO é um palíndromo",
                                    );
                                }
                            }}
                            className="btnPalindrome">
                            É palíndromo?
                        </button>
                        </div>
                        </div>
                </div>
                <div>
                    <div className="row">
                            <div className="input1">
                                <h3>Sua palavra</h3>
                            <AiOutlineArrowDown/>
                                <p>{checkInput()}</p>
                            </div>
                            <div className="input2">
                                <h3>Palíndromo</h3>
                                <AiOutlineArrowDown />
                                <p>{checkRevertida()} </p>
                            </div>
                            <div>{checkPalindrome()}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
