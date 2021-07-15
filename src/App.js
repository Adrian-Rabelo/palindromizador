import React, { useState } from "react";
import "./App.css";

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
            <section className="geral">
                <section className="titleSection">
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
                        </div>

                        <div>
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
                </section>
                <section>
                    <div className="content">
                            <div className="input1">
                                <p>{checkInput()}</p>
                            </div>
                            <div className="input2">
                                <p>{checkRevertida()} </p>
                            </div>
                            <div>{checkPalindrome()}</div>
                    </div>
                </section>
            </section>
        </>
    );
}
