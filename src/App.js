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
                <section>
                    <div className="textoEntrada">
                        <h1>Palíndromizador</h1>
                        <input
                            type="text"
                            id="texto"
                            onChange={(event) => {
                                setInput(event.target.value);
                                setRevertida(
                                    reverterPalavra(event.target.value),
                                );
                            }}
                        />
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
                            className="reverter">
                            É palíndromo?
                        </button>
                    </div>
                </section>
                <section>
                    <div className="textoEscrito">
                        <h1 className="palavras">
                            <p>Seu texto</p>v
                            <div className="input1">
                                <p>{checkInput()}</p>
                            </div>
                            <hr />
                            <p>Sua palavra revertida</p>v
                            <div className="input2">
                                <p>{checkRevertida()} </p>
                            </div>
                            <div>{checkPalindrome()}</div>
                        </h1>
                    </div>
                </section>
            </section>
        </>
    );
}
