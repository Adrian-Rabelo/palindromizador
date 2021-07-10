import React, { useState } from "react";
import "./App.css";
import Numero from "./components/Numero.js";
import PalavraRevertida from "./components/PalavraRevertida";

export default function App() {
    let [input, setInput] = useState("");
    let [revertida, setRevertida] = useState("");
    const checkInput = () => {
        return input === "" ? "sem entrada" : input;
    };
    const checkRevertida = () => {
        return input === "" ? "sem entrada" : reverterPalavra(input);
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
                            onChange={(event) => setInput(event.target.value)}
                        />
                        <button
                            onMouseDown={() => {
                                setRevertida(reverterPalavra(input));
                            }}
                            className="reverter">
                            Reverter !
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
                            <div>
                                <PalavraRevertida
                                    palavraRevertida={revertida}
                                />
                            </div>
                        </h1>
                    </div>
                </section>
            </section>
        </>
    );
}
